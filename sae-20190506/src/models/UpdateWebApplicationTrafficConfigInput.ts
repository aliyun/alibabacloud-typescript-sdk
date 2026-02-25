// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebAclConfig } from "./WebAclConfig";


export class UpdateWebApplicationTrafficConfigInput extends $dara.Model {
  /**
   * @remarks
   * The authentication type. Valid values: Anonymous (default): does not require authentication. Application: requires authentication.
   * 
   * @example
   * Anonymous
   */
  authType?: string;
  /**
   * @remarks
   * Specifies whether to disable access to the default Internet domain. If you set this parameter to true, a 403 error is returned if you access the default public URL provided by the application. A value of false does not have affect the running of the function.
   * 
   * @example
   * true
   */
  disableURLInternet?: boolean;
  /**
   * @remarks
   * The traffic distribution for the application versions. The sum of traffic percentages for all versions must be equal to 1.
   */
  revisionsTrafficWeight?: { [key: string]: number };
  /**
   * @remarks
   * The configurations of the access control list (ACL) that consists of IP addresses.
   */
  webAclConfig?: WebAclConfig;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      disableURLInternet: 'DisableURLInternet',
      revisionsTrafficWeight: 'RevisionsTrafficWeight',
      webAclConfig: 'WebAclConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      disableURLInternet: 'boolean',
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

