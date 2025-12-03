// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEaisResponseBodyInstancesInstanceTagsTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeEaisResponseBodyInstancesInstanceTags extends $dara.Model {
  tag?: DescribeEaisResponseBodyInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeEaisResponseBodyInstancesInstanceTagsTag },
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

export class DescribeEaisResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @example
   * jupyter
   */
  category?: string;
  /**
   * @example
   * i-wz93g6pyat2g****
   */
  clientInstanceId?: string;
  /**
   * @example
   * test1
   */
  clientInstanceName?: string;
  /**
   * @example
   * ecs.g5ne.large
   */
  clientInstanceType?: string;
  /**
   * @example
   * 2020-11-11T03:11Z
   */
  creationTime?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * eais-sz8t15a7gt7****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * testName
   */
  instanceName?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @example
   * http://121.41.**.24:8888
   */
  jupyterUrl?: string;
  paymentType?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * sg-bp1gppir818lx4******
   */
  securityGroupId?: string;
  startTime?: string;
  /**
   * @example
   * InUse
   */
  status?: string;
  tags?: DescribeEaisResponseBodyInstancesInstanceTags;
  /**
   * @example
   * vsw-bp1sd131hfmd76r******
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientInstanceId: 'ClientInstanceId',
      clientInstanceName: 'ClientInstanceName',
      clientInstanceType: 'ClientInstanceType',
      creationTime: 'CreationTime',
      description: 'Description',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      jupyterUrl: 'JupyterUrl',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientInstanceId: 'string',
      clientInstanceName: 'string',
      clientInstanceType: 'string',
      creationTime: 'string',
      description: 'string',
      elasticAcceleratedInstanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      jupyterUrl: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      startTime: 'string',
      status: 'string',
      tags: DescribeEaisResponseBodyInstancesInstanceTags,
      vSwitchId: 'string',
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

export class DescribeEaisResponseBodyInstances extends $dara.Model {
  instance?: DescribeEaisResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeEaisResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBody extends $dara.Model {
  instances?: DescribeEaisResponseBodyInstances;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1E23D585-BBD8-436F-9615-54CACD6*****
   */
  requestId?: string;
  /**
   * @example
   * 1
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
      instances: DescribeEaisResponseBodyInstances,
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

