// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances that can be added to the deployment set within the zone.
   * 
   * @example
   * 18
   */
  availableAmount?: number;
  /**
   * @remarks
   * The number of ECS instances that reside in the zone in the deployment set.
   * 
   * @example
   * 2
   */
  usedAmount?: number;
  /**
   * @remarks
   * The ID of the zone. Only the zone IDs of existing ECS instances in the deployment set are returned.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      usedAmount: 'UsedAmount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      usedAmount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities extends $dara.Model {
  capacity?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: { 'type': 'array', 'itemType': DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity },
    };
  }

  validate() {
    if(Array.isArray(this.capacity)) {
      $dara.Model.validateArray(this.capacity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet extends $dara.Model {
  /**
   * @remarks
   * Details of the capacities of the deployment set. This parameter is valid only when the deployment set contains ECS instances. The value contains information about the capacities of the deployment set in different zones.
   */
  capacities?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities;
  /**
   * @remarks
   * The time when the deployment set was created.
   * 
   * @example
   * 2021-12-07T06:01:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the deployment set.
   * 
   * @example
   * testDeploymentSetDescription
   */
  deploymentSetDescription?: string;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-bp67acfmxazb4ph****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The name of the deployment set.
   * 
   * @example
   * testDeploymentSetName
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The deployment strategy. The return value of this parameter is the value of the `Strategy` request parameter.
   * 
   * @example
   * Availability
   */
  deploymentStrategy?: string;
  /**
   * @remarks
   * The deployment domain.
   * 
   * @example
   * default
   */
  domain?: string;
  /**
   * @remarks
   * The deployment granularity.
   * 
   * @example
   * host
   */
  granularity?: string;
  /**
   * @remarks
   * The number of deployment set groups in the deployment set.
   * 
   * >  This parameter is valid only when the Strategy request parameter is set to AvailabilityGroup.
   * 
   * @example
   * 3
   */
  groupCount?: number;
  /**
   * @remarks
   * The number of instances in the deployment set.
   * 
   * @example
   * 3
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The IDs of the Elastic Compute Service (ECS) instances in the deployment set.
   */
  instanceIds?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds;
  /**
   * @remarks
   * The deployment strategy.
   * 
   * @example
   * LooseDispersion
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      capacities: 'Capacities',
      creationTime: 'CreationTime',
      deploymentSetDescription: 'DeploymentSetDescription',
      deploymentSetId: 'DeploymentSetId',
      deploymentSetName: 'DeploymentSetName',
      deploymentStrategy: 'DeploymentStrategy',
      domain: 'Domain',
      granularity: 'Granularity',
      groupCount: 'GroupCount',
      instanceAmount: 'InstanceAmount',
      instanceIds: 'InstanceIds',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacities: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities,
      creationTime: 'string',
      deploymentSetDescription: 'string',
      deploymentSetId: 'string',
      deploymentSetName: 'string',
      deploymentStrategy: 'string',
      domain: 'string',
      granularity: 'string',
      groupCount: 'number',
      instanceAmount: 'number',
      instanceIds: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds,
      strategy: 'string',
    };
  }

  validate() {
    if(this.capacities && typeof (this.capacities as any).validate === 'function') {
      (this.capacities as any).validate();
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponseBodyDeploymentSets extends $dara.Model {
  deploymentSet?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet[];
  static names(): { [key: string]: string } {
    return {
      deploymentSet: 'DeploymentSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSet: { 'type': 'array', 'itemType': DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet },
    };
  }

  validate() {
    if(Array.isArray(this.deploymentSet)) {
      $dara.Model.validateArray(this.deploymentSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the deployment sets.
   */
  deploymentSets?: DescribeDeploymentSetsResponseBodyDeploymentSets;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried deployment sets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentSets: 'DeploymentSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSets: DescribeDeploymentSetsResponseBodyDeploymentSets,
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.deploymentSets && typeof (this.deploymentSets as any).validate === 'function') {
      (this.deploymentSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

