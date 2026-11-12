// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLakebaseS3AccountPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarFS instance ID. You can call the DescribePolarFs operation to query available instances and their IDs.
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the regions of all clusters under the target account.
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
   * > You can call the ListLakebaseS3Accounts operation to obtain the account access key. Select an account with AccountType set to user.
   * 
   * This parameter is required.
   * 
   * @example
   * accname
   */
  userAccAk?: string;
  /**
   * @remarks
   * The user account policy in JSON object format. The Version and Statement fields are required. Statement.Action must specify explicit actions such as s3:GetObject and s3:PutObject. The s3:* wildcard is not supported. Statement.Resource must specify explicit ARNs such as arn:aws:s3:::bucket-name/*. A standalone asterisk (*) is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["s3:GetObject","s3:PutObject"],"Resource":["arn:aws:s3:::my-bucket/*"]}]}
   */
  userAccPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      pfsInstanceId: 'PfsInstanceId',
      regionId: 'RegionId',
      userAccAk: 'UserAccAk',
      userAccPolicy: 'UserAccPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pfsInstanceId: 'string',
      regionId: 'string',
      userAccAk: 'string',
      userAccPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

