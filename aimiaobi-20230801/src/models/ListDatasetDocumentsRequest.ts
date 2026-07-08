// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * The unique IDs of the categories.
   */
  categoryUuids?: string[];
  /**
   * @remarks
   * The end of the creation time range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 111
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * The start of the creation time range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 111
   */
  createTimeStart?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * xx
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The unique ID of the dataset. You must specify either this parameter or `DatasetName`.
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
   * An array of document IDs.
   */
  docIds?: string[];
  /**
   * @remarks
   * The type of the document. Valid values:
   * 
   * - `plainText`: Plain text.
   * 
   * - `richText`: Rich text.
   * 
   * - `text`: A text file.
   * 
   * - `pdf`: A PDF file.
   * 
   * - `word`: A Word file.
   * 
   * - `image`: An image file.
   * 
   * - `video`: A video file.
   * 
   * @example
   * text
   */
  docType?: string;
  /**
   * @remarks
   * The unique IDs of the documents.
   */
  docUuids?: string[];
  /**
   * @remarks
   * The end time, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1111
   */
  endTime?: number;
  /**
   * @remarks
   * The fields to exclude from the response. Valid value:
   * 
   * - `content`: The document content.
   */
  excludeFields?: string[];
  /**
   * @remarks
   * A custom extension field.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * A custom extension field.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * A custom extension field.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * The fields to include in the response.
   */
  includeFields?: string[];
  /**
   * @remarks
   * A token to retrieve the next page of results. This parameter is required when you retrieve more than 10,000 entries.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search query.
   * 
   * @example
   * 搜索条件
   */
  query?: string;
  /**
   * @remarks
   * The start time, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 111
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the document. Valid values:
   * 
   * - `1`: Document created.
   * 
   * - `2`: Text index built.
   * 
   * - `3`: Multimodal index built.
   * 
   * - `100`: Full build complete.
   * 
   * - `0`: Build failed.
   * 
   * @example
   * 100
   */
  status?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: string[];
  /**
   * @remarks
   * The title.
   * 
   * @example
   * xxx
   */
  title?: string;
  /**
   * @remarks
   * The unique ID of the Model Studio workspace. For more information, see [Get workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuids: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docIds: 'DocIds',
      docType: 'DocType',
      docUuids: 'DocUuids',
      endTime: 'EndTime',
      excludeFields: 'ExcludeFields',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      includeFields: 'IncludeFields',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuids: { 'type': 'array', 'itemType': 'string' },
      createTimeEnd: 'number',
      createTimeStart: 'number',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      docIds: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      docUuids: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      excludeFields: { 'type': 'array', 'itemType': 'string' },
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      includeFields: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      startTime: 'number',
      status: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
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
    if(Array.isArray(this.docUuids)) {
      $dara.Model.validateArray(this.docUuids);
    }
    if(Array.isArray(this.excludeFields)) {
      $dara.Model.validateArray(this.excludeFields);
    }
    if(Array.isArray(this.includeFields)) {
      $dara.Model.validateArray(this.includeFields);
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

