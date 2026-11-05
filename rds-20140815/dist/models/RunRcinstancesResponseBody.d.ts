import * as $dara from '@darabonba/typescript';
export declare class RunRCInstancesResponseBodyInstanceIdSets extends $dara.Model {
    instanceIdSet?: string[];
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
export declare class RunRCInstancesResponseBody extends $dara.Model {
    instanceIdSets?: RunRCInstancesResponseBodyInstanceIdSets;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 237850846720798
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 535BD857-E88F-5B4F-A18C-FAF59A74741F
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
