import * as $dara from '@darabonba/typescript';
export declare class CheckPolarFsQuotaConsistencyResponseBodyQuotaItem extends $dara.Model {
    /**
     * @remarks
     * The storage capacity quota.
     *
     * @example
     * 104857600
     */
    capacity?: number;
    /**
     * @remarks
     * The inode quota.
     *
     * @example
     * 50000
     */
    inodes?: number;
    /**
     * @remarks
     * The directory path.
     *
     * @example
     * /zookeepertest718
     */
    path?: string;
    /**
     * @remarks
     * The used capacity, in bytes.
     *
     * @example
     * 104857600
     */
    usedCapacity?: number;
    /**
     * @remarks
     * The number of used inodes.
     *
     * @example
     * 1
     */
    usedInodes?: number;
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
export declare class CheckPolarFsQuotaConsistencyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarFS instance.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * An object that contains details about the quota.
     */
    quotaItem?: CheckPolarFsQuotaConsistencyResponseBodyQuotaItem;
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
