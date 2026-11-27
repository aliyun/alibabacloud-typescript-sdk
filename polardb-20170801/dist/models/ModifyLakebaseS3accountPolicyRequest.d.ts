import * as $dara from '@darabonba/typescript';
export declare class ModifyLakebaseS3AccountPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarFS instance ID. You can call DescribePolarFs to query available instances and their IDs.
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
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the regions of all clusters under the account.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The access key of the S3 account for which you want to modify the policy.
     *
     * > You cannot modify the default account.
     *
     * > You can call ListLakebaseS3Accounts to obtain the account access key. Select an account with AccountType=user.
     *
     * This parameter is required.
     *
     * @example
     * accname
     */
    userAccAk?: string;
    /**
     * @remarks
     * The user account policy in JSON object format. The Version and Statement fields are required. For Statement.Action, specify exact operations such as s3:GetObject and s3:PutObject. The s3:* wildcard is not supported. For Statement.Resource, specify exact ARNs such as arn:aws:s3:::bucket-name/*. A standalone asterisk (*) is not supported.
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
