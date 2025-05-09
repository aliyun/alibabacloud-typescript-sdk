// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StsTokenVO extends $dara.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

