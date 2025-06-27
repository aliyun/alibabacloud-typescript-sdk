// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressRemarkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the modification operation was successful:
   * - true: Operation was successful
   * - false: Operation was failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

