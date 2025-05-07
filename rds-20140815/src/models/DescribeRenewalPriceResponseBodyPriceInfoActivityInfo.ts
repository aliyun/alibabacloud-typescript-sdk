// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Error description
   */
  checkErrMsg?: string;
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * 123456
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * Success
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      checkErrMsg: 'CheckErrMsg',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkErrMsg: 'string',
      errorCode: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

