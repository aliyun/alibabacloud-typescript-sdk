// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateLogConfig } from "./PublicUpdateTemplateLogConfig";
import { PublicUpdateTemplateSandboxConfig } from "./PublicUpdateTemplateSandboxConfig";
import { PublicUpdateTemplateVPCConfig } from "./PublicUpdateTemplateVpcconfig";


export class PublicUpdateTemplateRuntimeConfig extends $dara.Model {
  /**
   * @remarks
   * The number of vCPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The system cloud disk size in MB.
   * 
   * @example
   * 512
   */
  diskSize?: number;
  /**
   * @remarks
   * Specifies whether the sandbox is allowed to access the Internet.
   */
  internetAccess?: boolean;
  /**
   * @remarks
   * The log configuration.
   */
  logConfig?: PublicUpdateTemplateLogConfig;
  /**
   * @remarks
   * The memory size in MB.
   * 
   * @example
   * 2048
   */
  memorySize?: number;
  /**
   * @remarks
   * The sandbox configuration.
   */
  sandboxConfig?: PublicUpdateTemplateSandboxConfig;
  /**
   * @remarks
   * If omitted or set to null, the original list is retained. A non-empty array replaces the entire allowed set. An explicit empty array [] clears the inbound VPC restrictions for the new version. This field is independent of vpcConfig. An empty request body {}, an empty runtimeConfig, or a runtimeConfig that contains only vpcBindings: null returns a 400 error and does not clear the bindings. The actual JSON received by the server prevails. An empty array omitted by the SDK cannot clear the list.
   * 
   * @example
   * ["vpc-examplea","vpc-exampleb"]
   */
  vpcBindings?: string[];
  /**
   * @remarks
   * The VPC network configuration.
   */
  vpcConfig?: PublicUpdateTemplateVPCConfig;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      diskSize: 'diskSize',
      internetAccess: 'internetAccess',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      sandboxConfig: 'sandboxConfig',
      vpcBindings: 'vpcBindings',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      diskSize: 'number',
      internetAccess: 'boolean',
      logConfig: PublicUpdateTemplateLogConfig,
      memorySize: 'number',
      sandboxConfig: PublicUpdateTemplateSandboxConfig,
      vpcBindings: { 'type': 'array', 'itemType': 'string' },
      vpcConfig: PublicUpdateTemplateVPCConfig,
    };
  }

  validate() {
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.sandboxConfig && typeof (this.sandboxConfig as any).validate === 'function') {
      (this.sandboxConfig as any).validate();
    }
    if(Array.isArray(this.vpcBindings)) {
      $dara.Model.validateArray(this.vpcBindings);
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

