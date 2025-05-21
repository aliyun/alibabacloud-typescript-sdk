// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcsResponseBodyVpcs } from "./DescribeVpcsResponseBodyVpcs";


export class DescribeVpcsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78BDC895-F7C0-5961-92BE-F1C3D12B4BB5
   */
  requestId?: string;
  /**
   * @remarks
   * The queried VPCs.
   */
  vpcs?: DescribeVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: DescribeVpcsResponseBodyVpcs,
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

