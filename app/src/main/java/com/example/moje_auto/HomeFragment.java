package com.example.moje_auto;

import android.os.Bundle;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class HomeFragment extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View myView = inflater.inflate(R.layout.fragment_refueling, container, false);

        WebView webView = myView.findViewById(R.id.webviewRefueling);
        webView.loadUrl("file:///android_asset/index.html"); // Načítá FILE.html
        webView.getSettings().setJavaScriptEnabled(true); // Povoluje JS
        webView.getSettings().setDomStorageEnabled(true); // Povoluje localStorage
        WebSettings webSettings = webView.getSettings();

        return myView;
    }
}