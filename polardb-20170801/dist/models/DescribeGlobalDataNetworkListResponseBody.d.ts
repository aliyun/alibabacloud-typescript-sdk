import * as $dara from '@darabonba/typescript';
export declare class DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels extends $dara.Model {
    /**
     * @remarks
     * The synchronization channel ID.
     *
     * @example
     * gdc-xxx
     */
    channelId?: string;
    /**
     * @remarks
     * The synchronization channel status. Valid values:
     *
     * - **Creating**: Being created.
     * - **Running**: Running.
     * - **Syncing**: Being synchronized.
     * - **SyncFinished**: Synchronization completed.
     * - **SyncFailed**: Synchronization failed.
     * - **SyncPartialFailed**: Partial synchronization failed.
     * - **Stopped**: Stopped.
     * - **Maintaining**: Under maintenance.
     * - **Restarting**: Being restarted.
     * - **Locking**: Being locked.
     * - **Locked**: Locked.
     * - **Unlocking**: Being unlocked.
     * - **Deleting**: Being deleted.
     * - **Deleted**: Deleted.
     *
     * @example
     * Syncing
     */
    channelStatus?: string;
    /**
     * @remarks
     * Specifies whether to freeze the source path during the transfer.
     *
     * @example
     * true
     */
    freezeSourceDuringSync?: boolean;
    /**
     * @remarks
     * The current synchronization progress.
     *
     * > The value is a floating-point percentage with two decimal places.
     *
     * @example
     * 11.45%
     */
    progress?: string;
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
export declare class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations extends $dara.Model {
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
     * The destination Polarlakebase instance.
     *
     * @example
     * pfs-xxx
     */
    destinationId?: string;
    /**
     * @remarks
     * The destination region.
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
export declare class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources extends $dara.Model {
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
     * The source Polarlakebase instance.
     *
     * @example
     * pcs-xxx
     */
    sourceId?: string;
    /**
     * @remarks
     * The source region.
     *
     * @example
     * cn-wulanchabu
     */
    sourceRegion?: string;
    /**
     * @remarks
     * The source type. Valid values:
     *
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
export declare class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology extends $dara.Model {
    /**
     * @remarks
     * The list of synchronization destinations.
     */
    destinations?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations[];
    /**
     * @remarks
     * The list of synchronization sources.
     */
    sources?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources[];
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
export declare class DescribeGlobalDataNetworkListResponseBodyItemsNetworks extends $dara.Model {
    /**
     * @remarks
     * The list of synchronization channels.
     */
    channels?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels[];
    /**
     * @remarks
     * The creation time of the GDN.
     *
     * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2025-03-25T09:37:10Z
     */
    createTime?: string;
    /**
     * @remarks
     * The description of the GDN.
     *
     * @example
     * mygdn
     */
    networkDescription?: string;
    /**
     * @remarks
     * GDN ID
     *
     * @example
     * gdn-xxx
     */
    networkId?: string;
    /**
     * @remarks
     * The GDN status. Valid values:
     *
     * - **Creating**: Being created.
     * - **Running**: Running.
     * - **Syncing**: Being synchronized.
     * - **SyncFinished**: Synchronization completed.
     * - **SyncFailed**: Synchronization failed.
     * - **SyncPartialFailed**: Partial synchronization failed.
     * - **Stopped**: Stopped.
     * - **Maintaining**: Under maintenance.
     * - **Restarting**: Being restarted.
     * - **Locking**: Being locked.
     * - **Locked**: Locked.
     * - **Unlocking**: Being unlocked.
     * - **Deleting**: Being deleted.
     * - **Deleted**: Deleted.
     *
     * @example
     * Running
     */
    networkStatus?: string;
    /**
     * @remarks
     * The GDN network topology.
     */
    networkTopology?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology;
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
export declare class DescribeGlobalDataNetworkListResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The list of GDN networks.
     */
    networks?: DescribeGlobalDataNetworkListResponseBodyItemsNetworks[];
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
export declare class DescribeGlobalDataNetworkListResponseBody extends $dara.Model {
    /**
     * @remarks
     * The GDN details.
     */
    items?: DescribeGlobalDataNetworkListResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of records on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CD35F3-F3-44CA-AFFF-BAF869******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 1
     */
    totalRecordCount?: string;
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
