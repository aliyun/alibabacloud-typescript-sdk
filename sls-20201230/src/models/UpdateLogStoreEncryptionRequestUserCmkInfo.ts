// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogStoreEncryptionRequestUserCmkInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the CMK to which the BYOK key belongs. You can create a CMK in KMS. The CMK must be in the same region as the endpoint of Simple Log Service.
   * 
   * @example
   * f5136b95-2420-ab31-xxxxxxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The region ID. Example: cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role.The value is in the acs:ram::12344\\*\\*\\*:role/xxxxx format. To use a BYOK key to encrypt logs, you must create a RAM role and grant the AliyunKMSReadOnlyAccess and AliyunKMSCryptoUserAccess permissions to the RAM role. You must grant the API caller the PassRole permission on the RAM role.
   * 
   * @example
   * acs:ram::12344***:role/xxxxx
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'keyId',
      regionId: 'regionId',
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      regionId: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

