// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvironmentRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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

export class CreateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Default value: zh.
   * 
   * Valid values:
   * *   en: English
   * *   zh: Chinese
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c6e9dec475dca4a50a188411d8cbxxx
   */
  bindResourceId?: string;
  /**
   * @remarks
   * The name of the environment.
   * 
   * This parameter is required.
   * 
   * @example
   * env1
   */
  environmentName?: string;
  /**
   * @remarks
   * The subtype of the environment. Valid values:
   * 
   * *   CS: Container Service for Kubernetes (ACK) or Distributed Cloud Container Platform for Kubernetes (ACK One)
   * *   ECS: ECS
   * *   Cloud: cloud service
   * 
   * This parameter is required.
   * 
   * @example
   * ECS, ACK, etc.
   */
  environmentSubType?: string;
  /**
   * @remarks
   * The type of the environment. Valid values:
   * 
   * *   CS: Container Service
   * *   ECS: Elastic Compute Service
   * *   Cloud: cloud service
   * 
   * This parameter is required.
   * 
   * @example
   * CS
   */
  environmentType?: string;
  /**
   * @remarks
   * The payable resource plan.
   * 
   * *   If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
   * *   Otherwise, leave the parameter empty.
   * 
   * @example
   * CS_Basic
   */
  feePackage?: string;
  /**
   * @remarks
   * The ID of the Grafana workspace associated with the environment. If this parameter is left empty, the default shared Grafana workspace is used.
   * 
   * @example
   * grafana-rnglkcdrntlhk0****
   * 
   * **if can be null:**
   * true
   */
  grafanaWorkspaceId?: string;
  /**
   * @remarks
   * Specifies whether to initialize the environment.
   * 
   * @example
   * false
   */
  initEnvironment?: boolean;
  /**
   * @remarks
   * Specifies whether agents or exporters are managed. Valid values:
   * 
   * *   none: No. By default, no managed agents or exporters are provided for ACK clusters.
   * *   agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
   * *   agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
   * 
   * @example
   * none
   */
  managedType?: string;
  /**
   * @remarks
   * The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation.
   * 
   * @example
   * c6e9dec475dca4a50a188411d8cbxxx
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   * 
   * **if can be null:**
   * true
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the instance. You can specify this parameter to manage tags for the instance.
   */
  tags?: CreateEnvironmentRequestTags[];
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      bindResourceId: 'BindResourceId',
      environmentName: 'EnvironmentName',
      environmentSubType: 'EnvironmentSubType',
      environmentType: 'EnvironmentType',
      feePackage: 'FeePackage',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      initEnvironment: 'InitEnvironment',
      managedType: 'ManagedType',
      prometheusInstanceId: 'PrometheusInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      bindResourceId: 'string',
      environmentName: 'string',
      environmentSubType: 'string',
      environmentType: 'string',
      feePackage: 'string',
      grafanaWorkspaceId: 'string',
      initEnvironment: 'boolean',
      managedType: 'string',
      prometheusInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateEnvironmentRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

