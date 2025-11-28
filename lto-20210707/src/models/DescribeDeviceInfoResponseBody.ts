// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceInfoResponseBodyData extends $dara.Model {
  authorizedCount?: number;
  deviceCount?: number;
  distributableCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedCount: 'AuthorizedCount',
      deviceCount: 'DeviceCount',
      distributableCount: 'DistributableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedCount: 'number',
      deviceCount: 'number',
      distributableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeDeviceInfoResponseBodyData;
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
      data: DescribeDeviceInfoResponseBodyData,
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

