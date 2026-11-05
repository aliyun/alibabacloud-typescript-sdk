import * as $dara from '@darabonba/typescript';
export declare class DeleteLakebaseS3AccountRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-xxx
     */
    pfsInstanceId?: string;
    /**
     * @remarks
     * The region ID.
     * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The AccessKey of the S3 account that you want to delete.
     *
     * > You cannot delete the default account.
     *
     * This parameter is required.
     *
     * @example
     * accname
     */
    userAccAk?: string;
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
