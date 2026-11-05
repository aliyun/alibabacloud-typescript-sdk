import * as $dara from '@darabonba/typescript';
export declare class DetachRCDiskRequest extends $dara.Model {
    /**
     * @remarks
     * A reserved parameter. This parameter is not supported.
     *
     * @example
     * none
     */
    deleteWithInstance?: boolean;
    /**
     * @remarks
     * The ID of the cloud disk to detach.
     *
     * This parameter is required.
     *
     * @example
     * rcd-f8zh55g5gbk1byjr****
     */
    diskId?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rc-dh2jf9n6j4s14926****
     */
    instanceId?: string;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to view available region IDs.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
