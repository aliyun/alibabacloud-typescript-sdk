// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRegistryConfig } from "./CreateTemplateRegistryConfig";


export class CreateTemplateCopyAction extends $dara.Model {
  /**
   * @example
   * cri-****
   */
  acrInstanceId?: string;
  enabled?: boolean;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/sandbox-demo/python:3.12-envd
   */
  image?: string;
  registryConfig?: CreateTemplateRegistryConfig;
  /**
   * @example
   * acree
   */
  registryType?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      enabled: 'enabled',
      image: 'image',
      registryConfig: 'registryConfig',
      registryType: 'registryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      enabled: 'boolean',
      image: 'string',
      registryConfig: CreateTemplateRegistryConfig,
      registryType: 'string',
    };
  }

  validate() {
    if(this.registryConfig && typeof (this.registryConfig as any).validate === 'function') {
      (this.registryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

