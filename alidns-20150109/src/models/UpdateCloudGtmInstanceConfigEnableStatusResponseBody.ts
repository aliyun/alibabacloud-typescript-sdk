// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigEnableStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful: 
   * - **true**: The call succeeded. 
   * - **false**: The call failed.
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

