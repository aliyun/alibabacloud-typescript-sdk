// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssConfigResponseBodyData extends $dara.Model {
  accessKeyId?: string;
  endPoint?: string;
  ossPolicy?: string;
  ossSignature?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      endPoint: 'EndPoint',
      ossPolicy: 'OssPolicy',
      ossSignature: 'OssSignature',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      endPoint: 'string',
      ossPolicy: 'string',
      ossSignature: 'string',
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

