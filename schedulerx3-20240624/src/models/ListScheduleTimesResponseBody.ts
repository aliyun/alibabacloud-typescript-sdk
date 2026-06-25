// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleTimesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. `200` indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * A list of the scheduled times.
   */
  data?: string[];
  /**
   * @remarks
   * The response message. The value is `success` if the request succeeds, or an error message if it fails.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID for troubleshooting.
   * 
   * @example
   * 9A48E22F-F30A-5CE5-AC7A-E0FED1B6942E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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
      code: 'number',
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

