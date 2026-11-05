import * as $dara from '@darabonba/typescript';
export declare class CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight extends $dara.Model {
    DBInstanceId?: string;
    DBInstanceType?: string;
    readonlyInstanceSQLDelayedTime?: string;
    weight?: string;
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
export declare class CalculateDBInstanceWeightResponseBodyItems extends $dara.Model {
    DBInstanceWeight?: CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight[];
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
export declare class CalculateDBInstanceWeightResponseBody extends $dara.Model {
    items?: CalculateDBInstanceWeightResponseBodyItems;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * C816A4BF-A6EC-4722-95F9-2055859CCFD2
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
