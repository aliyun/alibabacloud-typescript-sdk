// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaBasicInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication expiration time, in seconds.
   * 
   * - Minimum value: 1.
   * 
   * - Maximum value: 86400.
   * 
   * - Default value: 3600.
   * 
   * @example
   * 30
   */
  authTimeout?: number;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - `subtitles`: subtitles
   * 
   * - `watermark`: watermark
   * 
   * - `opening`: opening
   * 
   * - `ending`: ending
   * 
   * - `general`: General
   * 
   * @example
   * opening
   */
  businessType?: string;
  /**
   * @remarks
   * The end time of the query range, based on the creation time (`utcCreated`).
   * 
   * - The query returns results created at or before this time (inclusive).
   * 
   * - The time must be in UTC and comply with the ISO 8601 standard. The format is `YYYY-MM-DD\\"T\\"HH:mm:ss\\"Z\\"`. For example, `2017-01-11T12:00:00Z` corresponds to 20:00:00 on January 11, 2017 (UTC+8).
   * 
   * @example
   * 2020-12-20T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Set to `true` to include basic file information in the response.
   * 
   * @example
   * true
   */
  includeFileBasicInfo?: boolean;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The media ID.
   * 
   * @example
   * ****019b82e24b37a1c2958dec38****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * - `image`: image
   * 
   * - `video`: video
   * 
   * - `audio`: audio
   * 
   * - `text`: text
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. An empty value indicates that all results have been returned.
   * 
   * @example
   * pSa1SQ0wCe5pzVrQ6mWZEw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order for results based on the creation time (`utcCreated`). The default is descending. Valid values:
   * 
   * - `desc`: Descending order
   * 
   * - `asc`: Ascending order
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The source. Valid values:
   * 
   * - `oss`: OSS
   * 
   * - `vod`: video on demand
   * 
   * - `live`: live streaming
   * 
   * - `general`: Other sources (default).
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The start time of the query range, based on the creation time (`utcCreated`).
   * 
   * - The query returns results created after this time (exclusive).
   * 
   * - The time must be in UTC and comply with the ISO 8601 standard. The format is `YYYY-MM-DD\\"T\\"HH:mm:ss\\"Z\\"`. For example, `2017-01-11T12:00:00Z` corresponds to 20:00:00 on January 11, 2017 (UTC+8).
   * 
   * @example
   * 2020-12-20T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The media status. Valid values:
   * 
   * - `Init`: The source file is not ready.
   * 
   * - `Preparing`: The source file is being prepared. For example, it is being uploaded or composited.
   * 
   * - `PrepareFail`: The source file failed to prepare. This may occur, for example, if the system fails to retrieve information about the source file.
   * 
   * - `Normal`: The source file is ready.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      businessType: 'BusinessType',
      endTime: 'EndTime',
      includeFileBasicInfo: 'IncludeFileBasicInfo',
      maxResults: 'MaxResults',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      nextToken: 'NextToken',
      sortBy: 'SortBy',
      source: 'Source',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      businessType: 'string',
      endTime: 'string',
      includeFileBasicInfo: 'boolean',
      maxResults: 'number',
      mediaId: 'string',
      mediaType: 'string',
      nextToken: 'string',
      sortBy: 'string',
      source: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

