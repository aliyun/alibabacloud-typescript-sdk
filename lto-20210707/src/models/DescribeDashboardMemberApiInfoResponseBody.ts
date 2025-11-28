// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDashboardMemberApiInfoResponseBodyDataMemberInfoList extends $dara.Model {
  apiInvokeCount?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      apiInvokeCount: 'ApiInvokeCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvokeCount: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardMemberApiInfoResponseBodyData extends $dara.Model {
  memberInfoList?: DescribeDashboardMemberApiInfoResponseBodyDataMemberInfoList[];
  memberName?: string;
  static names(): { [key: string]: string } {
    return {
      memberInfoList: 'MemberInfoList',
      memberName: 'MemberName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberInfoList: { 'type': 'array', 'itemType': DescribeDashboardMemberApiInfoResponseBodyDataMemberInfoList },
      memberName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberInfoList)) {
      $dara.Model.validateArray(this.memberInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardMemberApiInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeDashboardMemberApiInfoResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeDashboardMemberApiInfoResponseBodyData },
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

