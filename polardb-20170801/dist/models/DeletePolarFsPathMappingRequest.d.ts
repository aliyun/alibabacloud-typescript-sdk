import * as $dara from '@darabonba/typescript';
export declare class DeletePolarFsPathMappingRequestCustomBucketPathList extends $dara.Model {
    /**
     * @remarks
     * The custom storage bucket.
     *
     * @example
     * Bucket
     */
    bucket?: string;
    /**
     * @remarks
     * The custom storage path.
     *
     * @example
     * /data
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
export declare class DeletePolarFsPathMappingRequest extends $dara.Model {
    /**
     * @remarks
     * The bucket and corresponding path information. Usage notes: This parameter is required. You must provide at least one element, and each element must include Bucket (the OSS internal endpoint, in the format of {bucket}.oss-{regionId}-internal.aliyuncs.com) and Path. If this parameter is not provided or an empty array is provided, the API returns InvalidPolarFsPathList.Malformed (400).
     *
     * @example
     * []
     */
    customBucketPathList?: DeletePolarFsPathMappingRequestCustomBucketPathList[];
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
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
