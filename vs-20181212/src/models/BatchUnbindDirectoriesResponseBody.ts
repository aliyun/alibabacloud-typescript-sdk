// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindDirectoriesResponseBodyResults extends $dara.Model {
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

export class BatchUnbindDirectoriesResponseBody extends $dara.Model {
  /**
   * @example
   * 64DB7F34-11A8-45DC-A421-40ACF446282C
   */
  requestId?: string;
  results?: BatchUnbindDirectoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindDirectoriesResponseBodyResults },
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

