// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 407426893752729****
   */
  appId?: string;
  /**
   * @remarks
   * The permissions that are granted to the application. Separate multiple permissions with a semicolon (;).
   * 
   * >  For more information about the supported permissions, see [Overview](https://help.aliyun.com/document_detail/93693.html).
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

