import * as $dara from '@darabonba/typescript';
export declare class DescribeDasConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 593AE1C5-B70C-463F-9207-074639******
     */
    requestId?: string;
    /**
     * @remarks
     * Specifies whether to enable automatic storage scaling for the Standard Edition cluster. Valid values:
     *
     * *   Enable
     * *   Disable
     *
     * @example
     * Enable
     */
    storageAutoScale?: string;
    /**
     * @remarks
     * The maximum storage capacity that is allowed for storage automatic scaling of the Standard Edition cluster. Unit: GB.
     *
     * >  This parameter is valid only when the StorageAutoScale parameter is set to Enable.
     *
     * @example
     * 800
     */
    storageUpperBound?: number;
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
