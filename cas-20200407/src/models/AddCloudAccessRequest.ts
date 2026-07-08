// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider. This API supports multiple providers as detailed in the SecretKey parameter description. For example, to add credentials for Tencent Cloud, set this parameter to **Tencent**.
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The Secret ID for accessing the cloud resource set.
   * 
   * @example
   * xcxx
   */
  secretId?: string;
  /**
   * @remarks
   * The secret corresponding to the AccessKey. The value is determined by the `AkType` parameter as follows:
   * 
   * 1\\. If `AkType` is set to `primary`:
   * 
   * - **Tencent**: The SecretAccessKey of the primary account.
   * 
   * - **HUAWEI CLOUD**: The SecretAccessKey of the primary account.
   * 
   * - **Azure**: The ClientSecret.
   * 
   * - **AWS**: The SecretAccessKey of the primary account.
   * 
   * 2\\. If `AkType` is set to `sub`:
   * 
   * - **Tencent**: The SecretAccessKey of the sub-account.
   * 
   * - **HUAWEI CLOUD**: The SecretAccessKey of the sub-account.
   * 
   * - **Azure**: The ClientSecret.
   * 
   * - **AWS**: The SecretAccessKey of the sub-account.
   * 
   * @example
   * xxx
   */
  secretKey?: string;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      secretId: 'SecretId',
      secretKey: 'SecretKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      secretId: 'string',
      secretKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

