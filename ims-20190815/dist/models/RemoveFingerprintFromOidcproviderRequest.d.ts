import * as $dara from '@darabonba/typescript';
export declare class RemoveFingerprintFromOIDCProviderRequest extends $dara.Model {
    /**
     * @remarks
     * The fingerprint that you want to remove.
     *
     * @example
     * 6938fd4d98bab03faadb97b34396831e3780****
     */
    fingerprint?: string;
    /**
     * @remarks
     * The name of the OIDC IdP.
     *
     * @example
     * TestOIDCProvider
     */
    OIDCProviderName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
