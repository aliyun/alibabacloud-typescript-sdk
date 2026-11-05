import * as $dara from '@darabonba/typescript';
export declare class DeleteSAMLProviderRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the IdP that you want to delete.
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
