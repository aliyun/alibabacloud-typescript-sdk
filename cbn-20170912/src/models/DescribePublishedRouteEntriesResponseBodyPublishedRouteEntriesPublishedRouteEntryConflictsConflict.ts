// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the conflicting route.
   * 
   * @example
   * 192.168.20.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the peer network instance on which conflicting routes are found.
   * 
   * @example
   * ccn-0q3b7oviikmm9h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the peer network instance on which the conflicting routes are found. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * 
   * @example
   * CCN
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the region where the peer network instance on which the conflicting routes are found is deployed.
   * 
   * @example
   * ccn-cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The cause of the route confliction. Valid values:
   * 
   * *   **conflict**: The routes have the same destination CIDR block.
   * *   **overflow**: The number of routes in the route table configured on another network instance has reached the upper limit.
   * 
   * @example
   * conflict
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

