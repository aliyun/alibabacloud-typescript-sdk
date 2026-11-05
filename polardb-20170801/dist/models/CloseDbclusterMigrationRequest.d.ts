import * as $dara from '@darabonba/typescript';
export declare class CloseDBClusterMigrationRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to continue to enable binary logging. Valid values:
     *
     * - **True**: continues to enable binary logging.
     *
     * - **False**: disables binary logging.
     *
     * Default value: **True**.
     *
     * > If binary logging is disabled, your PolarDB cluster is restarted.
     *
     * @example
     * true
     */
    continueEnableBinlog?: boolean;
    /**
     * @remarks
     * The ID of the cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
