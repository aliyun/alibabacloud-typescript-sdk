// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTaskDialogueDatasRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to include the main content.
   * 
   * @example
   * true
   */
  includeContent?: boolean;
  /**
   * @remarks
   * The type of data to search.
   * 
   * @example
   * text
   */
  multimodalSearchType?: string;
  /**
   * @remarks
   * The unique identifier of the historical dialogue. This is the source of all original materials.
   * 
   * @example
   * xx
   */
  originalSessionId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query conditions.
   * 
   * @example
   * xx
   */
  query?: string;
  /**
   * @remarks
   * The type of search agent.
   * 
   * @example
   * ClusterGenerate
   */
  searchModel?: string;
  /**
   * @remarks
   * The data under the search agent classification.
   * 
   * @example
   * xxx
   */
  searchModelDataValue?: string;
  /**
   * @remarks
   * The unique identifier of the historical dialogue. This is the source of reference materials.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  sessionId?: string;
  /**
   * @remarks
   * The unique identifier of the task.
   * 
   * > You do not need to specify this parameter. The system automatically generates a task ID. If you specify the same task ID for multiple tasks, the tasks are considered part of the same dialogue group.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspaceId](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

