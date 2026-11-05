import * as $dara from '@darabonba/typescript';
export declare class ExportMaterialFileShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The business instance ID.
     *
     * This parameter is required.
     *
     * @example
     * WS20250801154628000001
     */
    bizId?: string;
    /**
     * @remarks
     * The list of file IDs.
     *
     * This parameter is required.
     */
    fileIdsShrink?: string;
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
