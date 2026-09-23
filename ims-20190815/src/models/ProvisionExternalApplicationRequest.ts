// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionExternalApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the external application that was created by another Alibaba Cloud account and can be installed by the current account. The application IDs returned by `ListApplications` for the current account are not applicable. `ListExternalApplications` and `ListApplicationProvisionInfos` only query installed records and cannot discover external application IDs that have not been installed.
   * 
   * This parameter is required.
   * 
   * @example
   * 403550611646604****
   */
  appId?: string;
  /**
   * @remarks
   * The permission scopes granted to the application. You can specify multiple scopes separated by semicolons (;).
   * 
   * 
   * > For supported permission scopes, refer to "OAuth Scopes" in [OAuth application overview](https://help.aliyun.com/document_detail/93693.html).
   * 
   * @example
   * openid;aliuid
   */
  scopes?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scopes: 'Scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scopes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

