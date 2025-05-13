// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogstashResponseBodyResultTags } from "./DescribeLogstashResponseBodyResultTags";
import { DescribeLogstashResponseBodyResultZoneInfos } from "./DescribeLogstashResponseBodyResultZoneInfos";
import { DescribeLogstashResponseBodyResultEndpointList } from "./DescribeLogstashResponseBodyResultEndpointList";
import { DescribeLogstashResponseBodyResultNetworkConfig } from "./DescribeLogstashResponseBodyResultNetworkConfig";
import { DescribeLogstashResponseBodyResultNodeSpec } from "./DescribeLogstashResponseBodyResultNodeSpec";


export class DescribeLogstashResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration information of the node.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The key of the tag.
   */
  tags?: DescribeLogstashResponseBodyResultTags[];
  /**
   * @remarks
   * The status of the zone. Valid values:
   * 
   * *   ISOLATION: offline
   * *   NORMAL
   */
  zoneInfos?: DescribeLogstashResponseBodyResultZoneInfos[];
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   prepaid: subscription
   * *   postpaid: pay-as-you-go
   * 
   * @example
   * {"slowlog.threshold.warn": "2s","slowlog.threshold.info": "1s","slowlog.threshold.debug": "500ms","slowlog.threshold.trace": "100ms" }
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The state of the instance. Four states are supported:
   * 
   * *   Normal: active
   * *   Active: activating
   * *   Freeze: inactive
   * *   Invalid: invalid
   * 
   * @example
   * 2020-02-06T14:12:03.672Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the zone where the node resides.
   */
  endpointList?: DescribeLogstashResponseBodyResultEndpointList[];
  /**
   * @remarks
   * The access information of the node.
   * 
   * @example
   * ls-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   */
  networkConfig?: DescribeLogstashResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The specifications of the node.
   */
  nodeSpec?: DescribeLogstashResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * prepaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the elastic container instances belong.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The edition of the dedicated KMS instance.
   * 
   * @example
   * 2020-02-06T14:22:36.850Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 7.4.0_with_X-Pack
   */
  version?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfigs: 'ExtendConfigs',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      zoneInfos: 'ZoneInfos',
      config: 'config',
      createdAt: 'createdAt',
      description: 'description',
      endpointList: 'endpointList',
      instanceId: 'instanceId',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      status: 'status',
      updatedAt: 'updatedAt',
      version: 'version',
      vpcInstanceId: 'vpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultTags },
      zoneInfos: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultZoneInfos },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      description: 'string',
      endpointList: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultEndpointList },
      instanceId: 'string',
      networkConfig: DescribeLogstashResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: DescribeLogstashResponseBodyResultNodeSpec,
      paymentType: 'string',
      status: 'string',
      updatedAt: 'string',
      version: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zoneInfos)) {
      $dara.Model.validateArray(this.zoneInfos);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(Array.isArray(this.endpointList)) {
      $dara.Model.validateArray(this.endpointList);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

