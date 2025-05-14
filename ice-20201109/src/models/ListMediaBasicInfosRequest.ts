// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaBasicInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the media asset. Valid values:
   * 
   * \\- subtitles
   * 
   * \\- watermark
   * 
   * \\- opening
   * 
   * \\- ending
   * 
   * \\- general
   * 
   * @example
   * opening
   */
  businessType?: string;
  /**
   * @remarks
   * The end time of utcCreated.
   * 
   * \\- The value is the end of the left-open right-closed interval.
   * 
   * \\- Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. For example, 2017-01-11T12:00:00Z indicates 20:00:00 on January 11, 2017 (UTC +8).
   * 
   * @example
   * 2020-12-20T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to return the basic information of the source file.
   * 
   * @example
   * true
   */
  includeFileBasicInfo?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****019b82e24b37a1c2958dec38****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * \\- image
   * 
   * \\- video
   * 
   * \\- audio
   * 
   * \\- text
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * pSa1SQ0wCe5pzVrQ6mWZEw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The order of sorting by utcCreated. Default value: desc. Valid values:
   * 
   * \\- desc
   * 
   * \\- asc
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The source of the media asset. Valid values:
   * 
   * \\- oss: Object Storage Service (OSS).
   * 
   * \\- vod: ApsaraVideo VOD.
   * 
   * \\- live: ApsaraVideo Live.
   * 
   * \\- general: other sources. This is the default value.
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The start time of utcCreated.
   * 
   * \\- The value is the beginning of a left-open right-closed interval.
   * 
   * \\- Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. For example, 2017-01-11T12:00:00Z indicates 20:00:00 on January 11, 2017 (UTC +8).
   * 
   * @example
   * 2020-12-20T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the media asset. Valid values:
   * 
   * \\- Init: the initial state, which indicates that the source file is not ready.
   * 
   * \\- Preparing: The source file is being prepared. For example, the file is being uploaded or edited.
   * 
   * \\- PrepareFail: The source file failed to be prepared. For example, the information of the source file failed to be obtained.
   * 
   * \\- Normal: The source file is ready.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
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

