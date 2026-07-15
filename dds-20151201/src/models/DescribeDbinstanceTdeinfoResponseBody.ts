// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTDEInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom key of the instance.
   * 
   * Currently, only the following regions support Bring Your Own Key (BYOK), which allows you to manage and own encryption keys:
   * - China (Hangzhou)
   * - China (Shanghai)
   * - China (Beijing)
   * - China (Shenzhen)
   * - Hong Kong (China)
   * - Singapore
   * - Malaysia (Kuala Lumpur)
   * 
   * > If BYOK is supported, you can manage and own the key, and the system returns your custom key. If BYOK is not supported, you cannot manage the key, and the system returns the string `NoActiveBYOK`.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * aes-256-cbc
   */
  encryptorName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F4DD0E29-361B-42F2-9301-B0048CCCE5D6
   */
  requestId?: string;
  /**
   * @remarks
   * The global resource descriptor ARN (Alibaba Cloud Resource Name) of the role pending authorization.
   * 
   * @example
   * acs:ram::123456789012****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The TDE enabling status. Valid values:
   * - **enabled**: TDE is enabled.
   * - **disabled**: TDE is disabled.
   * 
   * > If the TDE status is disabled, the **RoleARN**, **EncryptionKey**, and **EncryptorName** parameters are not returned.
   * 
   * @example
   * enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionKey: 'EncryptionKey',
      encryptorName: 'EncryptorName',
      requestId: 'RequestId',
      roleARN: 'RoleARN',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionKey: 'string',
      encryptorName: 'string',
      requestId: 'string',
      roleARN: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

