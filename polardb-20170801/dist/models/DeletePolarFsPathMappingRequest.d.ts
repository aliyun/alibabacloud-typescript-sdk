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
     * The bucket and corresponding path information.
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
