// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatDeviceInfoResponseBodyDataBizChainList extends $dara.Model {
  authorizedCount?: number;
  bizChainName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedCount: 'AuthorizedCount',
      bizChainName: 'BizChainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedCount: 'number',
      bizChainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatDeviceInfoResponseBodyData extends $dara.Model {
  bizChainList?: DescribeStatDeviceInfoResponseBodyDataBizChainList[];
  distributableCount?: number;
  totalAuthorizedCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizChainList: 'BizChainList',
      distributableCount: 'DistributableCount',
      totalAuthorizedCount: 'TotalAuthorizedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainList: { 'type': 'array', 'itemType': DescribeStatDeviceInfoResponseBodyDataBizChainList },
      distributableCount: 'number',
      totalAuthorizedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bizChainList)) {
      $dara.Model.validateArray(this.bizChainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatDeviceInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeStatDeviceInfoResponseBodyData;
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
      data: DescribeStatDeviceInfoResponseBodyData,
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

