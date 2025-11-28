// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDashboardMemberDeviceInfoResponseBodyDataMemberInfoList extends $dara.Model {
  deviceCount?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCount: 'DeviceCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCount: 'number',
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

export class DescribeDashboardMemberDeviceInfoResponseBodyData extends $dara.Model {
  memberInfoList?: DescribeDashboardMemberDeviceInfoResponseBodyDataMemberInfoList[];
  memberName?: string;
  static names(): { [key: string]: string } {
    return {
      memberInfoList: 'MemberInfoList',
      memberName: 'MemberName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberInfoList: { 'type': 'array', 'itemType': DescribeDashboardMemberDeviceInfoResponseBodyDataMemberInfoList },
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

export class DescribeDashboardMemberDeviceInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeDashboardMemberDeviceInfoResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeDashboardMemberDeviceInfoResponseBodyData },
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

