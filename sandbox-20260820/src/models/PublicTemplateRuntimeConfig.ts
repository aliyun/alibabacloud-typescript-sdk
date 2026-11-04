// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateLogConfig } from "./PublicTemplateLogConfig";
import { PublicTemplateSandboxConfig } from "./PublicTemplateSandboxConfig";
import { PublicTemplateVPCConfig } from "./PublicTemplateVpcconfig";


export class PublicTemplateRuntimeConfig extends $dara.Model {
  /**
   * @remarks
   * The CPU specification of the sandbox instance, in cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The disk specification of the sandbox instance, in MB.
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
   * The memory specification of the sandbox instance, in MB.
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
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

