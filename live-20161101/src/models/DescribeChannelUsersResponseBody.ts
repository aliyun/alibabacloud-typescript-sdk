// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of streamers/co-streamers.
   */
  interactiveUserList?: string[];
  /**
   * @remarks
   * The number of co-streamers.
   * 
   * @example
   * 1
   */
  interactiveUserNumber?: number;
  /**
   * @remarks
   * Indicates whether the channel exists. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > After all users leave the channel, the system requires a few seconds to clear the cache. If you call the operation during this period, the value of this parameter is true, and the value of InteractiveUserNumber and LiveUserNumber is 0.
   * 
   * @example
   * true
   */
  isChannelExists?: boolean;
  /**
   * @remarks
   * The list of viewers.
   */
  liveUserList?: string[];
  /**
   * @remarks
   * The number of viewers.
   * 
   * @example
   * 1
   */
  liveUserNumber?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD86847D-1F36-18C8-A995-5EEA340B3202
   */
  requestId?: string;
  /**
   * @remarks
   * The UTC timestamp when the response is returned.
   * 
   * @example
   * 1691027655
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      interactiveUserList: 'InteractiveUserList',
      interactiveUserNumber: 'InteractiveUserNumber',
      isChannelExists: 'IsChannelExists',
      liveUserList: 'LiveUserList',
      liveUserNumber: 'LiveUserNumber',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interactiveUserList: { 'type': 'array', 'itemType': 'string' },
      interactiveUserNumber: 'number',
      isChannelExists: 'boolean',
      liveUserList: { 'type': 'array', 'itemType': 'string' },
      liveUserNumber: 'number',
      requestId: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.interactiveUserList)) {
      $dara.Model.validateArray(this.interactiveUserList);
    }
    if(Array.isArray(this.liveUserList)) {
      $dara.Model.validateArray(this.liveUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

