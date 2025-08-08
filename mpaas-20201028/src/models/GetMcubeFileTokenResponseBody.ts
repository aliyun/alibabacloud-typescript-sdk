// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcubeFileTokenResponseBodyGetFileTokenResultFileToken extends $dara.Model {
  accessid?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
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

export class GetMcubeFileTokenResponseBodyGetFileTokenResult extends $dara.Model {
  fileToken?: GetMcubeFileTokenResponseBodyGetFileTokenResultFileToken;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileToken: 'FileToken',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileToken: GetMcubeFileTokenResponseBodyGetFileTokenResultFileToken,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.fileToken && typeof (this.fileToken as any).validate === 'function') {
      (this.fileToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponseBody extends $dara.Model {
  getFileTokenResult?: GetMcubeFileTokenResponseBodyGetFileTokenResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getFileTokenResult: 'GetFileTokenResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getFileTokenResult: GetMcubeFileTokenResponseBodyGetFileTokenResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.getFileTokenResult && typeof (this.getFileTokenResult as any).validate === 'function') {
      (this.getFileTokenResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

