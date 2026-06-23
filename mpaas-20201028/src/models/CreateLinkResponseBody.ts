// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLinkResponseBodyResultContent extends $dara.Model {
  data?: string;
  target?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      target: 'Target',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      target: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateLinkResponseBodyResultContent;
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
      resultContent: CreateLinkResponseBodyResultContent,
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

