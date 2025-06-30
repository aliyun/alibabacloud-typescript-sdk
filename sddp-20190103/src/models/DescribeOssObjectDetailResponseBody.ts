// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssObjectDetailResponseBodyOssObjectDetail } from "./DescribeOssObjectDetailResponseBodyOssObjectDetail";


export class DescribeOssObjectDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the OSS object.
   */
  ossObjectDetail?: DescribeOssObjectDetailResponseBodyOssObjectDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossObjectDetail: 'OssObjectDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectDetail: DescribeOssObjectDetailResponseBodyOssObjectDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ossObjectDetail && typeof (this.ossObjectDetail as any).validate === 'function') {
      (this.ossObjectDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

