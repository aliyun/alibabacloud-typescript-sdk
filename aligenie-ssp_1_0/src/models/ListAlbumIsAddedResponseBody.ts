// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlbumIsAddedResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 51999575
   */
  albumId?: string;
  /**
   * @example
   * false
   */
  isAdded?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      isAdded: 'IsAdded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      isAdded: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * BCC85E69-5DA6-197E-A8C1-8A1B19CF781B
   */
  requestId?: string;
  result?: ListAlbumIsAddedResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAlbumIsAddedResponseBodyResult },
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

