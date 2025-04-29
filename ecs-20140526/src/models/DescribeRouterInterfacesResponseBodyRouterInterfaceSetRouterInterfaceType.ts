// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType extends $dara.Model {
  accessPointId?: string;
  businessStatus?: string;
  chargeType?: string;
  connectedTime?: string;
  creationTime?: string;
  description?: string;
  endTime?: string;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  name?: string;
  oppositeAccessPointId?: string;
  oppositeInterfaceBusinessStatus?: string;
  oppositeInterfaceId?: string;
  oppositeInterfaceOwnerId?: string;
  oppositeInterfaceSpec?: string;
  oppositeInterfaceStatus?: string;
  oppositeRegionId?: string;
  oppositeRouterId?: string;
  oppositeRouterType?: string;
  role?: string;
  routerId?: string;
  routerInterfaceId?: string;
  routerType?: string;
  spec?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      connectedTime: 'ConnectedTime',
      creationTime: 'CreationTime',
      description: 'Description',
      endTime: 'EndTime',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      name: 'Name',
      oppositeAccessPointId: 'OppositeAccessPointId',
      oppositeInterfaceBusinessStatus: 'OppositeInterfaceBusinessStatus',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      oppositeInterfaceSpec: 'OppositeInterfaceSpec',
      oppositeInterfaceStatus: 'OppositeInterfaceStatus',
      oppositeRegionId: 'OppositeRegionId',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      role: 'Role',
      routerId: 'RouterId',
      routerInterfaceId: 'RouterInterfaceId',
      routerType: 'RouterType',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      businessStatus: 'string',
      chargeType: 'string',
      connectedTime: 'string',
      creationTime: 'string',
      description: 'string',
      endTime: 'string',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      name: 'string',
      oppositeAccessPointId: 'string',
      oppositeInterfaceBusinessStatus: 'string',
      oppositeInterfaceId: 'string',
      oppositeInterfaceOwnerId: 'string',
      oppositeInterfaceSpec: 'string',
      oppositeInterfaceStatus: 'string',
      oppositeRegionId: 'string',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      role: 'string',
      routerId: 'string',
      routerInterfaceId: 'string',
      routerType: 'string',
      spec: 'string',
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

