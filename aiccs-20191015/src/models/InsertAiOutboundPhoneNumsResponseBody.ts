// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertAiOutboundPhoneNumsResponseBodyDataFailInfo extends $dara.Model {
  /**
   * @remarks
   * The custom business information.
   * 
   * @example
   * cycuaqmw
   */
  bizData?: string;
  /**
   * @remarks
   * The description of the failure reason.
   * 
   * @example
   * Invalid number format
   */
  msg?: string;
  /**
   * @remarks
   * The outbound called number.
   * 
   * @example
   * 150****0000
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      msg: 'Msg',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      msg: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the failed numbers.
   */
  failInfo?: InsertAiOutboundPhoneNumsResponseBodyDataFailInfo[];
  /**
   * @remarks
   * The number of successfully imported numbers.
   * 
   * @example
   * 7
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of imported numbers.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failInfo: 'FailInfo',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfo: { 'type': 'array', 'itemType': InsertAiOutboundPhoneNumsResponseBodyDataFailInfo },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failInfo)) {
      $dara.Model.validateArray(this.failInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The import result.
   */
  data?: InsertAiOutboundPhoneNumsResponseBodyData;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * - **true**: The operation was successful.
   * - **false**: The operation failed.
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
      data: InsertAiOutboundPhoneNumsResponseBodyData,
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

