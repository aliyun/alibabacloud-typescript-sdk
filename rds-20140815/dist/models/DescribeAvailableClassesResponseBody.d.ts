import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange extends $dara.Model {
    /**
     * @remarks
     * The maximum storage space. Unit: GB.
     *
     * @example
     * 2000
     */
    maxValue?: number;
    /**
     * @remarks
     * The minimum storage space. Unit: GB.
     *
     * @example
     * 5
     */
    minValue?: number;
    /**
     * @remarks
     * The minimum step size for adjusting the storage space. The storage space increases in fixed increments of 5 GB.
     *
     * @example
     * 5
     */
    step?: number;
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
export declare class DescribeAvailableClassesResponseBodyDBInstanceClasses extends $dara.Model {
    /**
     * @remarks
     * The instance specification.
     *
     * @example
     * rds.mysql.c1.large
     */
    DBInstanceClass?: string;
    /**
     * @remarks
     * The instance storage range.
     */
    DBInstanceStorageRange?: DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange;
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
export declare class DescribeAvailableClassesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of available instance specifications.
     */
    DBInstanceClasses?: DescribeAvailableClassesResponseBodyDBInstanceClasses[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7E4448A6-9FE6-4474-A0C1-AA7CFC772CAC
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
