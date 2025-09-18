// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamTagListResponseBodyStreamTagList extends $dara.Model {
  /**
   * @example
   * 2025-02-25T02:24:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2025-04-26T16:00:00Z
   */
  startTime?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  streamTagList?: GetStreamTagListResponseBodyStreamTagList[];
  /**
   * @example
   * true
   */
  success?: string;
  /**
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

