// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillSplitGetResponseBodyModule extends $dara.Model {
  billSplitKey?: string;
  endDate?: string;
  startDate?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      billSplitKey: 'bill_split_key',
      endDate: 'end_date',
      startDate: 'start_date',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billSplitKey: 'string',
      endDate: 'string',
      startDate: 'string',
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

export class MonthBillSplitGetResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: MonthBillSplitGetResponseBodyModule[];
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': MonthBillSplitGetResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

