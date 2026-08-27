// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGroupOutputFileToPersonalResourceResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The business error code (i18n key), returned on failure.
   * 
   * @example
   * ERR.Robject.UserOutput.ItemNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description (internationalized based on the request locale), returned on failure.
   * 
   * @example
   * Group output does not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The output item ID.
   * 
   * @example
   * item-1
   */
  itemId?: string;
  /**
   * @remarks
   * The sourceId of the newly created resource, returned on success.
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

export class SaveGroupOutputFileToPersonalResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In case of failure, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
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
   * The result list.
   */
  results?: SaveGroupOutputFileToPersonalResourceResponseBodyResults[];
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
      results: { 'type': 'array', 'itemType': SaveGroupOutputFileToPersonalResourceResponseBodyResults },
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

