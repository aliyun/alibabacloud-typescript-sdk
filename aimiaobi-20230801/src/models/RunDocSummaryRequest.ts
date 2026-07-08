// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Purge the current cache
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
   * Custom model name specified by the User
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * Custom requirements
   * 
   * @example
   * 请总结一下这篇文档
   */
  query?: string;
  /**
   * @remarks
   * Content to be summarized
   * 
   * @example
   * 要总结的内容
   */
  recommendContent?: string;
  /**
   * @remarks
   * Conversation ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0f56f98a-f2d8-47ec-98e9-1cbdcffa9539
   */
  sessionId?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace ID. For more information about how to obtain it, see [How to use a workspace](https://help.aliyun.com/document_detail/2587495.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      modelName: 'ModelName',
      query: 'Query',
      recommendContent: 'RecommendContent',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanCache: 'boolean',
      docId: 'string',
      modelName: 'string',
      query: 'string',
      recommendContent: 'string',
      sessionId: 'string',
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

