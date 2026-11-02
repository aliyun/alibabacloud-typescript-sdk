// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaBasicInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication expiration time. Unit: seconds.
   * - Minimum value: 1.
   * - Maximum value: 86400.
   * - Default value: 3600.
   * 
   * @example
   * 30
   */
  authTimeout?: number;
  /**
   * @remarks
   * The business type of the media asset. Valid values:
   * 
   * - "subtitles": Subtitles.
   * 
   * - "watermark": Watermark.
   * 
   * - "opening": Opening.
   * 
   * - "ending": Ending.
   * 
   * - "general": General.
   * 
   * @example
   * opening
   */
  businessType?: string;
  /**
   * @remarks
   * The end time of the creation time (utcCreated).
   * 
   * - The interval is closed, which means the time must be earlier than or equal to the end time.
   * 
   * - Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC. For example, 2017-01-11T12:00:00Z indicates 20:00:00 on January 11, 2017 (UTC+8).
   * 
   * @example
   * 2020-12-20T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to include the basic information of the file in the response.
   * 
   * @example
   * true
   */
  includeFileBasicInfo?: boolean;
  /**
   * @remarks
   * The maximum number of records to return for the current request.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the media asset. A single media asset ID supports prefix matching.
   * 
   * @example
   * ****019b82e24b37a1c2958dec38****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media type of the media asset. Valid values:
   * 
   * - "image": Image.
   * 
   * - "video": Video.
   * 
   * - "audio": Audio.
   * 
   * - "text": Text.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The token that indicates the position from which the current call starts to read. An empty value indicates that all data has been read.
   * 
   * @example
   * pSa1SQ0wCe5pzVrQ6mWZEw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order based on utcCreated. Default value: desc. Valid values:
   * 
   * - "desc": Descending order.
   * 
   * - "asc": Ascending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The source. Valid values:
   * 
   * - "oss": OSS storage.
   * 
   * - "vod": VOD.
   * 
   * - "live": ApsaraVideo Live.
   * 
   * - "general": Other sources (default).
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The start time of the creation time (utcCreated).
   * 
   * - The interval is open, which means the time must be later than the start time.
   * 
   * - Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC. For example, 2017-01-11T12:00:00Z indicates 20:00:00 on January 11, 2017 (UTC+8).
   * 
   * @example
   * 2020-12-20T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * - Init: Initial state. The source file is not ready.
   * 
   * - Preparing: The source file is being prepared, such as being uploaded or edited and produced.
   * 
   * - PrepareFail: The source file fails to be prepared, such as failing to obtain the source file information.
   * 
   * - Normal: Normal. The source file is ready.
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

