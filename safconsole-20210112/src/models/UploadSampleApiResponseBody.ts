// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSampleApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request code returned
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Error message returned
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicator of whether the access was successful
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

