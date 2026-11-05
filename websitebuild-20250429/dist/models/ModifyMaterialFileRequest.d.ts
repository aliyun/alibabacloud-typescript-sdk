import * as $dara from '@darabonba/typescript';
export declare class ModifyMaterialFileRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * This parameter is required.
     *
     * @example
     * WS12345678
     */
    bizId?: string;
    /**
     * @remarks
     * The file ID.
     *
     * This parameter is required.
     *
     * @example
     * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
     */
    fileId?: string;
    /**
     * @remarks
     * The updated file name.
     *
     * This parameter is required.
     *
     * @example
     * Test file
     */
    name?: string;
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
