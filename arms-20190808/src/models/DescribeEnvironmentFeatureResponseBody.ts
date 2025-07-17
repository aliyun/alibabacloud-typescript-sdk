// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvironmentFeatureResponseBodyDataFeature extends $dara.Model {
  /**
   * @remarks
   * The alias of the feature.
   * 
   * @example
   * Prometheus agent.
   */
  alias?: string;
  /**
   * @remarks
   * The configuration of the feature.
   */
  config?: { [key: string]: string };
  /**
   * @remarks
   * The description of the feature.
   * 
   * @example
   * Collect Metric data using the Prometheus collection specification.
   */
  description?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-xxxxx
   */
  environmentId?: string;
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
   * The language.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * 1.1.17
   */
  latestVersion?: string;
  /**
   * @remarks
   * Indicates whether the component is fully managed.
   */
  managed?: boolean;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * metric-agent
   */
  name?: string;
  /**
   * @remarks
   * The installation status of the agent.
   * 
   * *   Installing: The agent is being installed.
   * *   Success: The agent is installed.
   * *   Failed: The agent failed to be installed.
   * *   UnInstall: The agent is uninstalled or has not been installed.
   * *   Uninstalling: The agent is being uninstalled.
   * *   UnInstallFailed: The agent failed to be uninstalled.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.1.17
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      config: 'Config',
      description: 'Description',
      environmentId: 'EnvironmentId',
      icon: 'Icon',
      language: 'Language',
      latestVersion: 'LatestVersion',
      managed: 'Managed',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      description: 'string',
      environmentId: 'string',
      icon: 'string',
      language: 'string',
      latestVersion: 'string',
      managed: 'boolean',
      name: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvironmentFeatureResponseBodyDataFeatureStatusFeatureContainers extends $dara.Model {
  /**
   * @remarks
   * The container parameters.
   */
  args?: string[];
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/arms-prometheus-agent:v4.0.0
   */
  image?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * arms-prometheus-operator
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      image: 'Image',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvironmentFeatureResponseBodyDataFeatureStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * c013823b55e4b4d6bb6b6f28682bd38a7
   */
  bindResourceId?: string;
  /**
   * @remarks
   * The containers of the feature.
   */
  featureContainers?: DescribeEnvironmentFeatureResponseBodyDataFeatureStatusFeatureContainers[];
  /**
   * @remarks
   * The IP address of the pod.
   */
  ips?: string[];
  /**
   * @remarks
   * The Kubernetes resource name of the feature.
   * 
   * @example
   * arms-prometheus-ack-arms-prometheus
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1c9fcexoalq9po6cp8
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the agent. Valid values:
   * 
   * *   Success: The agent is running.
   * *   Failed: The agent failed to run.
   * *   Not Found: The agent is not installed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1qt6ict0dbxgv4wer8l
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bindResourceId: 'BindResourceId',
      featureContainers: 'FeatureContainers',
      ips: 'Ips',
      name: 'Name',
      namespace: 'Namespace',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindResourceId: 'string',
      featureContainers: { 'type': 'array', 'itemType': DescribeEnvironmentFeatureResponseBodyDataFeatureStatusFeatureContainers },
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      namespace: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureContainers)) {
      $dara.Model.validateArray(this.featureContainers);
    }
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvironmentFeatureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The installation information about the feature.
   */
  feature?: DescribeEnvironmentFeatureResponseBodyDataFeature;
  /**
   * @remarks
   * The status of the feature.
   */
  featureStatus?: DescribeEnvironmentFeatureResponseBodyDataFeatureStatus;
  /**
   * @remarks
   * The feature configurations.
   * 
   * @example
   * {}
   */
  config?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      featureStatus: 'FeatureStatus',
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: DescribeEnvironmentFeatureResponseBodyDataFeature,
      featureStatus: DescribeEnvironmentFeatureResponseBodyDataFeatureStatus,
      config: 'string',
    };
  }

  validate() {
    if(this.feature && typeof (this.feature as any).validate === 'function') {
      (this.feature as any).validate();
    }
    if(this.featureStatus && typeof (this.featureStatus as any).validate === 'function') {
      (this.featureStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvironmentFeatureResponseBody extends $dara.Model {
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
   * The struct returned.
   */
  data?: DescribeEnvironmentFeatureResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * 01FF8DD9-A09C-47A1-895A-B6E321BE77B6
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
      data: DescribeEnvironmentFeatureResponseBodyData,
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

