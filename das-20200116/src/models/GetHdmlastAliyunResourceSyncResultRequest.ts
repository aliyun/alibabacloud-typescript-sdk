// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHDMLastAliyunResourceSyncResultRequest extends $dara.Model {
  uid?: string;
  userId?: string;
  context?: string;
  accessKey?: string;
  signature?: string;
  skipAuth?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      userId: 'UserId',
      context: '__context',
      accessKey: 'accessKey',
      signature: 'signature',
      skipAuth: 'skipAuth',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      userId: 'string',
      context: 'string',
      accessKey: 'string',
      signature: 'string',
      skipAuth: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

