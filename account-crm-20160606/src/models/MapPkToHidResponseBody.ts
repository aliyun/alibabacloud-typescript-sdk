// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapPkToHidResponseBodyData extends $dara.Model {
  hid?: string;
  mappingSrc?: string;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      hid: 'Hid',
      mappingSrc: 'MappingSrc',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hid: 'string',
      mappingSrc: 'string',
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

export class MapPkToHidResponseBody extends $dara.Model {
  code?: string;
  data?: MapPkToHidResponseBodyData;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MapPkToHidResponseBodyData,
      httpCode: 'string',
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

