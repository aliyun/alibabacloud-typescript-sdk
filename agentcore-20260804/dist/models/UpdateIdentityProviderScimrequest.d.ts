import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderSCIMRequestBody extends $dara.Model {
    /**
     * @remarks
     * Do not set this parameter to true during CustomSSO initialization. You can only update this parameter by calling UpdateIdentityProviderSCIM later. Determine the result based on operationStatus.
     *
     * This parameter is required.
     */
    syncEnabled?: boolean;
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
export declare class UpdateIdentityProviderSCIMRequest extends $dara.Model {
    /**
     * @remarks
     * Submit business parameters as described in this API document. The body parameters of the public API are mapped to the backend wrapper by the gateway. Do not mix them with the body wrapper of the backend direct connection API.
     *
     * This parameter is required.
     */
    body?: UpdateIdentityProviderSCIMRequestBody;
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
