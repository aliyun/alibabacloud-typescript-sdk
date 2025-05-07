// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocTranslationRequest extends $dara.Model {
  cleanCache?: boolean;
  /**
   * @example
   * 12345
   */
  docId?: string;
  recommendContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2e6b3987-f743-4d4c-8326-d9c41a6af3ee
   */
  sessionId?: string;
  /**
   * @example
   * toChinese
   * toEnglish
   */
  transType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      recommendContent: 'RecommendContent',
      sessionId: 'SessionId',
      transType: 'TransType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanCache: 'boolean',
      docId: 'string',
      recommendContent: 'string',
      sessionId: 'string',
      transType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

