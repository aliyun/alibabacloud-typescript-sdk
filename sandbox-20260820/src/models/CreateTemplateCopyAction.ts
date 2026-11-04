// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRegistryConfig } from "./CreateTemplateRegistryConfig";


export class CreateTemplateCopyAction extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination Container Registry Enterprise instance. This field does not inherit the instance ID of the source image.
   * 
   * @example
   * cri-****
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the image replication action. This parameter is required when this action block is passed.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The destination image address for the push operation. If this parameter is not provided, the service derives a new tag in the repository where the source image is located.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/sandbox-demo/python:3.12-envd
   */
  image?: string;
  /**
   * @remarks
   * The credentials, TLS settings, and network configurations required to access the destination image repository.
   */
  registryConfig?: CreateTemplateRegistryConfig;
  /**
   * @remarks
   * The type of the destination image repository. Valid values: oci (standard OCI repository), acr (Container Registry Personal Edition), and acree (Container Registry Enterprise Edition). By default, the value is derived from the destination image address.
   * 
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

