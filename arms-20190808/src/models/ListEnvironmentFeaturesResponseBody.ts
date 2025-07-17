// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentFeaturesResponseBodyData extends $dara.Model {
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
   * The feature configuration.
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
   * The ID of the environment instance.
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
   * The language. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
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
   * 
   * @example
   * true
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
   * The status of the feature. Valid values:
   * 
   * *   Installing: The agent is being installed.
   * *   Success: The agent is installed.
   * *   Failed: The agent failed to be installed.
   * *   UnInstall: The agent is uninstalled.
   * *   Uninstalling: The agent is being uninstalled.
   * *   UnInstallFailed: The agent failed to be uninstalled.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The version of the feature.
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

export class ListEnvironmentFeaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status Code. Description 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListEnvironmentFeaturesResponseBodyData[];
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
   * Id of the request
   * 
   * @example
   * 40B10E04-81E8-4643-970D-F1B38F2E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the alert rule was deleted. Valid values:
   * 
   * *   `true`: The alert rule was deleted.
   * *   `false`: The alert rule failed to be deleted.
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
      data: { 'type': 'array', 'itemType': ListEnvironmentFeaturesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

