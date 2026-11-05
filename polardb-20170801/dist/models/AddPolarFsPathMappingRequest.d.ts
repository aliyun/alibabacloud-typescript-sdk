import * as $dara from '@darabonba/typescript';
/**
 */
export declare class AddPolarFsPathMappingRequestCustomBucketPathList extends $dara.Model {
    /**
     * @remarks
     * The bucket name.
     *
     * @example
     * Bucket1
     */
    bucket?: string;
    /**
     * @remarks
     * The AccessKey ID of the storage bucket.
     *
     * @example
     * xxx
     */
    bucketAccessKeyId?: string;
    /**
     * @remarks
     * The AccessKey secret of the storage bucket.
     *
     * @example
     * xxx
     */
    bucketAccessKeySecret?: string;
    /**
     * @remarks
     * The custom storage path.
     *
     * @example
     * /data1
     */
    path?: string;
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
export declare class AddPolarFsPathMappingRequest extends $dara.Model {
    /**
     * @remarks
     * The bucket and corresponding path information.
     */
    customBucketPathList?: AddPolarFsPathMappingRequestCustomBucketPathList[];
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
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
