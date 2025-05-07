// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AclConfig } from "./AclConfig";


export class HTTPTriggerConfig extends $dara.Model {
  aclConfig?: AclConfig;
  authConfig?: any;
  authType?: string;
  disableURLInternet?: boolean;
  safeMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'aclConfig',
      authConfig: 'authConfig',
      authType: 'authType',
      disableURLInternet: 'disableURLInternet',
      safeMode: 'safeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: AclConfig,
      authConfig: 'any',
      authType: 'string',
      disableURLInternet: 'boolean',
      safeMode: 'boolean',
    };
  }

  validate() {
    if(this.aclConfig && typeof (this.aclConfig as any).validate === 'function') {
      (this.aclConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

