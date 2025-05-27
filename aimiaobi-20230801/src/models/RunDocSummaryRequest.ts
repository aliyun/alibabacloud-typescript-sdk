// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocSummaryRequest extends $dara.Model {
  cleanCache?: boolean;
  /**
   * @example
   * 12345
   */
  docId?: string;
  modelName?: string;
  query?: string;
  recommendContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0f56f98a-f2d8-47ec-98e9-1cbdcffa9539
   */
  sessionId?: string;
  /**
   * @remarks
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

