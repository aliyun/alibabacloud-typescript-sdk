import * as $dara from '@darabonba/typescript';
export declare class QueryMaterialFileDetailRequest extends $dara.Model {
    /**
     * @remarks
     * The application instance ID.
     *
     * This parameter is required.
     *
     * @example
     * WD20250814102215000001
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
