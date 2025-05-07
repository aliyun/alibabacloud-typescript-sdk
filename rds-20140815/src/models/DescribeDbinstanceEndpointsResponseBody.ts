// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEndpointsResponseBodyData } from "./DescribeDbinstanceEndpointsResponseBodyData";


export class DescribeDBInstanceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDBInstanceEndpointsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 777C4593-8053-427B-****105593277CAB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceEndpointsResponseBodyData,
      requestId: 'string',
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

