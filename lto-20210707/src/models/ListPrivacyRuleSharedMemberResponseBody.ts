// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivacyRuleSharedMemberResponseBodyDataMemberList extends $dara.Model {
  memberId?: string;
  memberName?: string;
  shared?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberName: 'MemberName',
      shared: 'Shared',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberName: 'string',
      shared: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivacyRuleSharedMemberResponseBodyData extends $dara.Model {
  bizChainId?: string;
  bizChainName?: string;
  memberList?: ListPrivacyRuleSharedMemberResponseBodyDataMemberList[];
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      bizChainName: 'BizChainName',
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      bizChainName: 'string',
      memberList: { 'type': 'array', 'itemType': ListPrivacyRuleSharedMemberResponseBodyDataMemberList },
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

export class ListPrivacyRuleSharedMemberResponseBody extends $dara.Model {
  code?: string;
  data?: ListPrivacyRuleSharedMemberResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
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
      data: { 'type': 'array', 'itemType': ListPrivacyRuleSharedMemberResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

