import * as $dara from '@darabonba/typescript';
export declare class CreateMaterialDirectoryRequest extends $dara.Model {
    /**
     * @remarks
     * The application instance ID.
     *
     * This parameter is required.
     *
     * @example
     * WS20260206134746000001
     */
    bizId?: string;
    /**
     * @remarks
     * The name of the folder.
     *
     * This parameter is required.
     *
     * @example
     * Image management
     */
    name?: string;
    /**
     * @remarks
     * The ID of the parent folder.
     *
     * This parameter is required.
     *
     * @example
     * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
     */
    parentDirectoryId?: string;
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
