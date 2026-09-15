// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateRegistryConfig } from "./PublicUpdateTemplateRegistryConfig";


export class PublicUpdateTemplateCopyAction extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination ACR Enterprise instance.
   * 
   * @example
   * cri-abc123
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * Indicates whether image replication is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The destination image address for replication.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/my/ns:v2
   */
  image?: string;
  /**
   * @remarks
   * The image repository configuration.
   */
  registryConfig?: PublicUpdateTemplateRegistryConfig;
  /**
   * @remarks
   * The destination repository type.
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
      registryConfig: PublicUpdateTemplateRegistryConfig,
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

