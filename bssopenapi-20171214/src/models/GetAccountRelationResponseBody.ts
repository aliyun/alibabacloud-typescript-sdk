// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountRelationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as a member.
   * 
   * @example
   * ID of the Alibaba Cloud account that is used as a member
   */
  childUserId?: number;
  /**
   * @remarks
   * The time when the financial relationship between the management account and the member was terminated.
   * 
   * @example
   * 2021-12-01
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the financial relationship between the management account and the member was modified.
   * 
   * @example
   * 2021-12-01
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the financial relationship.
   * 
   * @example
   * ID of the financial relationship
   */
  id?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used as the management account.
   * 
   * @example
   * ID of the Alibaba Cloud account that is used as the management account
   */
  parentUserId?: number;
  /**
   * @remarks
   * The time when the financial relationship between the management account and the member was established.
   * 
   * @example
   * 2021-11-01
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the financial relationship between the management account and the member.
   * 
   * - RELATED [Association established]
   * - CONFIRMING [To be confirmed by the other party]
   * - REJECTED [Refused by the other party]
   * - CONNECTION_CANCELED [Financial sub-account cancel request]
   * - CONNECTION_MASTER_CANCEL [Financial master account cancel invitation]
   * - CHANGE_CONFIRMING [Relationship change to be confirmed]
   * - INITIAL [Initial new relationship status]
   * 
   * @example
   * RELATED
   */
  status?: string;
  /**
   * @remarks
   * The type of the financial relationship.
   * 
   * @example
   * enterprise_group
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      endTime: 'EndTime',
      gmtModified: 'GmtModified',
      id: 'Id',
      parentUserId: 'ParentUserId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      endTime: 'number',
      gmtModified: 'number',
      id: 'number',
      parentUserId: 'number',
      startTime: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: GetAccountRelationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Message returned
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * RequestId
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: GetAccountRelationResponseBodyData,
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

