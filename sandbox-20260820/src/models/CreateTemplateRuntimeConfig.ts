// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateLogConfig } from "./CreateTemplateLogConfig";
import { CreateTemplateSandboxConfig } from "./CreateTemplateSandboxConfig";
import { CreateTemplateVPCConfig } from "./CreateTemplateVpcconfig";


export class CreateTemplateRuntimeConfig extends $dara.Model {
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
  logConfig?: CreateTemplateLogConfig;
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
  sandboxConfig?: CreateTemplateSandboxConfig;
  /**
   * @remarks
   * A non-empty array configures the set of source VPCs that are allowed to access the sandbox data endpoint. Omitting the field, setting it to null, or providing an empty array indicates that no inbound bindings are configured. This configuration is independent of the egress network vpcConfig and does not modify the API key source policy. A null value is treated as omitted to maintain compatibility with SDK requests where the field is not set. You can update or clear the list by calling UpdateTemplate. The changes take effect after a new version is successfully built, and existing sandboxes continue to use the original configuration.
   * 
   * @example
   * ["vpc-examplea","vpc-exampleb"]
   */
  vpcBindings?: string[];
  /**
   * @remarks
   * The VPC configuration of the sandbox instance.
   */
  vpcConfig?: CreateTemplateVPCConfig;
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
      logConfig: CreateTemplateLogConfig,
      memorySize: 'number',
      sandboxConfig: CreateTemplateSandboxConfig,
      vpcBindings: { 'type': 'array', 'itemType': 'string' },
      vpcConfig: CreateTemplateVPCConfig,
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

