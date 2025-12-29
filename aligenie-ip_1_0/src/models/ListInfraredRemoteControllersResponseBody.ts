// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInfraredRemoteControllersResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * 3747
   */
  rid?: number;
  /**
   * @example
   * 4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      rid: 'Rid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      rid: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0C90A059-3653-5356-A78E-8A6BDA606155
   */
  requestId?: string;
  result?: ListInfraredRemoteControllersResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInfraredRemoteControllersResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

