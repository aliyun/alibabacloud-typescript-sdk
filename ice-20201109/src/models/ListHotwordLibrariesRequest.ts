// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotwordLibrariesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for filtering. The time is in ISO 8601 format and uses UTC time (ending with Z).
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of records returned for the current request.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the hotword library.
   * 
   * @example
   * Hotword library name
   */
  name?: string;
  /**
   * @remarks
   * The position from which to start reading.
   * 
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting parameter. By default, the results are sorted in descending order of creation time.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time for filtering. The time is in ISO 8601 format and uses UTC time (ending with Z).
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * The scenarios of the hotword library. Valid values:
   * - ASR: ASR intelligent text recognition.
   * - StructuredMediaAssets: Structured media assets.
   * - VideoTranslation: Video translation.
   * Once a hotword library is created, this field cannot be modified.
   * 
   * @example
   * ASR
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      usageScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

