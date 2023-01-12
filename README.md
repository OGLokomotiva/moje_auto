# Moje Auto
- *graduation thesis*
- *Version: 0.0.1*

## O aplikaci
Jedná se o moderní nástroj pro správu starších vozů.

## Kompatibilita
- Android 5.1 (Lolipop) a vyšší

## Použité nástroje a technologie
- Android Studio
- HTML, CSS, JavaScrypt, JAVA
- jedná se o tzv. "webapp"

## Dev doc

### Rozložení
`activity_main.xml`
- základní rozvětvení UI (User Interface)
- `FrameLayout` zaobaluje `WebView`
- `WebView` = vyzobrazuje obsah, v našem případě z adresáře `"file:///android_asset/FILE.html"`
- `BottomNavigationView` = spodní navigační bar

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
`navigation_bar.xml`
- obsah `BottomNavigationView`

```
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item
        android:id="home"
        android:onClick=""
        android:enabled="true"
        android:title="Přehled"
        android:icon="@drawable/ic_baseline_directions_car_24"/>
    <item
        android:id="refueling"
        android:enabled="true"
        android:title="Tankování"
        android:icon="@drawable/ic_baseline_local_gas_station_24"/>
    <item
        android:id="settings"
        android:enabled="true"
        android:title="Nastavení"
        android:icon="@drawable/ic_baseline_settings_24"/>
</menu>
```

