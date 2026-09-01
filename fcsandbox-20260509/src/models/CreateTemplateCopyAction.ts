// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRegistryConfig } from "./CreateTemplateRegistryConfig";


export class CreateTemplateCopyAction extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACR Enterprise instance where the source image resides.
   * 
   * @example
   * cri-abcd1234efgh
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable image replication.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The source image address.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  image?: string;
  /**
   * @remarks
   * The source image repository configuration.
   */
  registryConfig?: CreateTemplateRegistryConfig;
  /**
   * @remarks
   * The source image repository type.
   * 
   * @example
   * acr
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

