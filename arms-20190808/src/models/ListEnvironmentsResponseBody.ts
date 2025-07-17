// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentsResponseBodyDataEnvironmentsAddons extends $dara.Model {
  /**
   * @remarks
   * The alias of the add-on.
   * 
   * @example
   * MySQL Exporter
   */
  alias?: string;
  /**
   * @remarks
   * The description of the add-on.
   * 
   * @example
   * Collect mysql indicator information
   */
  description?: string;
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * http://xxxx
   */
  icon?: string;
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * metric-agent
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyDataEnvironmentsFeatures extends $dara.Model {
  /**
   * @remarks
   * The alias of the feature.
   * 
   * @example
   * Prometheus Agent
   */
  alias?: string;
  /**
   * @remarks
   * The description of the feature.
   * 
   * @example
   * Collect Metric data using the Prometheus collection specification
   */
  description?: string;
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * http://xxx
   */
  icon?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * metirc-agent
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyDataEnvironmentsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * fpx-tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * cn-beijing
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

export class ListEnvironmentsResponseBodyDataEnvironments extends $dara.Model {
  /**
   * @remarks
   * The add-ons.
   */
  addons?: ListEnvironmentsResponseBodyDataEnvironmentsAddons[];
  /**
   * @remarks
   * The ID of the resource bound to the environment instance. The resource can be a Kubernetes cluster or a VPC.
   * 
   * @example
   * vpc-bp1bgo8ronn
   */
  bindResourceId?: string;
  /**
   * @remarks
   * The profile that is bound to the resource.
   * 
   * @example
   * xxx
   */
  bindResourceProfile?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * VPC
   */
  bindResourceType?: string;
  /**
   * @remarks
   * The CIDR block that is bound to the VPC.
   * 
   * @example
   * 172.16.0.0/12
   */
  bindVpcCidr?: string;
  /**
   * @remarks
   * The time when the environment instance was created.
   * 
   * @example
   * 2023-03-24 11:58:35 +0800
   */
  createTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12378523784982
   */
  createdUserId?: string;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The name of the environment instance.
   * 
   * @example
   * feiliks-biz-prod-edas
   */
  environmentName?: string;
  /**
   * @remarks
   * The type of the environment instance. Valid values:
   * 
   * *   CS: Container Service
   * *   ECS: Elastic Compute Service
   * *   Cloud: cloud service
   * 
   * @example
   * CS
   */
  environmentType?: string;
  /**
   * @remarks
   * The parameters of the feature.
   */
  features?: ListEnvironmentsResponseBodyDataEnvironmentsFeatures[];
  /**
   * @remarks
   * The payable resource plan.
   * 
   * *   If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro.
   * *   Otherwise, leave the parameter empty.
   * 
   * @example
   * CS_Pro
   */
  feePackage?: string;
  /**
   * @remarks
   * The unique ID of the Grafana data source.
   * 
   * @example
   * 12374890
   */
  grafanaDatasourceUid?: string;
  /**
   * @remarks
   * The name of the Grafana directory.
   * 
   * @example
   * filepath
   */
  grafanaFolderTitle?: string;
  /**
   * @remarks
   * The unique ID of the Grafana directory.
   * 
   * @example
   * 1798319482935
   */
  grafanaFolderUid?: string;
  /**
   * @remarks
   * The time when the last add-on was created.
   * 
   * @example
   * 2023-09-22T16:56:29+08:00
   */
  latestReleaseCreateTime?: string;
  /**
   * @remarks
   * Indicates whether agents or exporters are managed. Valid values:
   * 
   * *   none: No. By default, no managed agents or exporters are provided for ACK clusters.
   * *   agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
   * *   agent-exproter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
   * 
   * @example
   * agent
   */
  managedType?: string;
  /**
   * @remarks
   * The Prometheus ID.
   * 
   * @example
   * 124769812
   */
  prometheusId?: number;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * vpc-m5e4alj2i24ndbn
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of installed add-ons.
   * 
   * @example
   * 122
   */
  releaseCount?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvt3xpr5aema
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the environment resource.
   */
  tags?: ListEnvironmentsResponseBodyDataEnvironmentsTags[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 13990957477389
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      bindResourceId: 'BindResourceId',
      bindResourceProfile: 'BindResourceProfile',
      bindResourceType: 'BindResourceType',
      bindVpcCidr: 'BindVpcCidr',
      createTime: 'CreateTime',
      createdUserId: 'CreatedUserId',
      environmentId: 'EnvironmentId',
      environmentName: 'EnvironmentName',
      environmentType: 'EnvironmentType',
      features: 'Features',
      feePackage: 'FeePackage',
      grafanaDatasourceUid: 'GrafanaDatasourceUid',
      grafanaFolderTitle: 'GrafanaFolderTitle',
      grafanaFolderUid: 'GrafanaFolderUid',
      latestReleaseCreateTime: 'LatestReleaseCreateTime',
      managedType: 'ManagedType',
      prometheusId: 'PrometheusId',
      prometheusInstanceId: 'PrometheusInstanceId',
      regionId: 'RegionId',
      releaseCount: 'ReleaseCount',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListEnvironmentsResponseBodyDataEnvironmentsAddons },
      bindResourceId: 'string',
      bindResourceProfile: 'string',
      bindResourceType: 'string',
      bindVpcCidr: 'string',
      createTime: 'string',
      createdUserId: 'string',
      environmentId: 'string',
      environmentName: 'string',
      environmentType: 'string',
      features: { 'type': 'array', 'itemType': ListEnvironmentsResponseBodyDataEnvironmentsFeatures },
      feePackage: 'string',
      grafanaDatasourceUid: 'string',
      grafanaFolderTitle: 'string',
      grafanaFolderUid: 'string',
      latestReleaseCreateTime: 'string',
      managedType: 'string',
      prometheusId: 'number',
      prometheusInstanceId: 'string',
      regionId: 'string',
      releaseCount: 'number',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListEnvironmentsResponseBodyDataEnvironmentsTags },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
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

export class ListEnvironmentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried environments.
   */
  environments?: ListEnvironmentsResponseBodyDataEnvironments[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      environments: 'Environments',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environments: { 'type': 'array', 'itemType': ListEnvironmentsResponseBodyDataEnvironments },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListEnvironmentsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListEnvironmentsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

