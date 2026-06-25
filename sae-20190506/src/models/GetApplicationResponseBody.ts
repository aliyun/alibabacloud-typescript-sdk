// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Test
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
   * The base application ID.
   * 
   * @example
   * ee99cce6-1c8e-4bfa-96c3-3e2fa9******
   */
  baseAppId?: string;
  /**
   * @remarks
   * The CPU required for each instance, in millicores. This value cannot be 0. Valid values:
   * 
   * - **500**
   * 
   * - **1000**
   * 
   * - **2000**
   * 
   * - **4000**
   * 
   * - **8000**
   * 
   * - **12000**
   * 
   * - **16000**
   * 
   * - **32000**
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * The total number of application instances.
   * 
   * @example
   * 6
   */
  instances?: number;
  /**
   * @remarks
   * Indicates whether the application is stateful.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The memory required for each instance, in MB. This value cannot be 0. The memory specification is coupled with the CPU specification. The following configurations are supported:
   * 
   * - **1024**: corresponds to 500 or 1,000 millicores of CPU.
   * 
   * - **2048**: corresponds to 500, 1,000, or 2,000 millicores of CPU.
   * 
   * - **4096**: corresponds to 1,000, 2,000, or 4,000 millicores of CPU.
   * 
   * - **8192**: corresponds to 2,000, 4,000, or 8,000 millicores of CPU.
   * 
   * - **12288**: corresponds to 12,000 millicores of CPU.
   * 
   * - **16384**: corresponds to 4,000, 8,000, or 16,000 millicores of CPU.
   * 
   * - **24576**: corresponds to 12,000 millicores of CPU.
   * 
   * - **32768**: corresponds to 16,000 millicores of CPU.
   * 
   * - **65536**: corresponds to 8,000, 16,000, or 32,000 millicores of CPU.
   * 
   * - **131072**: corresponds to 32,000 millicores of CPU.
   * 
   * @example
   * 4096
   */
  mem?: number;
  /**
   * @remarks
   * Indicates whether WebAssemblyFilter is enabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  mseEnabled?: boolean;
  /**
   * @remarks
   * The namespace ID of the MSE instance.
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
   * The programming language of the application. Valid values:
   * 
   * - **java**: Java.
   * 
   * - **php**: PHP.
   * 
   * - **other**: other languages, such as Python, C++, Go, .NET, and Node.js.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 6
   */
  runningInstances?: number;
  /**
   * @remarks
   * Indicates whether the auto scaling policy is enabled. Valid values:
   * 
   * - **true**: The policy is enabled.
   * 
   * - **false**: The policy is disabled.
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: string;
  /**
   * @remarks
   * The type of the auto scaling policy. Valid values:
   * 
   * - **timing**: scheduled auto scaling.
   * 
   * - **metric**: metric-based auto scaling.
   * 
   * - **mix**: hybrid auto scaling.
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
      isStateful: 'IsStateful',
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
      isStateful: 'boolean',
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

export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The response message.
   * 
   * - If the request is successful, the value is **success**.
   * 
   * - If the request fails, the value is a specific error code.
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
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3****
   */
  requestId?: string;
  /**
   * @remarks
   * The trace ID used to query the details of the request.
   * 
   * @example
   * ac1a0b2215622920113732501e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      message: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

