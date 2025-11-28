// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatMemberDeviceInfoResponseBodyData extends $dara.Model {
  authorizedCount?: string;
  bizChainCount?: string;
  memberId?: string;
  memberName?: string;
  usedCount?: string;
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
      authorizedCount: 'string',
      bizChainCount: 'string',
      memberId: 'string',
      memberName: 'string',
      usedCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatMemberDeviceInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeStatMemberDeviceInfoResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeStatMemberDeviceInfoResponseBodyData },
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

