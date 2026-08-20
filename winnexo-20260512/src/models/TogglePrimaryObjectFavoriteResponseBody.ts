// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TogglePrimaryObjectFavoriteResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the object is followed after the operation.
   * 
   * @example
   * true
   */
  isFavorited?: boolean;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * string_value
   */
  message?: string;
  /**
   * @remarks
   * The ID of the aligned object: target ID or KR ID.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      isFavorited: 'isFavorited',
      message: 'message',
      objectId: 'objectId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFavorited: 'boolean',
      message: 'string',
      objectId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TogglePrimaryObjectFavoriteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of follows by the user for the specified object type.
   * 
   * @example
   * 1
   */
  favoriteCount?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
  results?: TogglePrimaryObjectFavoriteResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      favoriteCount: 'favoriteCount',
      message: 'message',
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      favoriteCount: 'number',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': TogglePrimaryObjectFavoriteResponseBodyResults },
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

