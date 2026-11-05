import * as $dara from '@darabonba/typescript';
export declare class CreateCredentialShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for creating a credential.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * Not supported.
     *
     * @example
     * Not supported
     */
    clientToken?: string;
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
