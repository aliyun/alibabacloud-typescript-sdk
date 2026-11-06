import * as $dara from '@darabonba/typescript';
export declare class ResetUserPasswordShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for resetting a user password.
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
