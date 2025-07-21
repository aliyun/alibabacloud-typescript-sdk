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

export class GetOssConfigResponseBody extends $dara.Model {
  code?: string;
  data?: GetOssConfigResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOssConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

