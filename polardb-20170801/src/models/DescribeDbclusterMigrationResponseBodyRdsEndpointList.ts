// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems } from "./DescribeDbclusterMigrationResponseBodyRdsEndpointListAddressItems";


export class DescribeDBClusterMigrationResponseBodyRdsEndpointList extends $dara.Model {
  /**
   * @remarks
   * The VPC ID.
   */
  addressItems?: DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems[];
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ReadOnly
   * Maxscale
   * Primary
   */
  custinsType?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * rm-************-normal
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Normal**: the standard endpoint
   * - **ReadWriteSplitting**: the read/write splitting endpoint
   * 
   * @example
   * Normal
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      custinsType: 'CustinsType',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems },
      custinsType: 'string',
      DBEndpointId: 'string',
      endpointType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressItems)) {
      $dara.Model.validateArray(this.addressItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

