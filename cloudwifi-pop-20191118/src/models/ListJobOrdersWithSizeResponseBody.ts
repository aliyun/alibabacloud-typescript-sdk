// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobOrdersWithSizeResponseBodyData extends $dara.Model {
  count?: number;
  data?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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

export class ListJobOrdersWithSizeResponseBody extends $dara.Model {
  data?: ListJobOrdersWithSizeResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobOrdersWithSizeResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
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

