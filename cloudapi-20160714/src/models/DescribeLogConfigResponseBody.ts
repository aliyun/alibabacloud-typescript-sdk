// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogConfigResponseBodyLogInfos } from "./DescribeLogConfigResponseBodyLogInfos";


export class DescribeLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Info of the log config.
   */
  logInfos?: DescribeLogConfigResponseBodyLogInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E3BC2706-ABDB-5B64-A12F-08DFD9E3F339
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logInfos: 'LogInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfos: DescribeLogConfigResponseBodyLogInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logInfos && typeof (this.logInfos as any).validate === 'function') {
      (this.logInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

