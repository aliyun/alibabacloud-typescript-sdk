// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAppDonwloadUrlInMsaResponseBodyResultContentData extends $dara.Model {
  filename?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'Filename',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppDonwloadUrlInMsaResponseBodyResultContent extends $dara.Model {
  code?: string;
  data?: GetUserAppDonwloadUrlInMsaResponseBodyResultContentData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUserAppDonwloadUrlInMsaResponseBodyResultContentData,
      message: 'string',
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

export class GetUserAppDonwloadUrlInMsaResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetUserAppDonwloadUrlInMsaResponseBodyResultContent;
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
      resultContent: GetUserAppDonwloadUrlInMsaResponseBodyResultContent,
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

