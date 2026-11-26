// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineCallActionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The customer ID.
   * 
   * @example
   * 8999****
   */
  actionId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 2367****
   */
  buId?: number;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * 1122****
   */
  calloutId?: number;
  /**
   * @remarks
   * The call name.
   * 
   * @example
   * Wang XX
   */
  calloutName?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 1138902****
   */
  caseId?: number;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * 2377****
   */
  channelId?: string;
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **1**: hotline.
   * - **2**: online.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * The department ID.
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
   * The member ID.
   * 
   * @example
   * 7856876****
   */
  memberId?: number;
  /**
   * @remarks
   * The list of members.
   * 
   * @example
   * 8900****
   */
  memberList?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * Anonymous Member
   */
  memberName?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 1332****
   */
  servicerId?: number;
  /**
   * @remarks
   * The name of the customer service representative.
   * 
   * @example
   * XX Test
   */
  servicerName?: string;
  /**
   * @remarks
   * The sub-touch ID.
   * 
   * @example
   * 3423****
   */
  subTouchId?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 12345****
   */
  taskId?: number;
  /**
   * @remarks
   * The touch ID.
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
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetHotlineCallActionResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - **true**: The API call is successful.
   * - **false**: The API call fails.
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

