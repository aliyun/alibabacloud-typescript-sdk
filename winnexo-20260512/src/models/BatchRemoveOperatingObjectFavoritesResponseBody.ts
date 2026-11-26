// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRemoveOperatingObjectFavoritesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the object is favorited after the operation.
   * 
   * @example
   * true
   */
  isFavorited?: boolean;
  /**
   * @remarks
   * The ID of the aligned object, which is the target ID or KR ID.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * Indicates whether the request has been processed.
   * 
   * @example
   * true
   */
  processed?: boolean;
  static names(): { [key: string]: string } {
    return {
      isFavorited: 'isFavorited',
      objectId: 'objectId',
      processed: 'processed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFavorited: 'boolean',
      objectId: 'string',
      processed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRemoveOperatingObjectFavoritesResponseBody extends $dara.Model {
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
   * The graph name.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * The digital worker name, which is the name of the operating object. This parameter is optional.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The number of remaining favorited objects within the exact scope.
   * 
   * @example
   * 0
   */
  remainingCount?: number;
  /**
   * @remarks
   * The number of physical favorite records that are actually deleted.
   * 
   * @example
   * 2
   */
  removedCount?: number;
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
   * **The number of requested members before deduplication.**
   * 
   * @example
   * 2
   */
  requestedCount?: number;
  /**
   * @remarks
   * The internal and external DingTalk user relationships that failed to be created.
   */
  results?: BatchRemoveOperatingObjectFavoritesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      graphName: 'graphName',
      message: 'message',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      remainingCount: 'remainingCount',
      removedCount: 'removedCount',
      requestId: 'requestId',
      requestedCount: 'requestedCount',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      graphName: 'string',
      message: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      remainingCount: 'number',
      removedCount: 'number',
      requestId: 'string',
      requestedCount: 'number',
      results: { 'type': 'array', 'itemType': BatchRemoveOperatingObjectFavoritesResponseBodyResults },
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

