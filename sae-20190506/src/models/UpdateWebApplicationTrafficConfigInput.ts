// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebAclConfig } from "./WebAclConfig";


export class UpdateWebApplicationTrafficConfigInput extends $dara.Model {
  /**
   * @example
   * Anonymous
   */
  authType?: string;
  disableURLInternet?: boolean;
  revisionsTrafficWeight?: { [key: string]: number };
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

