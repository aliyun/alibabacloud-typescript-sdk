// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileSignatureResult extends $dara.Model {
  expiredTime?: number;
  fileUrl?: string;
  host?: string;
  keyId?: string;
  path?: string;
  policy?: string;
  signature?: string;
  thumbUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'expiredTime',
      fileUrl: 'fileUrl',
      host: 'host',
      keyId: 'keyId',
      path: 'path',
      policy: 'policy',
      signature: 'signature',
      thumbUrl: 'thumbUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      fileUrl: 'string',
      host: 'string',
      keyId: 'string',
      path: 'string',
      policy: 'string',
      signature: 'string',
      thumbUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

