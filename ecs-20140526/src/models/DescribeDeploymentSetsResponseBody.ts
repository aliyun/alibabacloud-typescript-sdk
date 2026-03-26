// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity extends $dara.Model {
  availableAmount?: number;
  usedAmount?: number;
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
  accountId?: number;
  capacities?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities;
  creationTime?: string;
  deploymentSetDescription?: string;
  deploymentSetId?: string;
  deploymentSetName?: string;
  deploymentStrategy?: string;
  domain?: string;
  granularity?: string;
  groupCount?: number;
  instanceAmount?: number;
  instanceIds?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds;
  strategy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
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
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
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
      type: 'string',
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

