import * as $dara from '@darabonba/typescript';
export declare class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames extends $dara.Model {
    readDBInstanceName?: string[];
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
export declare class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes extends $dara.Model {
    readDelayTime?: string[];
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
export declare class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay extends $dara.Model {
    flushLag?: string;
    flushLatency?: string;
    readDBInstanceName?: string;
    replayLag?: string;
    replayLatency?: string;
    sendLatency?: string;
    writeLag?: string;
    writeLatency?: string;
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
export declare class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay extends $dara.Model {
    readonlyInstanceDelay?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay[];
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
export declare class DescribeReadDBInstanceDelayResponseBodyItemsItems extends $dara.Model {
    DBInstanceId?: string;
    readDBInstanceNames?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames;
    readDelayTimes?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes;
    readonlyInstanceDelay?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay;
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
export declare class DescribeReadDBInstanceDelayResponseBodyItems extends $dara.Model {
    items?: DescribeReadDBInstanceDelayResponseBodyItemsItems[];
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
export declare class DescribeReadDBInstanceDelayResponseBody extends $dara.Model {
    /**
     * @remarks
     * The primary instance ID.
     *
     * @example
     * rm-bp****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The latency, in seconds.
     *
     * @example
     * 0
     */
    delayTime?: number;
    items?: DescribeReadDBInstanceDelayResponseBodyItems;
    /**
     * @remarks
     * The read-only instance ID.
     *
     * @example
     * rr-bp****
     */
    readDBInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F1BDDEA8-452D-450B-AB10-CD5C5BAFC5DF
     */
    requestId?: string;
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
