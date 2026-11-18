// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstancesTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstancesTags extends $dara.Model {
  tag?: DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstancesTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstancesTagsTag },
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

export class DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstances extends $dara.Model {
  chargeType?: string;
  createTime?: string;
  endTime?: string;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  networkType?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstancesTags;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createTime: 'string',
      endTime: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstancesTags,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairAIGatewayInstancesResponseBodyInstances extends $dara.Model {
  tairSemanticCacheInstances?: DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstances[];
  static names(): { [key: string]: string } {
    return {
      tairSemanticCacheInstances: 'TairSemanticCacheInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tairSemanticCacheInstances: { 'type': 'array', 'itemType': DescribeTairAIGatewayInstancesResponseBodyInstancesTairSemanticCacheInstances },
    };
  }

  validate() {
    if(Array.isArray(this.tairSemanticCacheInstances)) {
      $dara.Model.validateArray(this.tairSemanticCacheInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairAIGatewayInstancesResponseBody extends $dara.Model {
  instances?: DescribeTairAIGatewayInstancesResponseBodyInstances;
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instance records for batch instance creation. This parameter is not returned when a single instance is created.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeTairAIGatewayInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

