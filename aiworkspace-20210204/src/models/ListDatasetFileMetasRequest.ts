// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The update time range to query. The end time. The time follows the ISO 8601 standard. This parameter is valid only when QueryType is set to TAG.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  endFileUpdateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endTagUpdateTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * >  If you do not configure this parameter, the data on the first page is returned. A return value other than Null of this parameter indicates that not all entries have been returned. You can use this value as an input parameter to obtain entries on the next page. The value Null indicates that all query results have been returned.
   * 
   * @example
   * 90a6ee35-****-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 1000.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @example
   * cars/20250221/
   */
  queryFileDir?: string;
  /**
   * @example
   * shuima
   */
  queryFileName?: string;
  queryFileTypeIncludeAny?: string[];
  /**
   * @example
   * oss://test-xxx-oss/car/0001.png
   */
  queryImage?: string;
  queryTagsExclude?: string[];
  queryTagsIncludeAll?: string[];
  queryTagsIncludeAny?: string[];
  /**
   * @remarks
   * The text content to be queried.
   */
  queryText?: string;
  /**
   * @remarks
   * The retrieval type.
   * 
   * *   TAG (default)
   * *   VECTOR
   * 
   * @example
   * TAG
   */
  queryType?: string;
  /**
   * @remarks
   * The similarity score. Only dataset files whose similarity score is greater than the value of ScoreThreshold are returned. This parameter is valid only when QueryType is set to VECTOR.
   * 
   * @example
   * 0.6
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The field used to sort the results. Default value: GmtCreateTime. Valid values:
   * 
   * *   FileCreateTime (default): The results are sorted by the time when the file is created.
   * *   FileUpdateTime: The results are sorted by the time when the file is last modified.
   * 
   * @example
   * FileCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The update time range to query. The start time. The time follows the ISO 8601 standard. This parameter is valid only when QueryType is set to TAG.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  startFileUpdateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startTagUpdateTime?: string;
  /**
   * @example
   * w_100
   */
  thumbnailMode?: string;
  /**
   * @remarks
   * The number of search results to return. A maximum of Top K search results can be returned. This parameter is valid only when QueryType is set to VECTOR.
   * 
   * @example
   * 100
   */
  topK?: number;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 105173
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      endFileUpdateTime: 'EndFileUpdateTime',
      endTagUpdateTime: 'EndTagUpdateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageSize: 'PageSize',
      queryFileDir: 'QueryFileDir',
      queryFileName: 'QueryFileName',
      queryFileTypeIncludeAny: 'QueryFileTypeIncludeAny',
      queryImage: 'QueryImage',
      queryTagsExclude: 'QueryTagsExclude',
      queryTagsIncludeAll: 'QueryTagsIncludeAll',
      queryTagsIncludeAny: 'QueryTagsIncludeAny',
      queryText: 'QueryText',
      queryType: 'QueryType',
      scoreThreshold: 'ScoreThreshold',
      sortBy: 'SortBy',
      startFileUpdateTime: 'StartFileUpdateTime',
      startTagUpdateTime: 'StartTagUpdateTime',
      thumbnailMode: 'ThumbnailMode',
      topK: 'TopK',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      endFileUpdateTime: 'string',
      endTagUpdateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageSize: 'number',
      queryFileDir: 'string',
      queryFileName: 'string',
      queryFileTypeIncludeAny: { 'type': 'array', 'itemType': 'string' },
      queryImage: 'string',
      queryTagsExclude: { 'type': 'array', 'itemType': 'string' },
      queryTagsIncludeAll: { 'type': 'array', 'itemType': 'string' },
      queryTagsIncludeAny: { 'type': 'array', 'itemType': 'string' },
      queryText: 'string',
      queryType: 'string',
      scoreThreshold: 'number',
      sortBy: 'string',
      startFileUpdateTime: 'string',
      startTagUpdateTime: 'string',
      thumbnailMode: 'string',
      topK: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryFileTypeIncludeAny)) {
      $dara.Model.validateArray(this.queryFileTypeIncludeAny);
    }
    if(Array.isArray(this.queryTagsExclude)) {
      $dara.Model.validateArray(this.queryTagsExclude);
    }
    if(Array.isArray(this.queryTagsIncludeAll)) {
      $dara.Model.validateArray(this.queryTagsIncludeAll);
    }
    if(Array.isArray(this.queryTagsIncludeAny)) {
      $dara.Model.validateArray(this.queryTagsIncludeAny);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

