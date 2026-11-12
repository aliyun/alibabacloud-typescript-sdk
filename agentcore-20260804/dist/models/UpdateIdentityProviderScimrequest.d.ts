import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderSCIMRequestBody extends $dara.Model {
    /**
     * @remarks
     * Do not set this parameter to true during CustomSSO initialization. You can only update this parameter later by calling UpdateIdentityProviderSCIM. Determine the result based on the operationStatus field.
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
     * Submit business parameters as described in this operation. The body parameters of public APIs are mapped to backend wrappers by the gateway. Do not mix them with direct backend body wrappers.
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
