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

