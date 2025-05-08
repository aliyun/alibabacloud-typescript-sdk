// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * sgw-****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The type of the gateway. Set this parameter to **1**. **1** indicates iSCSI.
   * 
   * @example
   * 1
   */
  gatewayType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * n-***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      gatewayId: 'GatewayId',
      gatewayType: 'GatewayType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      gatewayId: 'string',
      gatewayType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

