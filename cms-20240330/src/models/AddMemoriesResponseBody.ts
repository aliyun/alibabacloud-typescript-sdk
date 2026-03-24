// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMemoriesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Event ID.
   * 
   * @example
   * 897294a7-67a4-4f60-976c-e136edc5f97e
   */
  eventId?: string;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * Memory processing has been queued for background execution
   */
  message?: string;
  /**
   * @remarks
   * Processing status.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      message: 'message',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * Request results.
   */
  results?: AddMemoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AddMemoriesResponseBodyResults },
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

