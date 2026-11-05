import * as $dara from '@darabonba/typescript';
export declare class UpdateMemoryShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The update memory request.
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
