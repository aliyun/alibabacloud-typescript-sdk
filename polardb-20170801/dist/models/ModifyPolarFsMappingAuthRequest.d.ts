import * as $dara from '@darabonba/typescript';
export declare class ModifyPolarFsMappingAuthRequest extends $dara.Model {
    /**
     * @remarks
     * The bucket name.
     *
     * This parameter is required.
     *
     * @example
     * pfs-xxx.oss-[regionId]-internal.aliyuncs.com
     */
    bucket?: string;
    /**
     * @remarks
     * The AccessKey ID of the storage bucket.
     *
     * This parameter is required.
     *
     * @example
     * LTAI5tExampleAccessKeyId
     */
    bucketAccessKeyId?: string;
    /**
     * @remarks
     * The AccessKey secret of the storage bucket.
     *
     * This parameter is required.
     *
     * @example
     * exampleAccessKeySecret1234567890
     */
    bucketAccessKeySecret?: string;
    /**
     * @remarks
     * The cluster ID. This parameter is required. If you do not provide this parameter, the service returns InvalidDBClusterId.Malformed. You can call DescribeDBClusters to query the cluster ID in the destination region.
     *
     * @example
     * pc-******************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The destination path.
     *
     * This parameter is required.
     *
     * @example
     * /test
     */
    path?: string;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
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
