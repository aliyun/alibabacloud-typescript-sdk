// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Table ARN
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789:catalog/my_catalog/namespace/my_namespace/table/my_table
   */
  tableARN?: string;
  static names(): { [key: string]: string } {
    return {
      tableARN: 'TableARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   * 
   * @example
   * {"TableARN":"acs:eventbridge:cn-hangzhou:123456789:catalog/my_catalog/namespace/my_namespace/table/my_table"}
   */
  data?: UpdateTableResponseBodyData;
  /**
   * @remarks
   * API return message
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful
   * 
   * @example
   * true
   */
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
      data: UpdateTableResponseBodyData,
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

