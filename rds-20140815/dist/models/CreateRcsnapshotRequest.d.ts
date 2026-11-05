import * as $dara from '@darabonba/typescript';
export declare class CreateRCSnapshotRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * testRC
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * @example
     * test01
     */
    value?: string;
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
export declare class CreateRCSnapshotRequest extends $dara.Model {
    /**
     * @remarks
     * The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
     *
     * Default value: empty.
     *
     * @example
     * test
     */
    description?: string;
    /**
     * @remarks
     * The cloud disk ID.
     *
     * @example
     * rcd-wz9f3peueu5npsl****
     */
    diskId?: string;
    /**
     * @remarks
     * This parameter is deprecated. You do not need to specify it.
     *
     * @example
     * None
     */
    instantAccess?: boolean;
    /**
     * @remarks
     * This parameter is deprecated. You do not need to specify it.
     *
     * @example
     * None
     */
    instantAccessRetentionDays?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rc-t8q22a87745hf8****
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * Settings for the retention period of the snapshot. Unit: days. After the retention period expires, the snapshot is subject to automatic release. Valid values: 1 to 65536.
     *
     * Default value: empty, which indicates that the snapshot is not subject to automatic release.
     *
     * @example
     * 2
     */
    retentionDays?: number;
    /**
     * @remarks
     * The tag details.
     */
    tag?: CreateRCSnapshotRequestTag[];
    /**
     * @remarks
     * This parameter is deprecated. You do not need to specify it.
     *
     * @example
     * None
     */
    zoneId?: string;
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
