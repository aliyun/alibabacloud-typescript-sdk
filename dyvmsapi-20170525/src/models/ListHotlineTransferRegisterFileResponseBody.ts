// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineTransferRegisterFileResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The authenticity of the commitment.
   * 
   * @example
   * true
   */
  agree?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * A**
   */
  corpName?: string;
  /**
   * @remarks
   * The China 400 number.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The ID card number of the handler.
   * 
   * @example
   * 5****************9
   */
  mngOpIdentityCard?: string;
  /**
   * @remarks
   * The email address of the handler.
   * 
   * @example
   * username@example.com
   */
  mngOpMail?: string;
  /**
   * @remarks
   * The mobile phone number of the handler.
   * 
   * @example
   * 150****0000
   */
  mngOpMobile?: string;
  /**
   * @remarks
   * The name of the handler.
   * 
   * @example
   * A***
   */
  mngOpName?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * @example
   * 1234****
   */
  qualificationId?: string;
  /**
   * @remarks
   * The unique code of the query operation.
   * 
   * @example
   * 1
   */
  resUniqueCode?: number;
  static names(): { [key: string]: string } {
    return {
      agree: 'Agree',
      corpName: 'CorpName',
      hotlineNumber: 'HotlineNumber',
      mngOpIdentityCard: 'MngOpIdentityCard',
      mngOpMail: 'MngOpMail',
      mngOpMobile: 'MngOpMobile',
      mngOpName: 'MngOpName',
      qualificationId: 'QualificationId',
      resUniqueCode: 'ResUniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agree: 'string',
      corpName: 'string',
      hotlineNumber: 'string',
      mngOpIdentityCard: 'string',
      mngOpMail: 'string',
      mngOpMobile: 'string',
      mngOpName: 'string',
      qualificationId: 'string',
      resUniqueCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The registration file.
   */
  values?: ListHotlineTransferRegisterFileResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': ListHotlineTransferRegisterFileResponseBodyDataValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListHotlineTransferRegisterFileResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
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
      data: ListHotlineTransferRegisterFileResponseBodyData,
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

