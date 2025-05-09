// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutesResponseBodyPagingInfoRouteList extends $dara.Model {
  /**
   * @remarks
   * The creation time, which is a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @remarks
   * Route destination CIDR
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @remarks
   * Route ID
   * 
   * @example
   * 1000
   */
  id?: number;
  /**
   * @remarks
   * Network Resource ID
   * 
   * @example
   * 1000
   */
  networkId?: number;
  /**
   * @remarks
   * Unique identifier of the resource group to which it belongs
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Unique identifier of network resource
   * 
   * @example
   * ns-679XXXXXX
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      destinationCidr: 'DestinationCidr',
      id: 'Id',
      networkId: 'NetworkId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      destinationCidr: 'string',
      id: 'number',
      networkId: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

