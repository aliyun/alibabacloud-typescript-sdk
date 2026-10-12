// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetFileMetasShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of metadata IDs to query.
   */
  datasetFileMetaIdsShrink?: string;
  /**
   * @remarks
   * The dataset version name.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The start time of the file update time range for the query. The value is a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endFileUpdateTime?: string;
  /**
   * @remarks
   * The end time of the tag last update time range for the query. The value is a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endTagUpdateTime?: string;
  /**
   * @remarks
   * The maximum number of results to return per request when using NextToken-based pagination. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * > 
   * > If this parameter is not specified, the first page of data is returned. If a value is returned for this parameter, more pages are available. Pass the returned NextToken value as a request parameter to retrieve the next page, until no NextToken value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * 90a6ee35-****-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting order for the specified sorting field in paging queries. Used together with SortBy. Default value: DESC. Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. If MaxResults is also specified, MaxResults takes precedence.
   * > This parameter will be offline soon. Use NextToken and MaxResults to perform paging query operations.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The search condition for "include any of the following content types". You can select multiple content types, and the query results need to match only one of them. If this parameter is empty, this condition is not applied. Array elements are separated by commas.
   */
  queryContentTypeIncludeAnyShrink?: string;
  /**
   * @remarks
   * The query statement (DSL) is a realm-specific language for expressing complex retrieve conditions. It supports grouping, Boolean logic (AND/OR/NOT), range comparisons (>, >=, <, <=), property existence checks (HAS/NOT HAS), token match (:), and exact match (=), which are suitable for advanced retrieve scenarios.
   * This parameter is typically used for complex advanced retrieve conditional statements.
   * <notice>To avoid conflicts, after setting this query statement, do not use it together with other query parameters.</notice>
   * 
   * @example
   * (FileUpdateTime > \\"2025-02-28T00:00:00Z\\" AND FileUpdateTime < \\"2025-05-30T09:27:29Z\\") AND FileDir:\\"blue_car\\" AND NOT FileName="toyota.jpg" AND (( Tags.all=\\"lane line\\" AND Tags.all=\\"barrier gate\\") OR NOT Tags.user=\\"rainy days\\" ) AND HAS SemanticIndexJobId AND Content:\\"a fallen water horse\\" AND TopK=100 AND SignMode=\\"PUBLIC\\"
   */
  queryExpression?: string;
  /**
   * @remarks
   * The file directory search condition. Fuzzy match is supported.
   * 
   * @example
   * cars/20250221/
   */
  queryFileDir?: string;
  /**
   * @remarks
   * The file name search condition. Fuzzy match is supported.
   * 
   * @example
   * car
   */
  queryFileName?: string;
  /**
   * @remarks
   * The search condition for "include any of the following file types". You can select multiple file types, and the query results need to match only one of them. If this parameter is empty, this condition is not applied. Array elements are separated by commas.
   */
  queryFileTypeIncludeAnyShrink?: string;
  /**
   * @remarks
   * The image information for image-to-image search.
   * * An OSS URL with public network access is supported. Format: oss://{bucket_name}/{object_path}, where bucket_name is the bucket name and object_path is the file path in the bucket.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * oss://test-xxx-oss/car/0001.png
   */
  queryImage?: string;
  /**
   * @remarks
   * The search condition for "exclude the following tags". You can select multiple tags, and the query results must not contain any of them. If this parameter is empty, this condition is not applied.
   * > This parameter takes effect only when QueryType is set to TAG or MIX.
   */
  queryTagsExcludeShrink?: string;
  /**
   * @remarks
   * The search condition for "include all of the following tags". You can select multiple tags, and the query results must match all of them. If this parameter is empty, this condition is not applied. Array elements are separated by commas.
   * 
   * > This parameter takes effect only when QueryType is set to TAG or MIX. When QueryType is set to TAG, the value of QueryText is added to this condition.
   */
  queryTagsIncludeAllShrink?: string;
  /**
   * @remarks
   * The search condition for "include any of the following tags". You can select multiple tags, and the query results need to match only one of them. If this parameter is empty, this condition is not applied. Array elements are separated by commas.
   * > This parameter takes effect only when QueryType is set to TAG or MIX.
   */
  queryTagsIncludeAnyShrink?: string;
  /**
   * @remarks
   * The text content to search for.
   * 
   * @example
   * A fallen water
   */
  queryText?: string;
  /**
   * @remarks
   * The retrieve type. Valid values:
   * * MIX: hybrid retrieve (default).
   * * TAG: label-only retrieve.
   * * VECTOR: AISearch-only retrieve.
   * 
   * @example
   * MIX
   */
  queryType?: string;
  /**
   * @remarks
   * The video file information for video-based search.
   * * A video OSS URL with public network access is supported. Format: oss://{bucket_name}/{object_path}, where bucket_name is the bucket name and object_path is the file path in the bucket.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * oss://test-xxx-oss/car/0001.mp4
   */
  queryVideo?: string;
  /**
   * @remarks
   * The similarity score threshold. Only results with a score greater than ScoreThreshold are returned.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * 0.6
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The sorting field for paging queries. By default, results are sorted by retrieve relevance in descending order. Other valid values:
   * * FileCreateTime: sorting by file creation time.
   * * FileUpdateTime: sorting by file last modified time.
   * 
   * @example
   * FileCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The end time of the file update time range for the query. The value is a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startFileUpdateTime?: string;
  /**
   * @remarks
   * The start time of the tag last update time range for the query. The value is a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startTagUpdateTime?: string;
  /**
   * @remarks
   * The metadata status to query. Valid values:
   * * ACTIVE: queries only non-deleted data (default).
   * * ALL: queries all data.
   * * DELETED: queries only logically deleted data.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The thumbnail mode for images. Currently, only OSS files support thumbnails:
   * - Proportional scaling: p_{percentage}, where percentage specifies the desired scaling ratio. Valid values: [1, 100]. Example: p_50 uses 50% of the original file size as the thumbnail.
   * - Fixed width with adaptive height: w_{width}, where width specifies the desired image width. Valid values: [1, 16384]. Example: w_200 fixes the image width to 200 pixels and adaptively scales the height.
   * - Fixed height with adaptive width: h_{height}, where height specifies the desired image height. Valid values: [1, 16384]. Example: h_100 fixes the image height to 100 pixels and adaptively scales the width.
   * - Fixed dimensions with padding: m_pad,w_{width},h_{height},color_{RGB}. m_pad scales the image to the largest size that fits within the specified width and height rectangle. RGB specifies the fill color for blank areas. If this parameter is not specified, white is used by default. width specifies the desired image width and height specifies the desired image height. Valid values for both width and height: [1, 16384]. Example:
   * - Fixed dimensions with center cropping: m_fill,w_{width},h_{height}. m_fill proportionally scales the image to the smallest size that extends beyond the specified width and height rectangle, and center-crops the excess. width specifies the desired image width and height specifies the desired image height. Valid values for both width and height: [1, 16384]. Example: m_fill,w_100,h_100 fixes both the width and height to 100 pixels with center cropping.
   * - Forced dimensions: m_fixed,w_{width},h_{height}. width specifies the desired image width and height specifies the desired image height. Valid values for both width and height: [1, 16384]. Example: m_fixed,w_100,h_100 forces both the width and height to 100 pixels.
   * 
   * @example
   * w_100
   */
  thumbnailMode?: string;
  /**
   * @remarks
   * The maximum number of results to return. Only the top K results are returned.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * 100
   */
  topK?: number;
  /**
   * @remarks
   * The workspace ID of the dataset. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 105173
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetaIdsShrink: 'DatasetFileMetaIds',
      datasetVersion: 'DatasetVersion',
      endFileUpdateTime: 'EndFileUpdateTime',
      endTagUpdateTime: 'EndTagUpdateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageSize: 'PageSize',
      queryContentTypeIncludeAnyShrink: 'QueryContentTypeIncludeAny',
      queryExpression: 'QueryExpression',
      queryFileDir: 'QueryFileDir',
      queryFileName: 'QueryFileName',
      queryFileTypeIncludeAnyShrink: 'QueryFileTypeIncludeAny',
      queryImage: 'QueryImage',
      queryTagsExcludeShrink: 'QueryTagsExclude',
      queryTagsIncludeAllShrink: 'QueryTagsIncludeAll',
      queryTagsIncludeAnyShrink: 'QueryTagsIncludeAny',
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
      datasetFileMetaIdsShrink: 'string',
      datasetVersion: 'string',
      endFileUpdateTime: 'string',
      endTagUpdateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageSize: 'number',
      queryContentTypeIncludeAnyShrink: 'string',
      queryExpression: 'string',
      queryFileDir: 'string',
      queryFileName: 'string',
      queryFileTypeIncludeAnyShrink: 'string',
      queryImage: 'string',
      queryTagsExcludeShrink: 'string',
      queryTagsIncludeAllShrink: 'string',
      queryTagsIncludeAnyShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

