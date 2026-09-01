// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateLogConfig } from "./PublicTemplateLogConfig";
import { PublicTemplateSandboxConfig } from "./PublicTemplateSandboxConfig";
import { PublicTemplateVPCConfig } from "./PublicTemplateVpcconfig";


export class PublicTemplateRuntimeConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @example
   * 10
   */
  diskSize?: number;
  internetAccess?: boolean;
  logConfig?: PublicTemplateLogConfig;
  /**
   * @example
   * 2048
   */
  memorySize?: number;
  sandboxConfig?: PublicTemplateSandboxConfig;
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

