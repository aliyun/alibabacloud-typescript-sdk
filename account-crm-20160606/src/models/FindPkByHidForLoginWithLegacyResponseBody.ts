// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindPkByHidForLoginWithLegacyResponseBodyData extends $dara.Model {
  hid?: string;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      hid: 'Hid',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hid: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPkByHidForLoginWithLegacyResponseBody extends $dara.Model {
  code?: string;
  data?: FindPkByHidForLoginWithLegacyResponseBodyData;
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
      data: FindPkByHidForLoginWithLegacyResponseBodyData,
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

