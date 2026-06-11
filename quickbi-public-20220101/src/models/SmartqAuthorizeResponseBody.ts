// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqAuthorizeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * INVALID_FILE_FORMAT
   */
  detailMessage?: string;
  /**
   * @remarks
   * The Q\\&A resource ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  llmCube?: string;
  /**
   * @remarks
   * The analysis subject ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  llmCubeTheme?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detailMessage: 'DetailMessage',
      llmCube: 'LlmCube',
      llmCubeTheme: 'LlmCubeTheme',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailMessage: 'string',
      llmCube: 'string',
      llmCubeTheme: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthorizeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  requestId?: string;
  /**
   * @remarks
   * An array of user information for failed operations.
   */
  result?: SmartqAuthorizeResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': SmartqAuthorizeResponseBodyResult },
      success: 'boolean',
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

