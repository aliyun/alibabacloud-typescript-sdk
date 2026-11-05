import * as $dara from '@darabonba/typescript';
export declare class ValidateAgentCodePackageFromOssShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
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
