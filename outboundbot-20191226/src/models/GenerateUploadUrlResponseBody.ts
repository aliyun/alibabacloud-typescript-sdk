// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadUrlResponseBodyData extends $dara.Model {
  accessId?: string;
  expire?: number;
  folder?: string;
  host?: string;
  message?: string;
  policy?: string;
  signature?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      message: 'Message',
      policy: 'Policy',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      message: 'string',
      policy: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlResponseBody extends $dara.Model {
  code?: string;
  data?: GenerateUploadUrlResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateUploadUrlResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

