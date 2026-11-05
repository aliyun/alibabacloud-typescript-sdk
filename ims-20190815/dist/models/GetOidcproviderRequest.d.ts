import * as $dara from '@darabonba/typescript';
export declare class GetOIDCProviderRequest extends $dara.Model {
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
