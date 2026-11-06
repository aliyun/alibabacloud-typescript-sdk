import * as $dara from '@darabonba/typescript';
export declare class GetIdentityProviderServiceProviderRequest extends $dara.Model {
    /**
     * @remarks
     * Required. The query parameter. Only the exact value SAML is supported. The response returns SAML.
     *
     * This parameter is required.
     *
     * @example
     * SAML
     */
    protocol?: string;
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
