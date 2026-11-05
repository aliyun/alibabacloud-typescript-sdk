import * as $dara from '@darabonba/typescript';
export declare class MoveMaterialFileRequest extends $dara.Model {
    /**
     * @remarks
     * The application instance ID.
     *
     * This parameter is required.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The directory ID.
     *
     * This parameter is required.
     *
     * @example
     * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
     */
    directoryId?: string;
    /**
     * @remarks
     * The list of file IDs.
     *
     * This parameter is required.
     */
    fileIds?: string[];
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
