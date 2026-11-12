import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupRegionsRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID. This parameter is required. If you do not specify this parameter, the API returns the InvalidDBClusterId.NotFound error with an HTTP 400 status code. You can call the DescribeDBClusters operation to obtain a valid cluster ID.
     *
     * @example
     * pc-uf64u64fln9039***
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
