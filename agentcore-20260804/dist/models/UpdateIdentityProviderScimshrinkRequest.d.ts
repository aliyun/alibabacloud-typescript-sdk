import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderSCIMShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * Submit business parameters as described in this operation. For public API operations, body parameters are mapped to backend wrappers by the gateway. Do not mix them with direct backend body wrappers.
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
