// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOutputFileToResourceResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The business error code (i18n key). Returned on failure.
   * 
   * @example
   * string_value
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description, localized based on the request Accept-Language header. Returned on failure.
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * The output detail ID.
   * 
   * @example
   * exampleItemId
   */
  itemId?: string;
  /**
   * @remarks
   * The sourceId of the newly created resource. Returned on success.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
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
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      itemId: 'itemId',
      sourceId: 'sourceId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      itemId: 'string',
      sourceId: 'string',
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

export class SaveOutputFileToResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description. This value is empty on success.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The per-record results in the same order as the input itemIds. A single record failure does not affect other records.
   */
  results?: SaveOutputFileToResourceResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': SaveOutputFileToResourceResponseBodyResults },
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

