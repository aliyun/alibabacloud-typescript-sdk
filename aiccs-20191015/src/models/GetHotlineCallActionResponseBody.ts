// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineCallActionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 8999****
   */
  actionId?: number;
  /**
   * @example
   * 2367****
   */
  buId?: number;
  /**
   * @example
   * 1122****
   */
  calloutId?: number;
  calloutName?: string;
  /**
   * @example
   * 1138902****
   */
  caseId?: number;
  /**
   * @example
   * 2377****
   */
  channelId?: string;
  /**
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @example
   * 1223****
   */
  depId?: number;
  /**
   * @example
   * true
   */
  isTransfer?: string;
  /**
   * @example
   * 7856876****
   */
  memberId?: number;
  /**
   * @example
   * 8900****
   */
  memberList?: string;
  memberName?: string;
  /**
   * @example
   * 1332****
   */
  servicerId?: number;
  servicerName?: string;
  /**
   * @example
   * 3423****
   */
  subTouchId?: number;
  /**
   * @example
   * 12345****
   */
  taskId?: number;
  /**
   * @example
   * 2235****
   */
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      actionId: 'ActionId',
      buId: 'BuId',
      calloutId: 'CalloutId',
      calloutName: 'CalloutName',
      caseId: 'CaseId',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      depId: 'DepId',
      isTransfer: 'IsTransfer',
      memberId: 'MemberId',
      memberList: 'MemberList',
      memberName: 'MemberName',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      subTouchId: 'SubTouchId',
      taskId: 'TaskId',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'number',
      buId: 'number',
      calloutId: 'number',
      calloutName: 'string',
      caseId: 'number',
      channelId: 'string',
      channelType: 'number',
      depId: 'number',
      isTransfer: 'string',
      memberId: 'number',
      memberList: 'string',
      memberName: 'string',
      servicerId: 'number',
      servicerName: 'string',
      subTouchId: 'number',
      taskId: 'number',
      touchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineCallActionResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineCallActionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

