// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostPaidBindRelResponseBodyDataBody extends $dara.Model {
  bindCount?: number;
  requestId?: string;
  resultCode?: number;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      requestId: 'string',
      resultCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePostPaidBindRelResponseBodyData extends $dara.Model {
  body?: UpdatePostPaidBindRelResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdatePostPaidBindRelResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePostPaidBindRelResponseBody extends $dara.Model {
  code?: string;
  data?: UpdatePostPaidBindRelResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdatePostPaidBindRelResponseBodyData,
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

