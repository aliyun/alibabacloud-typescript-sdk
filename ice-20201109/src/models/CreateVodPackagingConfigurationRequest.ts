// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVodPackagingConfigurationRequestPackageConfig } from "./CreateVodPackagingConfigurationRequestPackageConfig";


export class CreateVodPackagingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging configuration. The name must be unique in an account and can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * hls_3s
   */
  configurationName?: string;
  /**
   * @remarks
   * The description of the packaging configuration.
   * 
   * @example
   * HLS 3s vod packaging
   */
  description?: string;
  /**
   * @remarks
   * The name of the packaging group. The name can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The packaging configuration.
   */
  packageConfig?: CreateVodPackagingConfigurationRequestPackageConfig;
  /**
   * @remarks
   * The package type.
   * 
   * *   HLS: packages content into TS segments for delivery over the HLS protocol.
   * *   HLS_CMAF: packages content into CMAF segments for delivery over the HLS protocol.
   * *   DASH: packages content for delivery over the DASH protocol.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      configurationName: 'ConfigurationName',
      description: 'Description',
      groupName: 'GroupName',
      packageConfig: 'PackageConfig',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationName: 'string',
      description: 'string',
      groupName: 'string',
      packageConfig: CreateVodPackagingConfigurationRequestPackageConfig,
      protocol: 'string',
    };
  }

  validate() {
    if(this.packageConfig && typeof (this.packageConfig as any).validate === 'function') {
      (this.packageConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

