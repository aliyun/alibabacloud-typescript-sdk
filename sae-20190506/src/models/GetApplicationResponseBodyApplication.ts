// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The description of the application.
   */
  appDescription?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 443d638a-ef76-47c4-b707-61197d******
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the basic application.
   * 
   * @example
   * ee99cce6-1c8e-4bfa-96c3-3e2fa9******
   */
  baseAppId?: string;
  /**
   * @remarks
   * The CPU specifications that are required for each instance. Unit: millicores. This parameter cannot be set to 0. Valid values:
   * 
   * *   **500**
   * *   **1000**
   * *   **2000**
   * *   **4000**
   * *   **8000**
   * *   **12000**
   * *   **16000**
   * *   **32000**
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * i-8ps2o182102o1jv05bys
   */
  instances?: number;
  /**
   * @remarks
   * The memory size that is required by each instance. Unit: MB. This parameter cannot be set to 0. The values of this parameter correspond to the values of the Cpu parameter:
   * 
   * *   This parameter is set to **1024** if the Cpu parameter is set to 500 or 1000.
   * *   This parameter is set to **2048** if the Cpu parameter is set to 500, 1000, or 2000.
   * *   This parameter is set to **4096** if the Cpu parameter is set to 1000, 2000, or 4000.
   * *   This parameter is set to **8192** if the Cpu parameter is set to 2000, 4000, or 8000.
   * *   This parameter is set to **12288** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **16384** if the Cpu parameter is set to 4000, 8000, or 16000.
   * *   This parameter is set to **24576** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **32768** if the Cpu parameter is set to 16000.
   * *   This parameter is set to **65536** if the Cpu parameter is set to 8000, 16000, or 32000.
   * *   This parameter is set to **131072** if the Cpu parameter is set to 32000.
   * 
   * @example
   * 4096
   */
  mem?: number;
  /**
   * @remarks
   * Specifies whether to enable WebAssembly Filter. Valid values:
   * 
   * *   true: enables this parameter.
   * *   false: disables this parameter.
   * 
   * @example
   * true
   */
  mseEnabled?: boolean;
  /**
   * @remarks
   * The ID of the namespace to which the MSE instance belongs.
   * 
   * @example
   * test
   */
  mseNamespaceId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-shenzhen
   */
  namespaceId?: string;
  /**
   * @remarks
   * The programming language that is used to create the application. Valid values:
   * 
   * *   **java** :Java.
   * *   **php**: PHP.
   * *   **other**: other programming languages, such as Python, C++, Go, .NET, and Node.js
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * The number of application instances that are running.
   * 
   * @example
   * 1
   */
  runningInstances?: number;
  /**
   * @remarks
   * Indicates whether the auto scaling policy is enabled. Valid values:
   * 
   * *   **true**: The auto scaling policy is enabled.
   * *   **false**: The auto scaling policy is disabled.
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: string;
  /**
   * @remarks
   * The type of the auto scaling policy. Valid values:
   * 
   * *   **timing**: a scheduled auto scaling policy.
   * *   **metric**: a metric-based auto scaling policy.
   * *   **mix**: a hybrid auto scaling policy.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      baseAppId: 'BaseAppId',
      cpu: 'Cpu',
      instances: 'Instances',
      mem: 'Mem',
      mseEnabled: 'MseEnabled',
      mseNamespaceId: 'MseNamespaceId',
      namespaceId: 'NamespaceId',
      programmingLanguage: 'ProgrammingLanguage',
      runningInstances: 'RunningInstances',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleType: 'ScaleRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      baseAppId: 'string',
      cpu: 'number',
      instances: 'number',
      mem: 'number',
      mseEnabled: 'boolean',
      mseNamespaceId: 'string',
      namespaceId: 'string',
      programmingLanguage: 'string',
      runningInstances: 'number',
      scaleRuleEnabled: 'string',
      scaleRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

