// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakebaseS3AccountRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarFS instance ID. You can obtain the ID from the PolarFsInstanceId parameter returned by the CreatePolarFs operation.
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
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The access key of the S3 account.
   * 
   * > The account name supports only uppercase and lowercase letters and digits, and can be up to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * accname
   */
  userAccAk?: string;
  /**
   * @remarks
   * The policy document in JSON format that defines the permissions of the S3 account. If this parameter is not specified, the default policy is used.
   * 
   * @example
   * {"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["s3:*"],"Resource":["*"]}]}
   */
  userAccPolicy?: string;
  /**
   * @remarks
   * The secret key of the S3 account (@sensitive, encryption in transit).
   * 
   * > The value must contain both uppercase and lowercase letters and digits, and must be 19 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * password***
   */
  userAccSk?: string;
  static names(): { [key: string]: string } {
    return {
      pfsInstanceId: 'PfsInstanceId',
      regionId: 'RegionId',
      userAccAk: 'UserAccAk',
      userAccPolicy: 'UserAccPolicy',
      userAccSk: 'UserAccSk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pfsInstanceId: 'string',
      regionId: 'string',
      userAccAk: 'string',
      userAccPolicy: 'string',
      userAccSk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

