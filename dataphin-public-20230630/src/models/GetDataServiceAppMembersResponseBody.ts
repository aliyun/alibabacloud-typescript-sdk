// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAppMembersResponseBodyDataMemberList extends $dara.Model {
  /**
   * @example
   * 2026-12-12
   */
  effectiveEnd?: string;
  /**
   * @example
   * general
   */
  role?: string;
  /**
   * @example
   * 200000245
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveEnd: 'EffectiveEnd',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEnd: 'string',
      role: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAppMembersResponseBodyData extends $dara.Model {
  memberList?: GetDataServiceAppMembersResponseBodyDataMemberList[];
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': GetDataServiceAppMembersResponseBodyDataMemberList },
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAppMembersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetDataServiceAppMembersResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDataServiceAppMembersResponseBodyData,
      httpStatusCode: 'number',
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

