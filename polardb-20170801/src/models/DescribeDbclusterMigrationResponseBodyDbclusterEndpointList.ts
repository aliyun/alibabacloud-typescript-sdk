// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems } from "./DescribeDbclusterMigrationResponseBodyDbclusterEndpointListAddressItems";


export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointList extends $dara.Model {
  /**
   * @remarks
   * The VPC ID.
   */
  addressItems?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems[];
  /**
   * @remarks
   * The expiration time of the replication between ApsaraDB RDS and PolarDB. The time is in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * pe-***********
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * Cluster
   */
  endpointType?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **RDS2POLARDB**: Data is replicated from an ApsaraDB RDS instance to a PolarDB cluster.
   * *   **POLARDB2RDS**: Data is replicated from a PolarDB cluster to an ApsaraDB RDS instance.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
      readWriteMode: 'ReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems },
      DBEndpointId: 'string',
      endpointType: 'string',
      readWriteMode: 'string',
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

