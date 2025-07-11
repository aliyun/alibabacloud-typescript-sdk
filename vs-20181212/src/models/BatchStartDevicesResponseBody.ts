// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStartDevicesResponseBodyResultsStreams extends $dara.Model {
  /**
   * @example
   * Stream not found
   */
  error?: string;
  /**
   * @example
   * 3238848****092997-cn-qingdao
   */
  id?: string;
  /**
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
   * @example
   * 32388487****92996-cn-qingdao
   */
  id?: string;
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
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
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

