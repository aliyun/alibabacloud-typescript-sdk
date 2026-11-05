import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceDdosCountResponseBodyDdosCount extends $dara.Model {
    /**
     * @remarks
     * The number of instances under blackhole filtering.
     *
     * @example
     * 0
     */
    blackholeCount?: string;
    /**
     * @remarks
     * The number of instances that are undergoing traffic scrubbing.
     *
     * @example
     * 0
     */
    defenseCount?: string;
    /**
     * @remarks
     * The total number of instances.
     *
     * @example
     * 6
     */
    instacenCount?: string;
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
export declare class DescribeRCInstanceDdosCountResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the number of instances that are under DDoS attacks.
     */
    ddosCount?: DescribeRCInstanceDdosCountResponseBodyDdosCount;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F77F3176-AAEA-5836-B2B4-A854E3EF****_Zv**
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
