// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCredential extends $dara.Model {
  accessId?: string;
  accessUrl?: string;
  expire?: number;
  host?: string;
  path?: string;
  policy?: string;
  securityToken?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      accessUrl: 'accessUrl',
      expire: 'expire',
      host: 'host',
      path: 'path',
      policy: 'policy',
      securityToken: 'securityToken',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessUrl: 'string',
      expire: 'number',
      host: 'string',
      path: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

