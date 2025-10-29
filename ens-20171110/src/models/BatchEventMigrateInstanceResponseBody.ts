// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventMigrateInstanceResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * When Code!=200, it indicates the specific error message.
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

export class BatchEventMigrateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * FF53E96D-3F1A-42F0-8373-1C2B39D72D44
   */
  requestId?: string;
  /**
   * @remarks
   * The results.
   */
  results?: BatchEventMigrateInstanceResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchEventMigrateInstanceResponseBodyResults },
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

