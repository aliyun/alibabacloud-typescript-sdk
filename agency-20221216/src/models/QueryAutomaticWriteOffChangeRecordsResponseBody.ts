// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAutomaticWriteOffChangeRecordsResponseBodyData extends $dara.Model {
  changeContent?: string;
  /**
   * @example
   * 12312312
   */
  operateId?: string;
  /**
   * @example
   * API
   */
  operateSource?: string;
  /**
   * @example
   * 2023-12-15 10:34:36 UTC+8
   */
  operationTime?: string;
  static names(): { [key: string]: string } {
    return {
      changeContent: 'ChangeContent',
      operateId: 'OperateId',
      operateSource: 'OperateSource',
      operationTime: 'OperationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeContent: 'string',
      operateId: 'string',
      operateSource: 'string',
      operationTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAutomaticWriteOffChangeRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryAutomaticWriteOffChangeRecordsResponseBodyData[];
  message?: string;
  /**
   * @example
   * 8cd24f2917797624314748873d0096
   */
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
      data: { 'type': 'array', 'itemType': QueryAutomaticWriteOffChangeRecordsResponseBodyData },
      message: 'string',
      requestId: 'string',
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

