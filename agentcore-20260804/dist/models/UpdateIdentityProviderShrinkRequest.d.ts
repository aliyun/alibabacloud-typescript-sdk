import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * Submit business parameters as described in this operation. The body parameters of public APIs are mapped to backend wrappers by the gateway. Do not mix them with backend direct connection body wrappers.
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
