// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetDocumentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique IDs of the categories.
   */
  categoryUuidsShrink?: string;
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
  docIdsShrink?: string;
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
  docUuidsShrink?: string;
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
  excludeFieldsShrink?: string;
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
  includeFieldsShrink?: string;
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
  tagsShrink?: string;
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
      categoryUuidsShrink: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docIdsShrink: 'DocIds',
      docType: 'DocType',
      docUuidsShrink: 'DocUuids',
      endTime: 'EndTime',
      excludeFieldsShrink: 'ExcludeFields',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      includeFieldsShrink: 'IncludeFields',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      startTime: 'StartTime',
      status: 'Status',
      tagsShrink: 'Tags',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuidsShrink: 'string',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      docIdsShrink: 'string',
      docType: 'string',
      docUuidsShrink: 'string',
      endTime: 'number',
      excludeFieldsShrink: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      includeFieldsShrink: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      startTime: 'number',
      status: 'number',
      tagsShrink: 'string',
      title: 'string',
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

