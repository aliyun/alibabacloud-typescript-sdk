import * as $dara from '@darabonba/typescript';
export declare class GetSAMLProviderRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the identity provider. You can call ListSAMLProviders to view existing identity providers or CreateSAMLProvider to create a new identity provider.
     *
     * This parameter is required.
     *
     * @example
     * test-provider
     */
    SAMLProviderName?: string;
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
