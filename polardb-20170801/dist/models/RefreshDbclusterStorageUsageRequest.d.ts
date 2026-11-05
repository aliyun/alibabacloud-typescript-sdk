import * as $dara from '@darabonba/typescript';
export declare class RefreshDBClusterStorageUsageRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * Specifies the synchronization mode. Valid values:
     *
     * - **true**: Real-time synchronization.
     *
     * - **false**: T+1 synchronization.
     *
     * @example
     * true
     */
    syncRealTime?: boolean;
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
