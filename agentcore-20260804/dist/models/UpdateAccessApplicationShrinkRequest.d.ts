import * as $dara from '@darabonba/typescript';
export declare class UpdateAccessApplicationShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for updating the access application.
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
