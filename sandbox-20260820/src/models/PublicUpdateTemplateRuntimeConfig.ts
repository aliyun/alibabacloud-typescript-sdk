// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateLogConfig } from "./PublicUpdateTemplateLogConfig";
import { PublicUpdateTemplateSandboxConfig } from "./PublicUpdateTemplateSandboxConfig";
import { PublicUpdateTemplateVPCConfig } from "./PublicUpdateTemplateVpcconfig";


export class PublicUpdateTemplateRuntimeConfig extends $dara.Model {
  cpu?: number;
  diskSize?: number;
  internetAccess?: boolean;
  logConfig?: PublicUpdateTemplateLogConfig;
  memorySize?: number;
  sandboxConfig?: PublicUpdateTemplateSandboxConfig;
  vpcConfig?: PublicUpdateTemplateVPCConfig;
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
      logConfig: PublicUpdateTemplateLogConfig,
      memorySize: 'number',
      sandboxConfig: PublicUpdateTemplateSandboxConfig,
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
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

