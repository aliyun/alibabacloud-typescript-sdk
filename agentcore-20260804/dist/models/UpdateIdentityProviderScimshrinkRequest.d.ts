import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderSCIMShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * Submit business parameters as described in this API document. The body parameters of the public API are mapped to the backend wrapper by the gateway. Do not mix them with the body wrapper of the backend direct connection API.
     *
     * This parameter is required.
     */
    bodyShrink?: string;
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
