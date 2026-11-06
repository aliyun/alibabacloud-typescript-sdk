import * as $dara from '@darabonba/typescript';
export declare class CreateIdentityProviderShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for binding an external identity provider.
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
