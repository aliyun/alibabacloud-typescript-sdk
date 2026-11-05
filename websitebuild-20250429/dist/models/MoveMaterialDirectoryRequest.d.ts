import * as $dara from '@darabonba/typescript';
export declare class MoveMaterialDirectoryRequest extends $dara.Model {
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
     * The folder ID.
     *
     * This parameter is required.
     *
     * @example
     * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
     */
    directoryId?: string;
    /**
     * @remarks
     * The ID of the target parent folder.
     *
     * This parameter is required.
     *
     * @example
     * 58157a0a-769a-4364-bbdc-a0e2cf3d5a2
     */
    parentDirectoryId?: string;
    /**
     * @remarks
     * The sort order.
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    sortNum?: number;
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
