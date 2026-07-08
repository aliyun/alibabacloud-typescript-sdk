// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatasetDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of category UUIDs for filtering.
   */
  categoryUuids?: string[];
  /**
   * @remarks
   * The end time for document creation, specified as a Unix timestamp.
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * The start time for document creation, specified as a Unix timestamp.
   */
  createTimeStart?: number;
  /**
   * @remarks
   * The ID of the dataset. You must specify either `DatasetId` or `DatasetName`.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * A list of document IDs for filtering.
   */
  docIds?: string[];
  /**
   * @remarks
   * A list of document types for filtering.
   */
  docTypes?: string[];
  /**
   * @remarks
   * A list of document UUIDs for filtering.
   */
  docUuids?: string[];
  /**
   * @remarks
   * The end of the time range for filtering, specified as a Unix timestamp.
   */
  endTime?: number;
  /**
   * @remarks
   * A business parameter.
   * 
   * @example
   * 业务参数
   */
  extend1?: string;
  /**
   * @remarks
   * A reserved business parameter.
   */
  extend2?: string;
  /**
   * @remarks
   * A reserved business parameter.
   */
  extend3?: string;
  /**
   * @remarks
   * Specifies whether to include the document content in the search results. The default value is `false`.
   * 
   * @example
   * false
   */
  includeContent?: boolean;
  /**
   * @remarks
   * The number of documents to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The search query.
   * 
   * This parameter is required.
   * 
   * @example
   * 搜索内容
   */
  query?: string;
  /**
   * @remarks
   * The search mode.
   */
  searchMode?: string;
  /**
   * @remarks
   * The start of the time range for filtering, specified as a Unix timestamp.
   */
  startTime?: number;
  /**
   * @remarks
   * A list of tags for filtering.
   */
  tags?: string[];
  /**
   * @remarks
   * The ID of the Model Studio workspace. For more information, see [Get workspaceId](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuids: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docIds: 'DocIds',
      docTypes: 'DocTypes',
      docUuids: 'DocUuids',
      endTime: 'EndTime',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      includeContent: 'IncludeContent',
      pageSize: 'PageSize',
      query: 'Query',
      searchMode: 'SearchMode',
      startTime: 'StartTime',
      tags: 'Tags',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuids: { 'type': 'array', 'itemType': 'string' },
      createTimeEnd: 'number',
      createTimeStart: 'number',
      datasetId: 'number',
      datasetName: 'string',
      docIds: { 'type': 'array', 'itemType': 'string' },
      docTypes: { 'type': 'array', 'itemType': 'string' },
      docUuids: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      includeContent: 'boolean',
      pageSize: 'string',
      query: 'string',
      searchMode: 'string',
      startTime: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryUuids)) {
      $dara.Model.validateArray(this.categoryUuids);
    }
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    if(Array.isArray(this.docTypes)) {
      $dara.Model.validateArray(this.docTypes);
    }
    if(Array.isArray(this.docUuids)) {
      $dara.Model.validateArray(this.docUuids);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

