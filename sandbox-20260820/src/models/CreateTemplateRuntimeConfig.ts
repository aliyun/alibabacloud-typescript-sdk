// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateLogConfig } from "./CreateTemplateLogConfig";
import { CreateTemplateSandboxConfig } from "./CreateTemplateSandboxConfig";
import { CreateTemplateVPCConfig } from "./CreateTemplateVpcconfig";


export class CreateTemplateRuntimeConfig extends $dara.Model {
  cpu?: number;
  diskSize?: number;
  internetAccess?: boolean;
  logConfig?: CreateTemplateLogConfig;
  memorySize?: number;
  sandboxConfig?: CreateTemplateSandboxConfig;
  vpcConfig?: CreateTemplateVPCConfig;
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
      logConfig: CreateTemplateLogConfig,
      memorySize: 'number',
      sandboxConfig: CreateTemplateSandboxConfig,
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
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

