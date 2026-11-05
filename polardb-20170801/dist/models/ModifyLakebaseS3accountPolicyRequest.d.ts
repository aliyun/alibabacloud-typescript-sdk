import * as $dara from '@darabonba/typescript';
export declare class ModifyLakebaseS3AccountPolicyRequest extends $dara.Model {
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
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the regions of all clusters under the target account.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The access key of the S3 account whose policy you want to modify.
     *
     * > You cannot modify the default account.
     *
     * This parameter is required.
     *
     * @example
     * accname
     */
    userAccAk?: string;
    /**
     * @remarks
     * The user account policy.
     *
     * This parameter is required.
     *
     * @example
     * {"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["s3:GetObject","s3:PutObject"],"Resource":["arn:aws:s3:::my-bucket/*"]}]}
     */
    userAccPolicy?: string;
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
