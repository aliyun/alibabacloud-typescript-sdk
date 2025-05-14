// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConferenceInfoByRoomCodeResponseBodyConferenceList } from "./QueryConferenceInfoByRoomCodeResponseBodyConferenceList";


export class QueryConferenceInfoByRoomCodeResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  conferenceList?: QueryConferenceInfoByRoomCodeResponseBodyConferenceList[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  dingtalkRequestId?: string;
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 1296
   */
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceList: 'conferenceList',
      dingtalkRequestId: 'dingtalkRequestId',
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceList: { 'type': 'array', 'itemType': QueryConferenceInfoByRoomCodeResponseBodyConferenceList },
      dingtalkRequestId: 'string',
      hasMore: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conferenceList)) {
      $dara.Model.validateArray(this.conferenceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

