// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqAuthorizeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Reason for failure.
   * 
   * @example
   * INVALID_FILE_FORMAT
   */
  detailMessage?: string;
  /**
   * @remarks
   * Q&A resource ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  llmCube?: string;
  /**
   * @remarks
   * Analysis theme ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  llmCubeTheme?: string;
  /**
   * @remarks
   * User ID.
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
   * Request ID.
   * 
   * @example
   * 617277C****************ABA47E31
   */
  requestId?: string;
  /**
   * @remarks
   * Array of failed user information.
   */
  result?: SmartqAuthorizeResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. The value range is as follows:
   * 
   * - true: Request succeeded
   * - false: Request failed
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

