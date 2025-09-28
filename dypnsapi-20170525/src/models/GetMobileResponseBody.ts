// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMobileResponseBodyGetMobileResultDTO extends $dara.Model {
  /**
   * @remarks
   * The phone number,
   * 
   * @example
   * 13900001234
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  getMobileResultDTO?: GetMobileResponseBodyGetMobileResultDTO;
  /**
   * @remarks
   * The returned message.
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
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      getMobileResultDTO: 'GetMobileResultDTO',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      getMobileResultDTO: GetMobileResponseBodyGetMobileResultDTO,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.getMobileResultDTO && typeof (this.getMobileResultDTO as any).validate === 'function') {
      (this.getMobileResultDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

