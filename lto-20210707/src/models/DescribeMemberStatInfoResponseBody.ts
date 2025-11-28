// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMemberStatInfoResponseBodyData extends $dara.Model {
  authorizedCount?: number;
  bizChainCount?: number;
  memberId?: string;
  memberName?: string;
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedCount: 'AuthorizedCount',
      bizChainCount: 'BizChainCount',
      memberId: 'MemberId',
      memberName: 'MemberName',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedCount: 'number',
      bizChainCount: 'number',
      memberId: 'string',
      memberName: 'string',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberStatInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeMemberStatInfoResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeMemberStatInfoResponseBodyData },
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

