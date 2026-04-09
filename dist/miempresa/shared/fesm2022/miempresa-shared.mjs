import * as i0 from '@angular/core';
import { Component, Injectable } from '@angular/core';

class Button {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: Button, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.8", type: Button, isStandalone: true, selector: "lib-button", ngImport: i0, template: "<p>button works!</p>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: Button, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', imports: [], template: "<p>button works!</p>\n" }]
        }] });

class Auth {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: Auth, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: Auth, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: Auth, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/*
 * Public API Surface of shared
 */
// export * from './lib/shared';

/**
 * Generated bundle index. Do not edit.
 */

export { Auth, Button };
//# sourceMappingURL=miempresa-shared.mjs.map
