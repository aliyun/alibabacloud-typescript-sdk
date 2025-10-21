// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWordGroupResponseBodyWordErrorInfoList extends $dara.Model {
  /**
   * @remarks
   * Error message description.
   * 
   * @example
   * Keyword can not be empty
   */
  errorMessage?: string;
  /**
   * @remarks
   * Error status information.
   * 
   * @example
   * 1
   */
  errorStatus?: number;
  /**
   * @remarks
   * Position of the error information in the array.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Label.
   * 
   * @example
   * Buss.
   */
  label?: string;
  /**
   * @remarks
   * Keyword.
   * 
   * @example
   * Inv.
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      errorStatus: 'ErrorStatus',
      index: 'Index',
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      errorStatus: 'number',
      index: 'number',
      label: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWordGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code, 00000 indicates success; others indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * If there is an error, return the error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether it was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * List of error information.
   */
  wordErrorInfoList?: UpdateWordGroupResponseBodyWordErrorInfoList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      wordErrorInfoList: 'WordErrorInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      wordErrorInfoList: { 'type': 'array', 'itemType': UpdateWordGroupResponseBodyWordErrorInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.wordErrorInfoList)) {
      $dara.Model.validateArray(this.wordErrorInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

