// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageNumResponseBodyData extends $dara.Model {
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageNumResponseBody extends $dara.Model {
  data?: GetPageNumResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpCode: 'HttpCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPageNumResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'string',
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

