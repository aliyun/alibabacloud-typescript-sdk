// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindDirectoriesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * An error occurred while processing your request.
   */
  error?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
      error: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchBindDirectoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindDirectoriesResponseBodyResults },
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

