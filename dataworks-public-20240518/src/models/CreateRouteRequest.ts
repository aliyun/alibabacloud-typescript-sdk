// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of the destination-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  networkId?: number;
  /**
   * @remarks
   * Unique identifier of the serverless resource group.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      networkId: 'NetworkId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      networkId: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

