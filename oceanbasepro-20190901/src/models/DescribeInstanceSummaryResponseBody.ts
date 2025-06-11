// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSummaryResponseBodyInstanceSummary } from "./DescribeInstanceSummaryResponseBodyInstanceSummary";


export class DescribeInstanceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The overview information about OceanBase instances.
   */
  instanceSummary?: DescribeInstanceSummaryResponseBodyInstanceSummary;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSummary: 'InstanceSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSummary: DescribeInstanceSummaryResponseBodyInstanceSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceSummary && typeof (this.instanceSummary as any).validate === 'function') {
      (this.instanceSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

