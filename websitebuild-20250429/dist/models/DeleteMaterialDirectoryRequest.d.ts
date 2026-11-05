import * as $dara from '@darabonba/typescript';
export declare class DeleteMaterialDirectoryRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The ID of the folder.
     *
     * @example
     * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
     */
    directoryId?: string;
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
