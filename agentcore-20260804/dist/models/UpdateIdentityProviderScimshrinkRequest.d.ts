import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderSCIMShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The business parameters submitted in the request body. The body parameters of public APIs are mapped to backend wrappers by the gateway and must not be mixed with direct backend body wrappers.
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
