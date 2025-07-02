// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFbOssConfigResponseBodyData extends $dara.Model {
  accessKeyId?: string;
  endPoint?: string;
  ossPolicy?: string;
  ossSignature?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      endPoint: 'EndPoint',
      ossPolicy: 'OssPolicy',
      ossSignature: 'OssSignature',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      endPoint: 'string',
      ossPolicy: 'string',
      ossSignature: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

