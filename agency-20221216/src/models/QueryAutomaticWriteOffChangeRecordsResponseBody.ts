// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAutomaticWriteOffChangeRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the operation.
   * 
   * @example
   * Enable automatic write-off and select 500 USD
   */
  changeContent?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * 12312312
   */
  operateId?: string;
  /**
   * @remarks
   * The description of the operation source.
   * 
   * @example
   * API
   */
  operateSource?: string;
  /**
   * @remarks
   * The time of the operation. Format: YYYY-MM-DD HH:mm:ss UTC+8.
   * 
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
   * @remarks
   * The status code of the response. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of query results.
   */
  data?: QueryAutomaticWriteOffChangeRecordsResponseBodyData[];
  /**
   * @remarks
   * The message of the response.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

