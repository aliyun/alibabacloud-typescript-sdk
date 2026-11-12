import * as $dara from '@darabonba/typescript';
export declare class DescribeReplicationSlotsResponseBodySlots extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB cluster to which the replication slot belongs.
     *
     * @example
     * pc-test123456
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database associated with the replication slot.
     *
     * @example
     * testDB
     */
    database?: string;
    /**
     * @remarks
     * The name of the output plugin used by the logical replication slot.
     *
     * @example
     * testPlugin
     */
    plugin?: string;
    /**
     * @remarks
     * The name of the replication slot.
     *
     * @example
     * testSlot
     */
    slotName?: string;
    /**
     * @remarks
     * The status of the replication slot.
     *
     * @example
     * active
     */
    slotStatus?: string;
    /**
     * @remarks
     * The type of the replication slot.
     *
     * @example
     * logical
     */
    slotType?: string;
    /**
     * @remarks
     * The name of the child node of the distributed instance.
     *
     * @example
     * testGroup
     */
    subGroupName?: string;
    /**
     * @remarks
     * The replay lag of the subscription.
     *
     * @example
     * 100
     */
    subReplayLag?: string;
    /**
     * @remarks
     * Indicates whether the replication slot is temporary. The value is a string: true or false.
     *
     * @example
     * false
     */
    temporary?: string;
    /**
     * @remarks
     * The WAL latency.
     *
     * @example
     * 50
     */
    walDelay?: string;
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
export declare class DescribeReplicationSlotsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2921D843-433A-5FB3-A03B-4EC093B219F8
     */
    requestId?: string;
    /**
     * @remarks
     * The list of replication slots.
     */
    slots?: DescribeReplicationSlotsResponseBodySlots[];
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
