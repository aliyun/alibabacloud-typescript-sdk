// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeStatInfoResponseBodyData extends $dara.Model {
  totalDeviceLicenseCount?: number;
  usedDeviceLicenseCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalDeviceLicenseCount: 'TotalDeviceLicenseCount',
      usedDeviceLicenseCount: 'UsedDeviceLicenseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDeviceLicenseCount: 'number',
      usedDeviceLicenseCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeStatInfoResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeEdgeStatInfoResponseBodyData;
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
      data: DescribeEdgeStatInfoResponseBodyData,
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

