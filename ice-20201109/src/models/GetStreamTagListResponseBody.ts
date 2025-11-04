// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamTagListResponseBodyStreamTagList extends $dara.Model {
  /**
   * @remarks
   * The end time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-02-25T02:24:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-04-26T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"result":"xxx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStreamTagListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The tag information.
   */
  streamTagList?: GetStreamTagListResponseBodyStreamTagList[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 163
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      streamTagList: 'StreamTagList',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      nextToken: 'string',
      requestId: 'string',
      streamTagList: { 'type': 'array', 'itemType': GetStreamTagListResponseBodyStreamTagList },
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.streamTagList)) {
      $dara.Model.validateArray(this.streamTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

