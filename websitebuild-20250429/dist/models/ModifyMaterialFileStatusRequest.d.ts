import * as $dara from '@darabonba/typescript';
export declare class ModifyMaterialFileStatusRequest extends $dara.Model {
    /**
     * @remarks
     * The business instance ID.
     *
     * This parameter is required.
     *
     * @example
     * WS12345678
     */
    bizId?: string;
    /**
     * @remarks
     * The file IDs.
     *
     * This parameter is required.
     */
    fileIds?: string[];
    /**
     * @remarks
     * The updated status.
     *
     * This parameter is required.
     *
     * @example
     * NORMAL
     */
    status?: string;
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
