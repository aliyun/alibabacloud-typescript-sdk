import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossCloudLevelsResponseBodyCrossCloudLevelList extends $dara.Model {
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The specification code.
     *
     * @example
     * polar.mysql.g4.medium.c
     */
    levelCode?: string;
    /**
     * @remarks
     * The CPU and memory.
     *
     * @example
     * 2 cores and 8 GB
     */
    levelName?: string;
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
export declare class DescribeCrossCloudLevelsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of specifications supported for cross-cloud.
     */
    crossCloudLevelList?: DescribeCrossCloudLevelsResponseBodyCrossCloudLevelList[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E56531A4-E552-40BA-9C58-137B80******
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
