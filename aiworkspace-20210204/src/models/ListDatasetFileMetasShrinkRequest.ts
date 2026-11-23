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
   * The end time of the file update time range for the query. Specify the time in the ISO 8601 standard in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endFileUpdateTime?: string;
  /**
   * @remarks
   * The end time of the tag last update time range for the query. Specify the time in the ISO 8601 standard in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endTagUpdateTime?: string;
  /**
   * @remarks
   * The maximum number of results to return per query when NextToken is used. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor.
   * > 
   * > If this parameter is not specified, the first page of data is returned. If this parameter has a return value, it indicates that there is a next page. You can use the returned NextToken as a parameter to request the next page of data until Null is returned, which indicates that all data is retrieved.
   * 
   * @example
   * 90a6ee35-****-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The ascending or descending order for the specified sorting field in a paged query. This parameter is used together with SortBy during paging. Default value: DESC. Valid values:
   * - ASC: Ascending order.
   * - DESC: Descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. If MaxResults is also specified, MaxResults prevails.
   * > This parameter will soon be offline. We recommend that you use NextToken and MaxResults for paging in paged query operations.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The search condition for "including any of the following file content types". You can select multiple file content types, and the search results only need to meet one of them. If this parameter is empty, this condition is not applied. Separate multiple file content types with commas.
   */
  queryContentTypeIncludeAnyShrink?: string;
  /**
   * @remarks
   * The query statement (DSL) is a domain-specific language used to express complex search conditions. It supports grouping, Boolean logic (AND/OR/NOT), range comparison (>, >=, <, <=), property existence (HAS/NOT HAS), token matching (:), and exact matching (=), and is suitable for advanced search scenarios.
   * It is generally used for complex advanced search conditions.
   * <notice>To avoid conflicts, do not mix this query statement with other query parameters.</notice>
   * 
   * @example
   * (FileUpdateTime > \\"2025-02-28T00:00:00Z\\" AND FileUpdateTime < \\"2025-05-30T09:27:29Z\\") AND FileDir:\\"blue_car\\" AND NOT FileName="toyota.jpg" AND (( Tags.all=\\"lane line\\" AND Tags.all=\\"barrier gate\\") OR NOT Tags.user=\\"rainy days\\" ) AND HAS SemanticIndexJobId AND Content:\\"a fallen water horse\\" AND TopK=100 AND SignMode=\\"PUBLIC\\"
   */
  queryExpression?: string;
  /**
   * @remarks
   * The file directory search condition. Fuzzy search is supported.
   * 
   * @example
   * cars/20250221/
   */
  queryFileDir?: string;
  /**
   * @remarks
   * The file name search condition. Fuzzy search is supported.
   * 
   * @example
   * car
   */
  queryFileName?: string;
  /**
   * @remarks
   * The search condition for "including any of the following file types". You can select multiple file types, and the search results only need to meet one of them. If this parameter is empty, this condition is not applied. Separate multiple file types with commas.
   */
  queryFileTypeIncludeAnyShrink?: string;
  /**
   * @remarks
   * The image information for image-to-image search.
   * * Supports passing an OSS URL that allows public network access for the image. Format: oss://{bucket_name}/{object_path}. bucket_name is the bucket name, and object_path is the path of the file in the bucket.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * oss://test-xxx-oss/car/0001.png
   */
  queryImage?: string;
  /**
   * @remarks
   * The search condition for "excluding the following tags". You can select multiple tags, and the search results must not contain these tags. If this parameter is empty, this condition is not applied.
   * > This parameter takes effect only when QueryType is set to TAG or MIX.
   */
  queryTagsExcludeShrink?: string;
  /**
   * @remarks
   * The search condition for "including all of the following tags". You can select multiple tags, and the search results must meet all these tags simultaneously. If this parameter is empty, this condition is not applied. Separate multiple tags with commas.
   * > This parameter takes effect only when QueryType is set to TAG or MIX. When QueryType is set to TAG, QueryText is added to this condition.
   */
  queryTagsIncludeAllShrink?: string;
  /**
   * @remarks
   * The search condition for "including any of the following tags". You can select multiple tags, and the search results only need to meet one of them. If this parameter is empty, this condition is not applied. Separate multiple tags with commas.
   * > This parameter takes effect only when QueryType is set to TAG or MIX.
   */
  queryTagsIncludeAnyShrink?: string;
  /**
   * @remarks
   * The text content to search.
   * 
   * @example
   * A fallen water
   */
  queryText?: string;
  /**
   * @remarks
   * The retrieve type. Valid values:
   * * MIX: Hybrid retrieve. This is the default value.
   * * TAG: Label-only retrieve.
   * * VECTOR: AISearch-only retrieve.
   * 
   * @example
   * MIX
   */
  queryType?: string;
  /**
   * @remarks
   * The video file information for video search.
   * * Supports passing an OSS URL that allows public network access for the video. Format: oss://{bucket_name}/{object_path}. bucket_name is the bucket name, and object_path is the path of the file in the bucket.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * oss://test-xxx-oss/car/0001.mp4
   */
  queryVideo?: string;
  /**
   * @remarks
   * The similarity score threshold for filtering. Only results with a score greater than ScoreThreshold are returned.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * 0.6
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The sorting field for paged query. If this parameter is not specified, the results are sorted by retrieve relevance in descending order during paging. Valid values:
   * * FileCreateTime: Sort by file creation time.
   * * FileUpdateTime: Sort by file last modification time.
   * 
   * @example
   * FileCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the file update time range for the query. Specify the time in the ISO 8601 standard in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startFileUpdateTime?: string;
  /**
   * @remarks
   * The start time of the tag last update time range for the query. Specify the time in the ISO 8601 standard in UTC.
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
   * * ACTIVE: Query only undeleted data. This is the default value.
   * * ALL: Query all data.
   * * DELETED: Query only logically deleted data.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The thumbnail mode for images. Currently, only OSS files support thumbnails. Valid values:
   * - Proportional scaling: p_{percentage}. percentage indicates the expected scaling ratio. Valid values: [1, 100]. Example: p_50 indicates that the thumbnail size is 50% of the original file size.
   * - Fixed width and adaptive height: w_{width}. width indicates the expected image width. Valid values: [1, 16384]. Example: w_200 indicates that the image width is fixed at 200 pixels and the height is adaptively scaled.
   * - Fixed height and adaptive width: h_{height}. height indicates the expected image height. Valid values: [1, 16384]. Example: h_100 indicates that the image height is fixed at 100 pixels and the width is adaptively scaled.
   * - Fixed width and height with padding: m_pad,w_{width},h_{height},color_{RGB}. m_pad indicates that the image is scaled to the maximum size within the specified w and h rectangle. RGB specifies the color used to fill the blank space in the center. If this parameter is not specified, white is used by default. width indicates the expected image width, and height indicates the expected image height. Valid values of width and height: [1, 16384]. Example:
   * - Fixed width and height with center cropping: m_fill,w_{width},h_{height}. m_fill indicates that the image is proportionally scaled to the minimum size that extends beyond the specified w and h rectangle, and the excess part is center-cropped. width indicates the expected image width, and height indicates the expected image height. Valid values of width and height: [1, 16384]. Example: m_fill,w_100,h_100 indicates that the image width and height are both fixed at 100 pixels for center cropping and scaling.
   * - Forced width and height scaling: m_fixed,w_{width},h_{height}. width indicates the expected image width, and height indicates the expected image height. Valid values of width and height: [1, 16384]. Example: m_fixed,w_100,h_100 indicates that the image width and height are both fixed at 100 pixels for forced scaling.
   * 
   * @example
   * w_100
   */
  thumbnailMode?: string;
  /**
   * @remarks
   * The number of search results to return. A maximum of TopK search results are returned.
   * > This parameter takes effect only when QueryType is set to VECTOR or MIX.
   * 
   * @example
   * 100
   */
  topK?: number;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

