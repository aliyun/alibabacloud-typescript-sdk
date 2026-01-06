// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkProjectionListResponseBodyData extends $dara.Model {
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * ABCD
   */
  code?: string;
  /**
   * @example
   * 3424242
   */
  devUid?: number;
  /**
   * @example
   * 517169
   */
  duration?: string;
  /**
   * @example
   * 1757729705000
   */
  endTs?: number;
  /**
   * @example
   * 342456
   */
  nickCode?: string;
  /**
   * @example
   * 123456789
   */
  orgId?: number;
  /**
   * @example
   * 4234242
   */
  recvClientId?: string;
  /**
   * @example
   * web
   */
  recvClientName?: string;
  /**
   * @example
   * room001
   */
  sendClientId?: string;
  /**
   * @example
   * active
   */
  sendClientName?: string;
  /**
   * @example
   * 24324
   */
  sendClientWorkNo?: string;
  /**
   * @example
   * 1765502676356
   */
  startTs?: number;
  /**
   * @example
   * 2432424
   */
  timeStr?: string;
  static names(): { [key: string]: string } {
    return {
      callStatus: 'callStatus',
      code: 'code',
      devUid: 'devUid',
      duration: 'duration',
      endTs: 'endTs',
      nickCode: 'nickCode',
      orgId: 'orgId',
      recvClientId: 'recvClientId',
      recvClientName: 'recvClientName',
      sendClientId: 'sendClientId',
      sendClientName: 'sendClientName',
      sendClientWorkNo: 'sendClientWorkNo',
      startTs: 'startTs',
      timeStr: 'timeStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStatus: 'string',
      code: 'string',
      devUid: 'number',
      duration: 'string',
      endTs: 'number',
      nickCode: 'string',
      orgId: 'number',
      recvClientId: 'string',
      recvClientName: 'string',
      sendClientId: 'string',
      sendClientName: 'string',
      sendClientWorkNo: 'string',
      startTs: 'number',
      timeStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDingtalkProjectionListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * []
   */
  data?: GetDingtalkProjectionListResponseBodyData[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 100
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
      currentPage: 'currentPage',
      data: 'data',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': GetDingtalkProjectionListResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

