import * as $dara from '@darabonba/typescript';
export declare class DescribeSlotsResponseBodySlots extends $dara.Model {
    /**
     * @remarks
     * The name of the database where the replication slot resides.
     *
     * @example
     * db_test01
     */
    database?: string;
    /**
     * @remarks
     * The plugin used by the replication slot.
     *
     * @example
     * test_decoding
     */
    plugin?: string;
    /**
     * @remarks
     * The name of the replication slot.
     *
     * @example
     * slot_test01
     */
    slotName?: string;
    /**
     * @remarks
     * The status of the replication slot. Valid values:
     * - ACTIVE: active
     * - INACTIVE: inactive
     *
     * @example
     * INACTIVE
     */
    slotStatus?: string;
    /**
     * @remarks
     * The type of the replication slot. Valid values:
     * - physical: physical
     * - logical: logical
     *
     * @example
     * logical
     */
    slotType?: string;
    /**
     * @remarks
     * The latency of the logical subscription for the subscriber that corresponds to the current replication slot, in seconds.
     *
     * @example
     * 0
     */
    subReplayLag?: string;
    /**
     * @remarks
     * Indicates whether the replication slot is temporary. Valid values:
     * - true: Yes.
     * - false: No.
     *
     * @example
     * false
     */
    temporary?: string;
    /**
     * @remarks
     * The volume of accumulated logs in the replication slot.
     *
     * @example
     * 16 MB
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
export declare class DescribeSlotsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 76AF0609-4195-5DFC-BC78-3AD76FF872BB
     */
    requestId?: string;
    /**
     * @remarks
     * The list of replication slots for the instance.
     */
    slots?: DescribeSlotsResponseBodySlots[];
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
