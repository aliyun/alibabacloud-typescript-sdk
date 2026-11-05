import * as $dara from '@darabonba/typescript';
export declare class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
    /**
     * @remarks
     * The time when the snapshot was created. The time is displayed in UTC and follows the [ISO8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
     *
     * @example
     * 2020-12-20T14:52:28Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The snapshot description.
     *
     * @example
     * testDescription
     */
    description?: string;
    /**
     * @remarks
     * The ID of the cloud desktop to which the snapshot belongs.
     *
     * @example
     * ecd-g03l3tlm8djoj****
     */
    desktopId?: string;
    /**
     * @remarks
     * The progress of creating the cloud desktop.
     *
     * @example
     * 100%
     */
    progress?: string;
    /**
     * @remarks
     * The remaining time required to complete the creation of the snapshot. Unit: seconds.
     *
     * @example
     * 30
     */
    remainTime?: number;
    /**
     * @remarks
     * The restore point ID.
     *
     * @example
     * rp-btgmaa20wkcju****
     */
    restorePointId?: string;
    /**
     * @remarks
     * The restore point name.
     *
     * @example
     * Data disk backup
     */
    restorePointName?: string;
    /**
     * @remarks
     * The snapshot ID.
     *
     * @example
     * s-2zeipxmnhej803x7****
     */
    snapshotId?: string;
    /**
     * @remarks
     * The snapshot name.
     *
     * @example
     * testSnapshotName
     */
    snapshotName?: string;
    /**
     * @remarks
     * The snapshot creation type.
     *
     * @example
     * USER
     */
    snapshotType?: string;
    /**
     * @remarks
     * The size of the source cloud disk. Unit: GiB.
     *
     * @example
     * 150
     */
    sourceDiskSize?: string;
    /**
     * @remarks
     * The type of the source cloud disk.
     *
     * @example
     * SYSTEM
     */
    sourceDiskType?: string;
    /**
     * @remarks
     * The snapshot status.
     *
     * @example
     * ACCOMPLISHED
     */
    status?: string;
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
export declare class DescribeSnapshotsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The pagination token used to start the next query. An empty value indicates that no more results are available.
     *
     * @example
     * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
     */
    requestId?: string;
    /**
     * @remarks
     * The snapshot information.
     */
    snapshots?: DescribeSnapshotsResponseBodySnapshots[];
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
