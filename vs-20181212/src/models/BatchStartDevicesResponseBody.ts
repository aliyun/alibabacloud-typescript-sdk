// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStartDevicesResponseBodyResultsStreams extends $dara.Model {
  /**
   * @remarks
   * Error message for the stream. This field appears only when an error occurs.
   * 
   * @example
   * Stream not found
   */
  error?: string;
  /**
   * @remarks
   * Stream ID.
   * 
   * @example
   * 3238848****092997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Stream name.
   * 
   * @example
   * 310101*****187542126
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * 32388487****92996-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * List of device streams.
   */
  streams?: BatchStartDevicesResponseBodyResultsStreams[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      streams: { 'type': 'array', 'itemType': BatchStartDevicesResponseBodyResultsStreams },
    };
  }

  validate() {
    if(Array.isArray(this.streams)) {
      $dara.Model.validateArray(this.streams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID of this task.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * List of results.
   */
  results?: BatchStartDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchStartDevicesResponseBodyResults },
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

