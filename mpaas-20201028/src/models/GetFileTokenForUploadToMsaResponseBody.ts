// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileTokenForUploadToMsaResponseBodyResultContentContent extends $dara.Model {
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

export class GetFileTokenForUploadToMsaResponseBodyResultContent extends $dara.Model {
  content?: GetFileTokenForUploadToMsaResponseBodyResultContentContent;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetFileTokenForUploadToMsaResponseBodyResultContentContent,
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTokenForUploadToMsaResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetFileTokenForUploadToMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetFileTokenForUploadToMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

