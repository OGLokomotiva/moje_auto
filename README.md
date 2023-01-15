# Moje Auto
- *graduation thesis*
- moderní nástroj pro správu starších vozů
- kompatibilní s OS Androind 5.1 (Lolipop) a vyšší

## Dev documentation

### Použité nástroje a technologie
- Android Studio
- HTML, CSS, JavaScrypt, JAVA
- cordova-plugin-file (knihovna pr JS)

### Rozložení UI
- jsou využívány komponenty:
    - [`ConstraintLayout`](https://developer.android.com/develop/ui/views/layout/constraint-layout)
    - [`FrameLayout`](https://developer.android.com/reference/android/widget/FrameLayout)
    - [`WebView`](https://developer.android.com/reference/android/webkit/WebView)
    - [`BottomNavigationView`](https://developer.android.com/reference/com/google/android/material/bottomnavigation/BottomNavigationView)
    - [`menu`](https://developer.android.com/reference/android/view/Menu)

#### Krátký popis rozložení
- komponenta [`FrameLayout`](https://developer.android.com/reference/android/widget/FrameLayout) zaobaluje komponentu [`WebView`](https://developer.android.com/reference/android/webkit/WebView)
- komponenta [`WebView`](https://developer.android.com/reference/android/webkit/WebView) vyzobrazuje obsah, v našem případě z adresáře `"file:///android_asset/FILE.html"`
- komponenta [`BottomNavigationView`](https://developer.android.com/reference/com/google/android/material/bottomnavigation/BottomNavigationView) vyzobrazuje spodní navigační bar
- prvky navigačního baru tvoří komponenta [`menu`](https://developer.android.com/reference/android/view/Menu)

> activity_main.xml
```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_above="@+id/bottom_navigation"
        android:orientation="vertical">

        <WebView
            android:id="@+id/webview"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
    </FrameLayout>

    <com.google.android.material.bottomnavigation.BottomNavigationView
        android:id="@+id/bottom_navigation"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        app:itemBackground="@color/white"
        app:itemIconTint="@color/black"
        app:layout_constraintBottom_toBottomOf="parent"
        app:menu="@menu/navigation_bar" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

### Navigace

> bottom_navigation.xml
> - prvky navigace ([`BottomNavigationView`](https://developer.android.com/reference/com/google/android/material/bottomnavigation/BottomNavigationView)), určuje komponenta [`menu`](https://developer.android.com/reference/android/view/Menu)

```
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item
        android:id="@+id/nav_home"
        android:enabled="true"
        android:title="Přehled"
        android:icon="@drawable/ic_baseline_directions_car_24"/>
    <item
        android:id="@+id/nav_refueling"
        android:enabled="true"
        android:title="Tankování"
        android:icon="@drawable/ic_baseline_local_gas_station_24"/>
    <item
        android:id="@+id/nav_settings"
        android:enabled="true"
        android:title="Nastavení"
        android:icon="@drawable/ic_baseline_settings_24"/>
</menu>
```

> MainActivity.java
> - - jednotlivé buttony v navigačním baru, odkazují na fragmenty, které následovně vyzobrazují obsah, načtením příslušného .html souboru
```
bottomNavigation.setOnItemSelectedListener(new NavigationBarView.OnItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                Fragment selectedFragment = null;

                switch (item.getItemId()) {
                    case R.id.nav_home:
                        selectedFragment = new HomeFragment();
                        break;
                    case R.id.nav_refueling:
                        selectedFragment = new RefuelingFragment();
                        break;
                    case R.id.nav_settings:
                        selectedFragment = new SettingsFragment();
                        break;
                }

                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, selectedFragment).commit();

                return true;
            }
        });
```

### Práce s uložištěm zařízení
- nutný souhlas uživatele
- je užívána knihovna pro JS - cordova-plugin-file

#### Souhlas živatele

#### Instalace knihovny
