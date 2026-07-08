// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocTranslationRequest extends $dara.Model {
  /**
   * @remarks
   * Clear the current cache?
   * 
   * @example
   * true
   */
  cleanCache?: boolean;
  /**
   * @remarks
   * Document ID
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * User-defined model name
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * Content to be translated
   * 
   * @example
   * 要翻译的内容
   */
  recommendContent?: string;
  /**
   * @remarks
   * Session ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2e6b3987-f743-4d4c-8326-d9c41a6af3ee
   */
  sessionId?: string;
  /**
   * @remarks
   * Translation type
   * 
   * @example
   * toChinese
   * toEnglish
   * toJapenese
   * toRussian
   * toFrench
   * toGerman
   * toItalian
   * toKorean
   * toSpanish
   * toPortuguese
   */
  transType?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace unique identifier. For more information, see [Get the Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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
      modelName: 'ModelName',
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
      modelName: 'string',
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

