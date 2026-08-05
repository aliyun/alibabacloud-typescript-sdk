// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakebaseS3AccountRequest extends $dara.Model {
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
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Access Key of the S3 account.
   * 
   * > The account name can contain only uppercase letters, lowercase letters, and digits, and cannot exceed 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * accname
   */
  userAccAk?: string;
  /**
   * @remarks
   * A policy document in JSON format that defines the permissions of the S3 account. If this parameter is not specified, the default policy is used.
   * 
   * @example
   * {"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["s3:*"],"Resource":["*"]}]}
   */
  userAccPolicy?: string;
  /**
   * @remarks
   * The Secret Key of the S3 account (@sensitive, encryption in transit).
   * 
   * > The key must contain uppercase letters, lowercase letters, and digits, and must be greater than 18 and no more than 32 characters in length.
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

