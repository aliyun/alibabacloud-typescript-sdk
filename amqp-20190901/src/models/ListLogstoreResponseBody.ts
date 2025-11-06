// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstoreResponseBodyData extends $dara.Model {
  logstores?: string[];
  static names(): { [key: string]: string } {
    return {
      logstores: 'Logstores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstores: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.logstores)) {
      $dara.Model.validateArray(this.logstores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstoreResponseBody extends $dara.Model {
  code?: number;
  data?: ListLogstoreResponseBodyData;
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
      code: 'number',
      data: ListLogstoreResponseBodyData,
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

