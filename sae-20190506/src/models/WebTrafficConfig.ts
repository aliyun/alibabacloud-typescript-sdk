// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebAclConfig } from "./WebAclConfig";


export class WebTrafficConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   **Anonymous**: does not require authentication.
   * *   **Application**: requires authentication.
   * 
   * >  The default value is **Anonymous**.
   * 
   * @example
   * Anonymous
   */
  authType?: string;
  /**
   * @remarks
   * Specifies whether to disable access to the default Internet domain. If you set this parameter to true, a 403 error is returned if you access the default public URL provided by the function. A value of false does not have affect the running of the function.
   * 
   * @example
   * true
   */
  disableInternetURL?: boolean;
  /**
   * @remarks
   * Specifies the traffic weight of applications in different versions. The sum of traffic weight for all versions must be 100%.
   */
  revisionsTrafficWeight?: { [key: string]: number };
  /**
   * @remarks
   * The configurations of IP ACL whitelist.
   */
  webAclConfig?: WebAclConfig;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      disableInternetURL: 'DisableInternetURL',
      revisionsTrafficWeight: 'RevisionsTrafficWeight',
      webAclConfig: 'WebAclConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      disableInternetURL: 'boolean',
      revisionsTrafficWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      webAclConfig: WebAclConfig,
    };
  }

  validate() {
    if(this.revisionsTrafficWeight) {
      $dara.Model.validateMap(this.revisionsTrafficWeight);
    }
    if(this.webAclConfig && typeof (this.webAclConfig as any).validate === 'function') {
      (this.webAclConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

