// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * A list of metadata IDs to query.
   */
  datasetFileMetaIds?: string[];
  /**
   * @remarks
   * The version name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The start time for the query that filters files by update time. The time must be a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endFileUpdateTime?: string;
  /**
   * @remarks
   * The start time for querying tags by their last update time. The time must be in UTC and in the ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endTagUpdateTime?: string;
  /**
   * @remarks
   * The end of the time range for a query that filters tags by their last update time. The time is a UTC timestamp in ISO 8601 format.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * > If you do not specify this parameter, the first page of results is returned. If a value is returned for this parameter, more results are available. To get the next page, use the returned token in your next request. Repeat this process until no token is returned, which indicates that all results have been retrieved.
   * 
   * @example
   * 90a6ee35-****-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order for the specified field in a paginated query. Use this parameter with \\`SortBy\\`. The default value is \\`DESC\\`. Valid values:
   * 
   * - ASC: Ascending.
   * 
   * - DESC: Descending.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. If you also specify \\`MaxResults\\`, the value of \\`MaxResults\\` takes precedence.
   * 
   * > This parameter is deprecated. Use \\`NextToken\\` and \\`MaxResults\\` for paginated queries.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * A search condition to include any of the specified content types. The search results must match at least one of these types. You can specify multiple content types. If this parameter is empty, this condition is not applied. Use commas to separate multiple types in the array.
   */
  queryContentTypeIncludeAny?: string[];
  /**
   * @remarks
   * The maximum number of results to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * (FileUpdateTime > \\"2025-02-28T00:00:00Z\\" AND FileUpdateTime < \\"2025-05-30T09:27:29Z\\") AND FileDir:\\"blue_car\\" AND NOT FileName="toyota.jpg" AND (( Tags.all=\\"lane line\\" AND Tags.all=\\"barrier gate\\") OR NOT Tags.user=\\"rainy days\\" ) AND HAS SemanticIndexJobId AND Content:\\"a fallen water horse\\" AND TopK=100 AND SignMode=\\"PUBLIC\\"
   */
  queryExpression?: string;
  /**
   * @remarks
   * The name of the file to retrieve. This parameter supports fuzzy search.
   * 
   * @example
   * cars/20250221/
   */
  queryFileDir?: string;
  /**
   * @remarks
   * The tags to exclude from the query results. If you do not specify any tags, this filter is not applied.
   * 
   * > This parameter is valid only when QueryType is set to TAG or MIX.
   * 
   * @example
   * car
   */
  queryFileName?: string;
  /**
   * @remarks
   * The search keyword for the file directory. Fuzzy search is supported.
   */
  queryFileTypeIncludeAny?: string[];
  /**
   * @remarks
   * The image information to use for an image-based search.
   * 
   * - Specify the public URL of an image in an OSS bucket. The format is \\`oss\\://{bucket_name}/{object_path}\\`. \\`bucket_name\\` is the name of the bucket, and \\`object_path\\` is the path of the file in the bucket.
   * 
   * > This parameter is valid only when \\`QueryType\\` is set to \\`VECTOR\\` or \\`MIX\\`.
   * 
   * @example
   * oss://test-xxx-oss/car/0001.png
   */
  queryImage?: string;
  /**
   * @remarks
   * A comma-separated list of tags. The query returns files that match at least one of the specified tags. If you do not specify this parameter, this filter is ignored.
   * 
   * > This parameter is valid only when QueryType is set to TAG or MIX.
   */
  queryTagsExclude?: string[];
  /**
   * @remarks
   * The metadata IDs to query.
   */
  queryTagsIncludeAll?: string[];
  /**
   * @remarks
   * A condition that retrieves items that have all of the specified tags. The tags are specified as a comma-separated array. This condition is not applied if the parameter is empty.
   * 
   * > This parameter takes effect only when QueryType is set to TAG or MIX. If QueryType is set to TAG, the value of QueryText is also added to this condition.
   */
  queryTagsIncludeAny?: string[];
  /**
   * @remarks
   * The text to search for.
   * 
   * @example
   * A fallen water
   */
  queryText?: string;
  /**
   * @remarks
   * The search type. Valid values:
   * 
   * - MIX: Mixed search. This is the default value.
   * 
   * - TAG: Searches by tag only.
   * 
   * - VECTOR: Searches by vector only.
   * 
   * @example
   * MIX
   */
  queryType?: string;
  /**
   * @remarks
   * The status of the metadata to query.
   * 
   * - ACTIVE: Returns metadata for active files. This is the default value.
   * 
   * - ALL: Returns metadata for all files.
   * 
   * - DELETED: Returns metadata for logically deleted files.
   * 
   * @example
   * oss://test-xxx-oss/car/0001.mp4
   */
  queryVideo?: string;
  /**
   * @remarks
   * The similarity score threshold. Only results with a score greater than this threshold are returned.
   * 
   * > This parameter is valid only when \\`QueryType\\` is set to \\`VECTOR\\` or \\`MIX\\`.
   * 
   * @example
   * 0.6
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The field to sort by for paginated queries. If you do not specify this parameter, results are sorted by relevance from high to low. Other valid values are as follows:
   * 
   * - FileCreateTime: Sort by file creation time.
   * 
   * - FileUpdateTime: Sort by file last modified time.
   * 
   * @example
   * FileCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The end of the time range for a query based on file update time. The value is a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startFileUpdateTime?: string;
  /**
   * @remarks
   * The file content types. The query returns files that match any of the specified types. You can specify multiple types and separate them with commas. If this parameter is empty, this filter is ignored.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startTagUpdateTime?: string;
  /**
   * @remarks
   * A query statement, also known as a Domain-Specific Language (DSL) query, lets you express complex retrieval conditions. It supports grouping, Boolean logic (AND/OR/NOT), range comparisons (>, >=, <, <=), property existence (HAS/NOT HAS), tokenized matches (:), and exact matches (=). Use DSL for advanced retrieval scenarios.
   * >Notice: To avoid conflicts, do not use this query statement with other query parameters.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The mode for generating image thumbnails. Thumbnails are supported only for files in OSS.
   * 
   * - Proportional scaling: \\`p_{percentage}\\`. The \\`percentage\\` parameter specifies the scaling ratio. Valid values: 1 to 100. For example, \\`p_50\\` scales the image to 50% of its original size.
   * 
   * - Fixed width, adaptive height: \\`w_{width}\\`. The \\`width\\` parameter specifies the image width. Valid values: 1 to 16,384. For example, \\`w_200\\` sets the image width to 200 pixels and scales the height adaptively.
   * 
   * - Fixed height, adaptive width: \\`h_{height}\\`. The \\`height\\` parameter specifies the image height. Valid values: 1 to 16,384. For example, \\`h_100\\` sets the image height to 100 pixels and scales the width adaptively.
   * 
   * - Fixed width and height with padding: \\`m_pad,w_{width},h_{height},color_{RGB}\\`. The \\`m_pad\\` parameter scales the image to the maximum size that fits within a rectangle of the specified width and height. The \\`RGB\\` parameter specifies the color for the centered padding in the empty areas. If you do not specify this parameter, the empty areas are filled with white by default. The \\`width\\` and \\`height\\` parameters specify the image width and height. The values for both \\`width\\` and \\`height\\` must be between 1 and 16,384.
   * 
   * - Fixed width and height with center crop: \\`m_fill,w_{width},h_{height}\\`. The \\`m_fill\\` parameter proportionally scales the image to the minimum size that covers the specified width and height, and then crops the excess from the center. The \\`width\\` and \\`height\\` parameters specify the image width and height. The values for both \\`width\\` and \\`height\\` must be between 1 and 16,384. For example, \\`m_fill,w_100,h_100\\` scales and crops the image to 100 × 100 pixels from the center.
   * 
   * - Forced width and height scaling: \\`m_fixed,w_{width},h_{height}\\`. The \\`width\\` and \\`height\\` parameters specify the image width and height. The values for both \\`width\\` and \\`height\\` must be between 1 and 16,384. For example, \\`m_fixed,w_100,h_100\\` forces the image to be scaled to 100 × 100 pixels.
   * 
   * @example
   * w_100
   */
  thumbnailMode?: string;
  /**
   * @remarks
   * The maximum number of search results to return.
   * 
   * > This parameter is valid only when \\`QueryType\\` is set to \\`VECTOR\\` or \\`MIX\\`.
   * 
   * @example
   * 100
   */
  topK?: number;
  /**
   * @remarks
   * The ID of the workspace where the dataset is located. For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 105173
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetaIds: 'DatasetFileMetaIds',
      datasetVersion: 'DatasetVersion',
      endFileUpdateTime: 'EndFileUpdateTime',
      endTagUpdateTime: 'EndTagUpdateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageSize: 'PageSize',
      queryContentTypeIncludeAny: 'QueryContentTypeIncludeAny',
      queryExpression: 'QueryExpression',
      queryFileDir: 'QueryFileDir',
      queryFileName: 'QueryFileName',
      queryFileTypeIncludeAny: 'QueryFileTypeIncludeAny',
      queryImage: 'QueryImage',
      queryTagsExclude: 'QueryTagsExclude',
      queryTagsIncludeAll: 'QueryTagsIncludeAll',
      queryTagsIncludeAny: 'QueryTagsIncludeAny',
      queryText: 'QueryText',
      queryType: 'QueryType',
      queryVideo: 'QueryVideo',
      scoreThreshold: 'ScoreThreshold',
      sortBy: 'SortBy',
      startFileUpdateTime: 'StartFileUpdateTime',
      startTagUpdateTime: 'StartTagUpdateTime',
      status: 'Status',
      thumbnailMode: 'ThumbnailMode',
      topK: 'TopK',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetaIds: { 'type': 'array', 'itemType': 'string' },
      datasetVersion: 'string',
      endFileUpdateTime: 'string',
      endTagUpdateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageSize: 'number',
      queryContentTypeIncludeAny: { 'type': 'array', 'itemType': 'string' },
      queryExpression: 'string',
      queryFileDir: 'string',
      queryFileName: 'string',
      queryFileTypeIncludeAny: { 'type': 'array', 'itemType': 'string' },
      queryImage: 'string',
      queryTagsExclude: { 'type': 'array', 'itemType': 'string' },
      queryTagsIncludeAll: { 'type': 'array', 'itemType': 'string' },
      queryTagsIncludeAny: { 'type': 'array', 'itemType': 'string' },
      queryText: 'string',
      queryType: 'string',
      queryVideo: 'string',
      scoreThreshold: 'number',
      sortBy: 'string',
      startFileUpdateTime: 'string',
      startTagUpdateTime: 'string',
      status: 'string',
      thumbnailMode: 'string',
      topK: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetaIds)) {
      $dara.Model.validateArray(this.datasetFileMetaIds);
    }
    if(Array.isArray(this.queryContentTypeIncludeAny)) {
      $dara.Model.validateArray(this.queryContentTypeIncludeAny);
    }
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

