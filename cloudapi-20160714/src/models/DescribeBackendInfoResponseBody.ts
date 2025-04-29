// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendInfoResponseBodyBackendInfo } from "./DescribeBackendInfoResponseBodyBackendInfo";


export class DescribeBackendInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the backend service.
   */
  backendInfo?: DescribeBackendInfoResponseBodyBackendInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AA90E87-3506-5AA6-AFFB-A4D53B4F6231
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendInfo: 'BackendInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendInfo: DescribeBackendInfoResponseBodyBackendInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backendInfo && typeof (this.backendInfo as any).validate === 'function') {
      (this.backendInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

