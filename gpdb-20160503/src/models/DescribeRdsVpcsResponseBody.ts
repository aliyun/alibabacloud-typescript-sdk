// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsVpcsResponseBodyVpcs } from "./DescribeRdsVpcsResponseBodyVpcs";


export class DescribeRdsVpcsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 53924AF0-1628-5AA2-9C95-D4**********
   */
  requestId?: string;
  /**
   * @remarks
   * The queried VPCs.
   */
  vpcs?: DescribeRdsVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: DescribeRdsVpcsResponseBodyVpcs,
    };
  }

  validate() {
    if(this.vpcs && typeof (this.vpcs as any).validate === 'function') {
      (this.vpcs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

