// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineCallActionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Customer ID.
   * 
   * @example
   * 8999****
   */
  actionId?: number;
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * 2367****
   */
  buId?: number;
  /**
   * @remarks
   * Callout ID.
   * 
   * @example
   * 1122****
   */
  calloutId?: number;
  /**
   * @remarks
   * Call name.
   * 
   * @example
   * 王XX
   */
  calloutName?: string;
  /**
   * @remarks
   * Ticket ID.
   * 
   * @example
   * 1138902****
   */
  caseId?: number;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * 2377****
   */
  channelId?: string;
  /**
   * @remarks
   * Channel Type. Valid values:
   * 
   * - **1**: Hotline.
   * - **2**: Online.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 1223****
   */
  depId?: number;
  /**
   * @remarks
   * Indicates whether the call is transferred.
   * 
   * @example
   * true
   */
  isTransfer?: string;
  /**
   * @remarks
   * Membership ID.
   * 
   * @example
   * 7856876****
   */
  memberId?: number;
  /**
   * @remarks
   * Membership List.
   * 
   * @example
   * 8900****
   */
  memberList?: string;
  /**
   * @remarks
   * Membership name.
   * 
   * @example
   * 匿名会员
   */
  memberName?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * 1332****
   */
  servicerId?: number;
  /**
   * @remarks
   * Agent name.
   * 
   * @example
   * XX测试
   */
  servicerName?: string;
  /**
   * @remarks
   * Sub-touch ID.
   * 
   * @example
   * 3423****
   */
  subTouchId?: number;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 12345****
   */
  taskId?: number;
  /**
   * @remarks
   * Touch ID.
   * 
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
   * @remarks
   * Status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetHotlineCallActionResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
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

