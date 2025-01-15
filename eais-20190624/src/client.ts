// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateEaiRequestTag extends $dara.Model {
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

export class CreateEaiEciRequestEciContainer extends $dara.Model {
  /**
   * @example
   * 100
   */
  arg?: string;
  /**
   * @example
   * sleep
   */
  command?: string;
  /**
   * @example
   * nginx
   */
  image?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * /mnt/eais=eais,/models=eais/models
   */
  volumes?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      command: 'Command',
      image: 'Image',
      name: 'Name',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      command: 'string',
      image: 'string',
      name: 'string',
      volumes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequestEci extends $dara.Model {
  container?: CreateEaiEciRequestEciContainer;
  /**
   * @example
   * eip-uf66jeqopgqa9hdn****
   */
  eipId?: string;
  /**
   * @example
   * test-nginx
   */
  name?: string;
  /**
   * @example
   * ecs.c5.xlarge
   */
  type?: string;
  /**
   * @example
   * 00c7****-rivj.cn-hangzhou.extreme.nas.aliyuncs.com:/share
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      eipId: 'EipId',
      name: 'Name',
      type: 'Type',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: CreateEaiEciRequestEciContainer,
      eipId: 'string',
      name: 'string',
      type: 'string',
      volume: 'string',
    };
  }

  validate() {
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequestTag extends $dara.Model {
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

export class CreateEaiEciShrinkRequestTag extends $dara.Model {
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

export class CreateEaiEcsRequestEcs extends $dara.Model {
  /**
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthIn?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthOut?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @example
   * ecs.g7.4xlarge
   */
  type?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      password: 'Password',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      internetMaxBandwidthIn: 'string',
      internetMaxBandwidthOut: 'string',
      name: 'string',
      password: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      type: 'string',
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

export class CreateEaiEcsRequestTag extends $dara.Model {
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

export class CreateEaiEcsShrinkRequestTag extends $dara.Model {
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

export class CreateEaiJupyterRequestEnvironmentVar extends $dara.Model {
  /**
   * @example
   * MY_USER_NAME
   */
  key?: string;
  /**
   * @example
   * test123
   */
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

export class CreateEaiJupyterRequestTag extends $dara.Model {
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

export class CreateEaiJupyterShrinkRequestTag extends $dara.Model {
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

export class CreateEaisEiRequestTag extends $dara.Model {
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

export class DescribeEaisRequestTag extends $dara.Model {
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

export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  localName?: string;
  /**
   * @example
   * eais.cn-shenzhen.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBodyPodMetricsMetrics extends $dara.Model {
  /**
   * @example
   * 1669107528450
   */
  time?: string;
  /**
   * @example
   * 4.536552540058814
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
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

export class GetInstanceMetricsResponseBodyPodMetrics extends $dara.Model {
  metrics?: GetInstanceMetricsResponseBodyPodMetricsMetrics[];
  /**
   * @remarks
   * Pod ID。
   * 
   * @example
   * eais-hznzre6ffmz9num4****-579b587ddf-9txr6
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetricsMetrics },
      podId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @example
   * eais-hzs4h26yyt5xkcke****
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
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

export class StartEaiJupyterResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * eais:StartEaiJupyter
   */
  authAction?: string;
  /**
   * @example
   * 20560152949032****
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 170718266783****
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFmfh3BZn4dwUQyNzY4MDVELTgzQkUtNTBEOC04QjQyLTNGM0U1QUI5MjhBRA==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ExplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaiJupyterResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * eais:StopEaiJupyter
   */
  authAction?: string;
  /**
   * @example
   * 20560152949032****
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 170718266783****
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFmj0FOZo9BTjMyQTFDRkIzLUE5MTItNUIwNC1BQzkxLTcyMUFFQTUyQjhGQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ExplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
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

export class AttachEaiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-wz93g6pyat2g7t7o****
   */
  clientInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaiResponseBody extends $dara.Model {
  /**
   * @example
   * i-wz93g6pyat2g7t7o****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC84474
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachEaiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaisEiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp14ws9hbt1oe0u9****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  eiInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      eiInstanceId: 'EiInstanceId',
      eiInstanceType: 'EiInstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      eiInstanceId: 'string',
      eiInstanceType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * i-bp14ws9hbt1oe0u9****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      eiInstanceId: 'EiInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      eiInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaisEiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachEaisEiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachEaisEiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzs4h26yyt5xkcke****
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  image?: string;
  /**
   * @example
   * eais-test01
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiRequestTag[];
  /**
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      image: 'Image',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      image: 'string',
      instanceName: 'string',
      instanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiRequestTag },
      vSwitchId: 'string',
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

export class CreateEaiResponseBody extends $dara.Model {
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * A655AB0E-31BB-45AD-9255-FCE93F6*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEaiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  eci?: CreateEaiEciRequestEci;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiEciRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      eci: 'Eci',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      eci: CreateEaiEciRequestEci,
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiEciRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.eci && typeof (this.eci as any).validate === 'function') {
      (this.eci as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciShrinkRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  eciShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiEciShrinkRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      eciShrink: 'Eci',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      eciShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiEciShrinkRequestTag },
      vSwitchId: 'string',
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

export class CreateEaiEciResponseBody extends $dara.Model {
  /**
   * @example
   * eci-2zeh03ygxlrzmfi6****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiEciResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEaiEciResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  ecs?: CreateEaiEcsRequestEcs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiEcsRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      ecs: 'Ecs',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      ecs: CreateEaiEcsRequestEcs,
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiEcsRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.ecs && typeof (this.ecs as any).validate === 'function') {
      (this.ecs as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  ecsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiEcsShrinkRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      ecsShrink: 'Ecs',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      ecsShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiEcsShrinkRequestTag },
      vSwitchId: 'string',
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

export class CreateEaiEcsResponseBody extends $dara.Model {
  /**
   * @example
   * i-bp1hjrvleawl4ogb****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiEcsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEaiEcsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  environmentVar?: CreateEaiJupyterRequestEnvironmentVar[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiJupyterRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      environmentVar: 'EnvironmentVar',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      environmentVar: { 'type': 'array', 'itemType': CreateEaiJupyterRequestEnvironmentVar },
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiJupyterRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environmentVar)) {
      $dara.Model.validateArray(this.environmentVar);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterShrinkRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  environmentVarShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiJupyterShrinkRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      environmentVarShrink: 'EnvironmentVar',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      environmentVarShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiJupyterShrinkRequestTag },
      vSwitchId: 'string',
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

export class CreateEaiJupyterResponseBody extends $dara.Model {
  /**
   * @example
   * eais-hz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * A655AB0E-31BB-45AD-9255-FCE93F6*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiJupyterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEaiJupyterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaisEiRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * test_ei
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-bp16jgp51ttnkbdr****
   */
  securityGroupId?: string;
  tag?: CreateEaisEiRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp17wmd1wb6fwlimk****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceName: 'string',
      instanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaisEiRequestTag },
      vSwitchId: 'string',
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

export class CreateEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaisEiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaisEiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEaisEiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      force: 'Force',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      force: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiResponseBody extends $dara.Model {
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-0269270*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEaiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiAllRequest extends $dara.Model {
  /**
   * @example
   * i-bp1fvhi60e1zizsp****
   */
  clientInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hza1ahi0uuw0re33****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiAllResponseBody extends $dara.Model {
  /**
   * @example
   * AD4EA714-A35B-4710-BF92-8275BCDDB69F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiAllResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEaiAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEaiAllResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaisEiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      force: 'Force',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      force: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaisEiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEaisEiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEaisEiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisRequest extends $dara.Model {
  clientInstanceId?: string;
  /**
   * @example
   * ["eais-id1", "eais-id2"]
   */
  elasticAcceleratedInstanceIds?: string;
  /**
   * @example
   * eais*
   */
  instanceName?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * InUse
   */
  status?: string;
  tag?: DescribeEaisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceIds: 'ElasticAcceleratedInstanceIds',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceIds: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeEaisRequestTag },
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

export class DescribeEaisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEaisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEaisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF1840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaiResponseBody extends $dara.Model {
  /**
   * @example
   * 04DEB304-2436-4CB9-BB63-468BCEA03D9D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachEaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachEaiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaisEiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * 04DEB304-2436-4CB9-BB63-468BCEA0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaisEiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachEaisEiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachEaisEiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsRequest extends $dara.Model {
  /**
   * @example
   * 2022-11-22T16:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hznzre6ffmz9num4****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MemoryUsage
   */
  metricType?: string;
  regionId?: string;
  /**
   * @example
   * 2022-11-22T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 5m
   */
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metricType: 'MetricType',
      regionId: 'RegionId',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      metricType: 'string',
      regionId: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * eais-bj8b53it29hfhj******
   */
  instanceId?: string;
  podMetrics?: GetInstanceMetricsResponseBodyPodMetrics[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      podMetrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podMetrics)) {
      $dara.Model.validateArray(this.podMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4884
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4885
   */
  nextToken?: string;
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaiJupyterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hze3x2gv9wimdj0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaiJupyterResponseBody extends $dara.Model {
  accessDeniedDetail?: StartEaiJupyterResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 04DEB304-2436-4CB9-BB63-468BCEA0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: StartEaiJupyterResponseBodyAccessDeniedDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaiJupyterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartEaiJupyterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartEaiJupyterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaisEiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaisEiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartEaisEiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartEaisEiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaiJupyterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hze3x2gv9wimdj0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaiJupyterResponseBody extends $dara.Model {
  accessDeniedDetail?: StopEaiJupyterResponseBodyAccessDeniedDetail;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: StopEaiJupyterResponseBodyAccessDeniedDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaiJupyterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopEaiJupyterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopEaiJupyterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaisEiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaisEiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopEaisEiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopEaisEiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 1E23D585-BBD8-436F-9615-54CACD67****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "eais.aliyuncs.com",
      'ap-northeast-2-pop': "eais.aliyuncs.com",
      'ap-south-1': "eais.aliyuncs.com",
      'ap-southeast-1': "eais.aliyuncs.com",
      'ap-southeast-2': "eais.aliyuncs.com",
      'ap-southeast-3': "eais.aliyuncs.com",
      'ap-southeast-5': "eais.aliyuncs.com",
      'cn-beijing-finance-1': "eais.aliyuncs.com",
      'cn-beijing-finance-pop': "eais.aliyuncs.com",
      'cn-beijing-gov-1': "eais.aliyuncs.com",
      'cn-beijing-nu16-b01': "eais.aliyuncs.com",
      'cn-edge-1': "eais.aliyuncs.com",
      'cn-fujian': "eais.aliyuncs.com",
      'cn-haidian-cm12-c01': "eais.aliyuncs.com",
      'cn-hangzhou-bj-b01': "eais.aliyuncs.com",
      'cn-hangzhou-finance': "eais.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "eais.aliyuncs.com",
      'cn-hangzhou-test-306': "eais.aliyuncs.com",
      'cn-hongkong': "eais.aliyuncs.com",
      'cn-hongkong-finance-pop': "eais.aliyuncs.com",
      'cn-huhehaote': "eais.aliyuncs.com",
      'cn-huhehaote-nebula-1': "eais.aliyuncs.com",
      'cn-north-2-gov-1': "eais.aliyuncs.com",
      'cn-qingdao': "eais.aliyuncs.com",
      'cn-qingdao-nebula': "eais.aliyuncs.com",
      'cn-shanghai-et15-b01': "eais.aliyuncs.com",
      'cn-shanghai-et2-b01': "eais.aliyuncs.com",
      'cn-shanghai-finance-1': "eais.aliyuncs.com",
      'cn-shanghai-inner': "eais.aliyuncs.com",
      'cn-shanghai-internal-test-1': "eais.aliyuncs.com",
      'cn-shenzhen-finance-1': "eais.aliyuncs.com",
      'cn-shenzhen-inner': "eais.aliyuncs.com",
      'cn-shenzhen-st4-d01': "eais.aliyuncs.com",
      'cn-shenzhen-su18-b01': "eais.aliyuncs.com",
      'cn-wuhan': "eais.aliyuncs.com",
      'cn-wulanchabu': "eais.aliyuncs.com",
      'cn-yushanfang': "eais.aliyuncs.com",
      'cn-zhangbei': "eais.aliyuncs.com",
      'cn-zhangbei-na61-b01': "eais.aliyuncs.com",
      'cn-zhangjiakou': "eais.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "eais.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "eais.aliyuncs.com",
      'eu-central-1': "eais.aliyuncs.com",
      'eu-west-1': "eais.aliyuncs.com",
      'eu-west-1-oxs': "eais.aliyuncs.com",
      'me-east-1': "eais.aliyuncs.com",
      'rus-west-1-pop': "eais.aliyuncs.com",
      'us-east-1': "eais.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eais", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 将弹性加速计算实例挂载到ECS实例上
   * 
   * @param request - AttachEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEaiResponse
   */
  async attachEaiWithOptions(request: AttachEaiRequest, runtime: $dara.RuntimeOptions): Promise<AttachEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AttachEaiResponse>(await this.callApi(params, req, runtime), new AttachEaiResponse({}));
  }

  /**
   * 将弹性加速计算实例挂载到ECS实例上
   * 
   * @param request - AttachEaiRequest
   * @returns AttachEaiResponse
   */
  async attachEai(request: AttachEaiRequest): Promise<AttachEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEaiWithOptions(request, runtime);
  }

  /**
   * 将EI绑定到ECS或ECI实例上
   * 
   * @param request - AttachEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEaisEiResponse
   */
  async attachEaisEiWithOptions(request: AttachEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<AttachEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.eiInstanceType)) {
      query["EiInstanceType"] = request.eiInstanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AttachEaisEiResponse>(await this.callApi(params, req, runtime), new AttachEaisEiResponse({}));
  }

  /**
   * 将EI绑定到ECS或ECI实例上
   * 
   * @param request - AttachEaisEiRequest
   * @returns AttachEaisEiResponse
   */
  async attachEaisEi(request: AttachEaisEiRequest): Promise<AttachEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEaisEiWithOptions(request, runtime);
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiResponse
   */
  async createEaiWithOptions(request: CreateEaiRequest, runtime: $dara.RuntimeOptions): Promise<CreateEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateEaiResponse>(await this.callApi(params, req, runtime), new CreateEaiResponse({}));
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaiRequest
   * @returns CreateEaiResponse
   */
  async createEai(request: CreateEaiRequest): Promise<CreateEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS实例和ECI实例并绑定
   * 
   * @param tmpReq - CreateEaiEciRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiEciResponse
   */
  async createEaiEciWithOptions(tmpReq: CreateEaiEciRequest, runtime: $dara.RuntimeOptions): Promise<CreateEaiEciResponse> {
    tmpReq.validate();
    let request = new CreateEaiEciShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eci)) {
      request.eciShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eci, "Eci", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!$dara.isNull(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!$dara.isNull(request.eciShrink)) {
      query["Eci"] = request.eciShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaiEci",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateEaiEciResponse>(await this.callApi(params, req, runtime), new CreateEaiEciResponse({}));
  }

  /**
   * 创建一个EAIS实例和ECI实例并绑定
   * 
   * @param request - CreateEaiEciRequest
   * @returns CreateEaiEciResponse
   */
  async createEaiEci(request: CreateEaiEciRequest): Promise<CreateEaiEciResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiEciWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS实例和ECS实例并绑定
   * 
   * @param tmpReq - CreateEaiEcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiEcsResponse
   */
  async createEaiEcsWithOptions(tmpReq: CreateEaiEcsRequest, runtime: $dara.RuntimeOptions): Promise<CreateEaiEcsResponse> {
    tmpReq.validate();
    let request = new CreateEaiEcsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecs)) {
      request.ecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecs, "Ecs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!$dara.isNull(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!$dara.isNull(request.ecsShrink)) {
      query["Ecs"] = request.ecsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaiEcs",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateEaiEcsResponse>(await this.callApi(params, req, runtime), new CreateEaiEcsResponse({}));
  }

  /**
   * 创建一个EAIS实例和ECS实例并绑定
   * 
   * @param request - CreateEaiEcsRequest
   * @returns CreateEaiEcsResponse
   */
  async createEaiEcs(request: CreateEaiEcsRequest): Promise<CreateEaiEcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiEcsWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS Jupyter环境
   * 
   * @param tmpReq - CreateEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiJupyterResponse
   */
  async createEaiJupyterWithOptions(tmpReq: CreateEaiJupyterRequest, runtime: $dara.RuntimeOptions): Promise<CreateEaiJupyterResponse> {
    tmpReq.validate();
    let request = new CreateEaiJupyterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.environmentVar)) {
      request.environmentVarShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.environmentVar, "EnvironmentVar", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!$dara.isNull(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!$dara.isNull(request.environmentVarShrink)) {
      query["EnvironmentVar"] = request.environmentVarShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateEaiJupyterResponse>(await this.callApi(params, req, runtime), new CreateEaiJupyterResponse({}));
  }

  /**
   * 创建一个EAIS Jupyter环境
   * 
   * @param request - CreateEaiJupyterRequest
   * @returns CreateEaiJupyterResponse
   */
  async createEaiJupyter(request: CreateEaiJupyterRequest): Promise<CreateEaiJupyterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaisEiResponse
   */
  async createEaisEiWithOptions(request: CreateEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<CreateEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateEaisEiResponse>(await this.callApi(params, req, runtime), new CreateEaisEiResponse({}));
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaisEiRequest
   * @returns CreateEaisEiResponse
   */
  async createEaisEi(request: CreateEaisEiRequest): Promise<CreateEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEaisEiWithOptions(request, runtime);
  }

  /**
   * 释放一个弹性加速计算实例
   * 
   * @param request - DeleteEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaiResponse
   */
  async deleteEaiWithOptions(request: DeleteEaiRequest, runtime: $dara.RuntimeOptions): Promise<DeleteEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteEaiResponse>(await this.callApi(params, req, runtime), new DeleteEaiResponse({}));
  }

  /**
   * 释放一个弹性加速计算实例
   * 
   * @param request - DeleteEaiRequest
   * @returns DeleteEaiResponse
   */
  async deleteEai(request: DeleteEaiRequest): Promise<DeleteEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEaiWithOptions(request, runtime);
  }

  /**
   * 释放一个弹性加速计算实例以及与其绑定的ECS或ECI实例
   * 
   * @param request - DeleteEaiAllRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaiAllResponse
   */
  async deleteEaiAllWithOptions(request: DeleteEaiAllRequest, runtime: $dara.RuntimeOptions): Promise<DeleteEaiAllResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEaiAll",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteEaiAllResponse>(await this.callApi(params, req, runtime), new DeleteEaiAllResponse({}));
  }

  /**
   * 释放一个弹性加速计算实例以及与其绑定的ECS或ECI实例
   * 
   * @param request - DeleteEaiAllRequest
   * @returns DeleteEaiAllResponse
   */
  async deleteEaiAll(request: DeleteEaiAllRequest): Promise<DeleteEaiAllResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEaiAllWithOptions(request, runtime);
  }

  /**
   * 释放弹性加速计算实例
   * 
   * @param request - DeleteEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaisEiResponse
   */
  async deleteEaisEiWithOptions(request: DeleteEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<DeleteEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteEaisEiResponse>(await this.callApi(params, req, runtime), new DeleteEaisEiResponse({}));
  }

  /**
   * 释放弹性加速计算实例
   * 
   * @param request - DeleteEaisEiRequest
   * @returns DeleteEaisEiResponse
   */
  async deleteEaisEi(request: DeleteEaisEiRequest): Promise<DeleteEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEaisEiWithOptions(request, runtime);
  }

  /**
   * 查询一个或多个弹性加速计算实例的详细信息
   * 
   * @param request - DescribeEaisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEaisResponse
   */
  async describeEaisWithOptions(request: DescribeEaisRequest, runtime: $dara.RuntimeOptions): Promise<DescribeEaisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!$dara.isNull(request.elasticAcceleratedInstanceIds)) {
      query["ElasticAcceleratedInstanceIds"] = request.elasticAcceleratedInstanceIds;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEais",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeEaisResponse>(await this.callApi(params, req, runtime), new DescribeEaisResponse({}));
  }

  /**
   * 查询一个或多个弹性加速计算实例的详细信息
   * 
   * @param request - DescribeEaisRequest
   * @returns DescribeEaisResponse
   */
  async describeEais(request: DescribeEaisRequest): Promise<DescribeEaisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEaisWithOptions(request, runtime);
  }

  /**
   * 查询您可以使用的阿里云地域
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * 查询您可以使用的阿里云地域
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * 从ECS实例上卸载弹性加速计算实例
   * 
   * @param request - DetachEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEaiResponse
   */
  async detachEaiWithOptions(request: DetachEaiRequest, runtime: $dara.RuntimeOptions): Promise<DetachEaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DetachEaiResponse>(await this.callApi(params, req, runtime), new DetachEaiResponse({}));
  }

  /**
   * 从ECS实例上卸载弹性加速计算实例
   * 
   * @param request - DetachEaiRequest
   * @returns DetachEaiResponse
   */
  async detachEai(request: DetachEaiRequest): Promise<DetachEaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachEaiWithOptions(request, runtime);
  }

  /**
   * 将EI实例与ECS或ECI实例解绑
   * 
   * @param request - DetachEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEaisEiResponse
   */
  async detachEaisEiWithOptions(request: DetachEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<DetachEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DetachEaisEiResponse>(await this.callApi(params, req, runtime), new DetachEaisEiResponse({}));
  }

  /**
   * 将EI实例与ECS或ECI实例解绑
   * 
   * @param request - DetachEaisEiRequest
   * @returns DetachEaisEiResponse
   */
  async detachEaisEi(request: DetachEaisEiRequest): Promise<DetachEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachEaisEiWithOptions(request, runtime);
  }

  /**
   * 获取EAIS实例级别的监控数据
   * 
   * @param request - GetInstanceMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetricsWithOptions(request: GetInstanceMetricsRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceMetrics",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceMetricsResponse>(await this.callApi(params, req, runtime), new GetInstanceMetricsResponse({}));
  }

  /**
   * 获取EAIS实例级别的监控数据
   * 
   * @param request - GetInstanceMetricsRequest
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetrics(request: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceMetricsWithOptions(request, runtime);
  }

  /**
   * 查询标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查询标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 启动一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StartEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEaiJupyterResponse
   */
  async startEaiJupyterWithOptions(request: StartEaiJupyterRequest, runtime: $dara.RuntimeOptions): Promise<StartEaiJupyterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartEaiJupyterResponse>(await this.callApi(params, req, runtime), new StartEaiJupyterResponse({}));
  }

  /**
   * 启动一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StartEaiJupyterRequest
   * @returns StartEaiJupyterResponse
   */
  async startEaiJupyter(request: StartEaiJupyterRequest): Promise<StartEaiJupyterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 启动一个弹性加速计算实例
   * 
   * @param request - StartEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEaisEiResponse
   */
  async startEaisEiWithOptions(request: StartEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<StartEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartEaisEiResponse>(await this.callApi(params, req, runtime), new StartEaisEiResponse({}));
  }

  /**
   * 启动一个弹性加速计算实例
   * 
   * @param request - StartEaisEiRequest
   * @returns StartEaisEiResponse
   */
  async startEaisEi(request: StartEaisEiRequest): Promise<StartEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startEaisEiWithOptions(request, runtime);
  }

  /**
   * 停止一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StopEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopEaiJupyterResponse
   */
  async stopEaiJupyterWithOptions(request: StopEaiJupyterRequest, runtime: $dara.RuntimeOptions): Promise<StopEaiJupyterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopEaiJupyterResponse>(await this.callApi(params, req, runtime), new StopEaiJupyterResponse({}));
  }

  /**
   * 停止一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StopEaiJupyterRequest
   * @returns StopEaiJupyterResponse
   */
  async stopEaiJupyter(request: StopEaiJupyterRequest): Promise<StopEaiJupyterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 停止一个弹性加速计算实例
   * 
   * @param request - StopEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopEaisEiResponse
   */
  async stopEaisEiWithOptions(request: StopEaisEiRequest, runtime: $dara.RuntimeOptions): Promise<StopEaisEiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopEaisEiResponse>(await this.callApi(params, req, runtime), new StopEaisEiResponse({}));
  }

  /**
   * 停止一个弹性加速计算实例
   * 
   * @param request - StopEaisEiRequest
   * @returns StopEaisEiResponse
   */
  async stopEaisEi(request: StopEaisEiRequest): Promise<StopEaisEiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopEaisEiWithOptions(request, runtime);
  }

  /**
   * 为弹性加速计算实例创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 为弹性加速计算实例创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 解绑并删除标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * 解绑并删除标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
