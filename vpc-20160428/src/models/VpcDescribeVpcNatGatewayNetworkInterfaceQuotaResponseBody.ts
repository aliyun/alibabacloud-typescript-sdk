// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VpcDescribeVpcNatGatewayNetworkInterfaceQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of endpoints that can be created.
   * 
   * @example
   * 2
   */
  quota?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

