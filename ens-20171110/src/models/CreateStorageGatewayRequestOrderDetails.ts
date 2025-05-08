// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageGatewayRequestOrderDetails extends $dara.Model {
  /**
   * @remarks
   * The description of the gateway. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-3
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the gateway. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (.), underscores (_), and hyphens (-).
   * 
   * @example
   * testGatewayName
   */
  gatewayName?: string;
  /**
   * @remarks
   * The type of the gateway. Set this parameter to **1**. **1** indicates iSCSI.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  gatewayType?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * n-123
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      gatewayName: 'GatewayName',
      gatewayType: 'GatewayType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ensRegionId: 'string',
      gatewayName: 'string',
      gatewayType: 'string',
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

