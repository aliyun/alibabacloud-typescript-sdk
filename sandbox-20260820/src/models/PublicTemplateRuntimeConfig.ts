// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateLogConfig } from "./PublicTemplateLogConfig";
import { PublicTemplateSandboxConfig } from "./PublicTemplateSandboxConfig";
import { PublicTemplateVPCConfig } from "./PublicTemplateVpcconfig";


export class PublicTemplateRuntimeConfig extends $dara.Model {
  /**
   * @remarks
   * The CPU specifications of the sandbox instance, in cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The disk specifications of the sandbox instance, in MB.
   * 
   * @example
   * 10240
   */
  diskSize?: number;
  /**
   * @remarks
   * Specifies whether the sandbox instance is allowed to access the Internet.
   */
  internetAccess?: boolean;
  /**
   * @remarks
   * The log delivery configuration of the sandbox instance.
   */
  logConfig?: PublicTemplateLogConfig;
  /**
   * @remarks
   * The memory specifications of the sandbox instance, in MB.
   * 
   * @example
   * 2048
   */
  memorySize?: number;
  /**
   * @remarks
   * The image and startup configuration of the sandbox instance.
   */
  sandboxConfig?: PublicTemplateSandboxConfig;
  /**
   * @remarks
   * The collection of inbound source VPCs allowed by the current template configuration. Omitting this field or providing an empty array indicates that no inbound VPC bindings are configured. This configuration is independent of the egress network vpcConfig. Subsequent template updates do not change the inbound VPC bindings of existing sandbox instances.
   * 
   * @example
   * ["vpc-examplea","vpc-exampleb"]
   */
  vpcBindings?: string[];
  /**
   * @remarks
   * The VPC configuration of the sandbox instance.
   */
  vpcConfig?: PublicTemplateVPCConfig;
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
      logConfig: PublicTemplateLogConfig,
      memorySize: 'number',
      sandboxConfig: PublicTemplateSandboxConfig,
      vpcBindings: { 'type': 'array', 'itemType': 'string' },
      vpcConfig: PublicTemplateVPCConfig,
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

