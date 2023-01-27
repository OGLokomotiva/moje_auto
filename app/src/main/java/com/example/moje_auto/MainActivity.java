package com.example.moje_auto;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView webView = (WebView) findViewById(R.id.webview); // Říká, že se jedná o webovou aplikaci
        webView.getSettings().setJavaScriptEnabled(true); // Povoluje JS
        webView.loadUrl("file:///android_asset/index.html"); // Načítá index.html jako hlavní stránku
    }
}