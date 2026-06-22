// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageEventOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert handling rule, which is the same as the alert handling rule ID in the request parameters.
   * 
   * @example
   * 67429
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageEventOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned by the API request.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateImageEventOperationResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DD****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request response. Valid values:
   * 
   * - **true**: The request was successful.
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
      code: 'string',
      data: UpdateImageEventOperationResponseBodyData,
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

