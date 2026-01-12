// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplyStatusForTryOnResponseBodyData extends $dara.Model {
  agreement?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agreement: 'Agreement',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreement: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplyStatusForTryOnResponseBody extends $dara.Model {
  code?: string;
  data?: GetApplyStatusForTryOnResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApplyStatusForTryOnResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
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

