// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventRebootInstanceResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the system event.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * The message of the operation. If the value of the Code parameter is 200, the value of this parameter is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * @example
   * i-55qi8m11rr53c4i964md8a00l
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventId: 'EventId',
      message: 'Message',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      eventId: 'string',
      message: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEventRebootInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  results?: BatchEventRebootInstanceResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchEventRebootInstanceResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

