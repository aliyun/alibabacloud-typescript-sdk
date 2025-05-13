// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceResponseBodyResultClientNodeConfiguration } from "./ListInstanceResponseBodyResultClientNodeConfiguration";
import { ListInstanceResponseBodyResultElasticDataNodeConfiguration } from "./ListInstanceResponseBodyResultElasticDataNodeConfiguration";
import { ListInstanceResponseBodyResultKibanaConfiguration } from "./ListInstanceResponseBodyResultKibanaConfiguration";
import { ListInstanceResponseBodyResultMasterConfiguration } from "./ListInstanceResponseBodyResultMasterConfiguration";
import { ListInstanceResponseBodyResultNetworkConfig } from "./ListInstanceResponseBodyResultNetworkConfig";
import { ListInstanceResponseBodyResultNodeSpec } from "./ListInstanceResponseBodyResultNodeSpec";
import { ListInstanceResponseBodyResultTags } from "./ListInstanceResponseBodyResultTags";


export class ListInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **prepaid**: subscription
   * *   **postpaid**: pay-as-you-go
   * 
   * @example
   * false
   */
  advancedDedicateMaster?: boolean;
  archType?: string;
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   */
  clientNodeConfiguration?: ListInstanceResponseBodyResultClientNodeConfiguration;
  /**
   * @remarks
   * The status of the pay-as-you-go service that is overlaid on a subscription instance. Valid values:
   * 
   * *   **active**: normal
   * *   **closed**: Close
   * *   **indebt**: Overdue payments are frozen
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The edition of the dedicated KMS instance.
   * 
   * @example
   * false
   */
  dedicateMaster?: boolean;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * es-cn-abc
   */
  description?: string;
  domain?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
   */
  elasticDataNodeConfiguration?: ListInstanceResponseBodyResultElasticDataNodeConfiguration;
  endTime?: number;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 6.7_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The configurations of elastic data nodes.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * es-cn-v641a0ta3000g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration of cluster extension parameters.
   * 
   * @example
   * true
   */
  isNewDeployment?: string;
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   */
  kibanaConfiguration?: ListInstanceResponseBodyResultKibanaConfiguration;
  kibanaIPWhitelist?: string[];
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The VPC ID of the cluster.
   */
  masterConfiguration?: ListInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   */
  networkConfig?: ListInstanceResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The VPC ID of the cluster.
   */
  nodeSpec?: ListInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  port?: string;
  /**
   * @remarks
   * The tags of the instance. Each tag is a key-value pair.
   * 
   * @example
   * active
   */
  postpaidServiceStatus?: string;
  privateNetworkIpWhiteList?: string[];
  protocol?: string;
  publicIpWhitelist?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to deploy the new architecture.
   * 
   * @example
   * true
   */
  serviceVpc?: boolean;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The number of nodes.
   */
  tags?: ListInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * Coordination node configuration.
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  /**
   * @example
   * vpc-bp1uag5jj38c****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      archType: 'archType',
      clientNodeConfiguration: 'clientNodeConfiguration',
      createdAt: 'createdAt',
      dedicateMaster: 'dedicateMaster',
      description: 'description',
      domain: 'domain',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      endTime: 'endTime',
      esVersion: 'esVersion',
      extendConfigs: 'extendConfigs',
      instanceId: 'instanceId',
      isNewDeployment: 'isNewDeployment',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      port: 'port',
      postpaidServiceStatus: 'postpaidServiceStatus',
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
      protocol: 'protocol',
      publicIpWhitelist: 'publicIpWhitelist',
      resourceGroupId: 'resourceGroupId',
      serviceVpc: 'serviceVpc',
      status: 'status',
      tags: 'tags',
      updatedAt: 'updatedAt',
      vpcInstanceId: 'vpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      archType: 'string',
      clientNodeConfiguration: ListInstanceResponseBodyResultClientNodeConfiguration,
      createdAt: 'string',
      dedicateMaster: 'boolean',
      description: 'string',
      domain: 'string',
      elasticDataNodeConfiguration: ListInstanceResponseBodyResultElasticDataNodeConfiguration,
      endTime: 'number',
      esVersion: 'string',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      isNewDeployment: 'string',
      kibanaConfiguration: ListInstanceResponseBodyResultKibanaConfiguration,
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      masterConfiguration: ListInstanceResponseBodyResultMasterConfiguration,
      networkConfig: ListInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: ListInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      port: 'string',
      postpaidServiceStatus: 'string',
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
      protocol: 'string',
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      serviceVpc: 'boolean',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyResultTags },
      updatedAt: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    if(this.clientNodeConfiguration && typeof (this.clientNodeConfiguration as any).validate === 'function') {
      (this.clientNodeConfiguration as any).validate();
    }
    if(this.elasticDataNodeConfiguration && typeof (this.elasticDataNodeConfiguration as any).validate === 'function') {
      (this.elasticDataNodeConfiguration as any).validate();
    }
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(Array.isArray(this.kibanaIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaIPWhitelist);
    }
    if(Array.isArray(this.kibanaPrivateIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaPrivateIPWhitelist);
    }
    if(this.masterConfiguration && typeof (this.masterConfiguration as any).validate === 'function') {
      (this.masterConfiguration as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    if(Array.isArray(this.privateNetworkIpWhiteList)) {
      $dara.Model.validateArray(this.privateNetworkIpWhiteList);
    }
    if(Array.isArray(this.publicIpWhitelist)) {
      $dara.Model.validateArray(this.publicIpWhitelist);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

