// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingConfig } from "./VodPackagingConfig";


export class VodPackagingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging configuration. The name can be up to 128 characters in length, must match the [A-Za-z0-9_-]+ format, and must be unique per user.
   * 
   * @example
   * example-config
   */
  configurationName?: string;
  /**
   * @remarks
   * The creation time.
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the packaging configuration.
   */
  description?: string;
  /**
   * @remarks
   * The name of the packaging group. The name can be up to 128 characters in length and must match the [A-Za-z0-9_-]+ format.
   * 
   * @example
   * example-group
   */
  groupName?: string;
  packageConfig?: VodPackagingConfig;
  /**
   * @remarks
   * The packaging type. Valid values:
   * - HLS: HLS protocol playback format.
   * - HLS_CMAF: CMAF playback format for the HLS protocol.
   * - DASH: DASH protocol playback format.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      configurationName: 'ConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      groupName: 'GroupName',
      packageConfig: 'PackageConfig',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationName: 'string',
      createTime: 'string',
      description: 'string',
      groupName: 'string',
      packageConfig: VodPackagingConfig,
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

