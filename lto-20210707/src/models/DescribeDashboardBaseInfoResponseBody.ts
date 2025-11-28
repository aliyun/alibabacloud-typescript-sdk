// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDashboardBaseInfoResponseBodyData extends $dara.Model {
  apiInvokeCount?: number;
  bizChainCount?: number;
  deviceCount?: number;
  memberCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInvokeCount: 'ApiInvokeCount',
      bizChainCount: 'BizChainCount',
      deviceCount: 'DeviceCount',
      memberCount: 'MemberCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvokeCount: 'number',
      bizChainCount: 'number',
      deviceCount: 'number',
      memberCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardBaseInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeDashboardBaseInfoResponseBodyData;
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
      data: DescribeDashboardBaseInfoResponseBodyData,
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

