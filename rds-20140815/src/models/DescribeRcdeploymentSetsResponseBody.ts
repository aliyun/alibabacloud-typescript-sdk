// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of RDS Custom instances that reside in the zone and can be added to the deployment set.
   * 
   * @example
   * 18
   */
  availableAmount?: number;
  /**
   * @remarks
   * The number of RDS Custom instances that reside in the zone in the deployment set.
   * 
   * @example
   * 2
   */
  usedAmount?: number;
  /**
   * @remarks
   * The zone ID. Only the IDs of the zones to which the existing RDS Custom instances in the deployment set belong are returned.
   * 
   * @example
   * cn-hangzhou-j
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

export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities extends $dara.Model {
  capacity?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity },
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

export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds extends $dara.Model {
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

export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag extends $dara.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags extends $dara.Model {
  tag?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet extends $dara.Model {
  /**
   * @remarks
   * The details of the capacities of the deployment set. This parameter is valid only when the deployment set contains existing RDS Custom instances. The value contains the details of the capacities of the deployment set in different zones.
   */
  capacities?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities;
  /**
   * @remarks
   * The time when the deployment set was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2024-06-19T07:15:44Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment set description.
   * 
   * @example
   * test
   */
  deploymentSetDescription?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-ob5n4rbgy****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The deployment set name.
   * 
   * @example
   * deployment_test
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
   * None
   */
  granularity?: string;
  /**
   * @remarks
   * The number of groups in the deployment set.
   * 
   * >  This parameter is valid only when the Strategy request parameter is set to AvailabilityGroup.
   * 
   * @example
   * 3
   */
  groupCount?: number;
  /**
   * @remarks
   * The number of RDS Custom instances in the deployment set.
   * 
   * @example
   * 1
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The ID of the RDS Custom instance in the deployment set.
   */
  instanceIds?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds;
  /**
   * @remarks
   * The deployment strategy.
   * 
   * @example
   * LooseDispersion
   */
  strategy?: string;
  tags?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags;
  static names(): { [key: string]: string } {
    return {
      capacities: 'Capacities',
      createTime: 'CreateTime',
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
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacities: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities,
      createTime: 'string',
      deploymentSetDescription: 'string',
      deploymentSetId: 'string',
      deploymentSetName: 'string',
      deploymentStrategy: 'string',
      domain: 'string',
      granularity: 'string',
      groupCount: 'number',
      instanceAmount: 'number',
      instanceIds: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds,
      strategy: 'string',
      tags: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags,
    };
  }

  validate() {
    if(this.capacities && typeof (this.capacities as any).validate === 'function') {
      (this.capacities as any).validate();
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCDeploymentSetsResponseBodyDeploymentSets extends $dara.Model {
  deploymentSet?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet[];
  static names(): { [key: string]: string } {
    return {
      deploymentSet: 'DeploymentSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSet: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet },
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

export class DescribeRCDeploymentSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the deployment set.
   */
  deploymentSets?: DescribeRCDeploymentSetsResponseBodyDeploymentSets;
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
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
   * 39265F46-EC77-4036-8AC4-F035F32F6BE2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
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
      deploymentSets: DescribeRCDeploymentSetsResponseBodyDeploymentSets,
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

