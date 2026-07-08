// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindDirectoriesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Folder ID.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @remarks
   * The error message for the detach operation.
   * 
   * > This field appears only if an error occurs.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 64DB7F34-11A8-45DC-A421-40ACF446282C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
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

