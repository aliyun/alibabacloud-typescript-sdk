// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider. Currently, only Tencent Cloud (**Tencent**) is supported.
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The secret ID for cloud resource access.
   * 
   * @example
   * xcxx
   */
  secretId?: string;
  /**
   * @remarks
   * The secret of the access key. Valid values:
   * 
   * 1. If AkType is set to primary:
   * - **Tencent**: the SecretAccessKey of the primary account.
   * - **HUAWEICLOUD**: the SecretAccessKey of the primary account.
   * - **Azure**: the ClientSecret.
   * - **AWS**: the SecretAccessKey of the primary account.
   * 
   * 2. If AkType is set to sub:
   * - **Tencent**: the SecretAccessKey of the sub-account.
   * - **HUAWEICLOUD**: the SecretAccessKey of the sub-account.
   * - **Azure**: the ClientSecret.
   * - **AWS**: the SecretAccessKey of the sub-account.
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

