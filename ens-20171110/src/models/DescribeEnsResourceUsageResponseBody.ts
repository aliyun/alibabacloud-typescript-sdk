// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsResourceUsageResponseBodyEnsResourceUsage } from "./DescribeEnsResourceUsageResponseBodyEnsResourceUsage";


export class DescribeEnsResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource usage data.
   */
  ensResourceUsage?: DescribeEnsResourceUsageResponseBodyEnsResourceUsage[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E	 Request ID.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ensResourceUsage: 'EnsResourceUsage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensResourceUsage: { 'type': 'array', 'itemType': DescribeEnsResourceUsageResponseBodyEnsResourceUsage },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensResourceUsage)) {
      $dara.Model.validateArray(this.ensResourceUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

