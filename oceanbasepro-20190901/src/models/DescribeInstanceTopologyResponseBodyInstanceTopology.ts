// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas";
import { DescribeInstanceTopologyResponseBodyInstanceTopologyTenants } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyTenants";
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZones } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZones";


export class DescribeInstanceTopologyResponseBodyInstanceTopology extends $dara.Model {
  /**
   * @remarks
   * The information about replicas.
   */
  replicas?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas[];
  /**
   * @remarks
   * The information about the tenants.
   */
  tenants?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenants[];
  /**
   * @remarks
   * The information about the zones in which the cluster is deployed.
   */
  zones?: DescribeInstanceTopologyResponseBodyInstanceTopologyZones[];
  static names(): { [key: string]: string } {
    return {
      replicas: 'Replicas',
      tenants: 'Tenants',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicas: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas },
      tenants: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyTenants },
      zones: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyZones },
    };
  }

  validate() {
    if(Array.isArray(this.replicas)) {
      $dara.Model.validateArray(this.replicas);
    }
    if(Array.isArray(this.tenants)) {
      $dara.Model.validateArray(this.tenants);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

