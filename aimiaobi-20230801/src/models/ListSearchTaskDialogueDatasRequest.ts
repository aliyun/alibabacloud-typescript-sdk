// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTaskDialogueDatasRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  includeContent?: boolean;
  /**
   * @example
   * text
   */
  multimodalSearchType?: string;
  /**
   * @example
   * xx
   */
  originalSessionId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xx
   */
  query?: string;
  /**
   * @example
   * ClusterGenerate
   */
  searchModel?: string;
  /**
   * @example
   * xxx
   */
  searchModelDataValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx
   */
  sessionId?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      includeContent: 'IncludeContent',
      multimodalSearchType: 'MultimodalSearchType',
      originalSessionId: 'OriginalSessionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      searchModel: 'SearchModel',
      searchModelDataValue: 'SearchModelDataValue',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeContent: 'boolean',
      multimodalSearchType: 'string',
      originalSessionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      searchModel: 'string',
      searchModelDataValue: 'string',
      sessionId: 'string',
      taskId: 'string',
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

