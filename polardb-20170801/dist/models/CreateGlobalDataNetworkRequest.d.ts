import * as $dara from '@darabonba/typescript';
export declare class CreateGlobalDataNetworkRequest extends $dara.Model {
    /**
     * @remarks
     * The description or remark of the GDN.
     *
     * @example
     * mygdn
     */
    description?: string;
    /**
     * @remarks
     * The destination path.
     *
     * @example
     * /
     */
    destinationFileSystemPath?: string;
    /**
     * @remarks
     * The destination Polarlakebase instance. Note: This parameter is required.
     *
     * @example
     * pfs-xxx
     */
    destinationId?: string;
    /**
     * @remarks
     * The region of the destination Polarlakebase instance.
     *
     * @example
     * cn-beijing
     */
    destinationRegion?: string;
    /**
     * @remarks
     * The destination type. Valid values:
     *   - **pfs**: Polarlakebase High-performance Edition.
     *   - **pcs**: Polarlakebase Cold Storage Edition.
     *
     * @example
     * pfs
     */
    destinationType?: string;
    /**
     * @remarks
     * Specifies whether to freeze the source path during data transmission. Valid values:
     *   - **true**: Freezes the source path.
     *   - **false**: Does not freeze the source path.
     *
     * > Currently, only OSS sources are supported.
     *
     * @example
     * true
     */
    freezeSourceDuringSync?: string;
    /**
     * @remarks
     * The source path.
     *
     * @example
     * /
     */
    sourceFileSystemPath?: string;
    /**
     * @remarks
     * The source Polarlakebase instance. Note: This parameter is required.
     *
     * @example
     * pcs-xxx
     */
    sourceId?: string;
    /**
     * @remarks
     * The region of the source Polarlakebase instance.
     *
     * @example
     * cn-wulanchabu
     */
    sourceRegion?: string;
    /**
     * @remarks
     * The source type. Valid values:
     *   - **pfs**: Polarlakebase High-performance Edition.
     *   - **pcs**: Polarlakebase Cold Storage Edition.
     *
     * @example
     * pcs
     */
    sourceType?: string;
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
