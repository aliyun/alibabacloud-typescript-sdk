// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerModuleBasicInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Result object.
   * 
   * @example
   * 1
   */
  resultObject?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      resultObject: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

