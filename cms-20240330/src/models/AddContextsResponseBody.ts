// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContextsResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The ID of the written record or event.
   * 
   * @example
   * 897294a7-67a4-4f60-976c-e136edc5f97e
   */
  contextId?: string;
  /**
   * @remarks
   * The write status. Can be "accepted", "queued", or "created".
   * 
   * @example
   * accepted
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      contextId: 'contextId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'string',
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

export class AddContextsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID for the request.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  /**
   * @remarks
   * An array of objects containing the results of the write operation.
   */
  results?: AddContextsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AddContextsResponseBodyResults },
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

