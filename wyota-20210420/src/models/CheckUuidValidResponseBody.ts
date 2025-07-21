// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUuidValidResponseBodyData extends $dara.Model {
  newUpgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      newUpgrade: 'NewUpgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newUpgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUuidValidResponseBody extends $dara.Model {
  code?: string;
  data?: CheckUuidValidResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CheckUuidValidResponseBodyData,
      message: 'string',
      requestId: 'string',
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

