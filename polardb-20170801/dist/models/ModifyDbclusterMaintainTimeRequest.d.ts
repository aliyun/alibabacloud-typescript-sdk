import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterMaintainTimeRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The maintenance window of the cluster. The format is `HH:mmZ- HH:mmZ`. For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+08:00).
     *
     * > The maintenance window must start on the hour and last for one hour.
     *
     * This parameter is required.
     *
     * @example
     * 02:00Z-03:00Z
     */
    maintainTime?: string;
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
