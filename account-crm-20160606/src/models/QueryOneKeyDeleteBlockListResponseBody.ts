// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOneKeyDeleteBlockListResponseBodyData extends $dara.Model {
  blockCode?: string;
  blockMsg?: string;
  static names(): { [key: string]: string } {
    return {
      blockCode: 'BlockCode',
      blockMsg: 'BlockMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockCode: 'string',
      blockMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOneKeyDeleteBlockListResponseBody extends $dara.Model {
  code?: string;
  data?: QueryOneKeyDeleteBlockListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryOneKeyDeleteBlockListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

