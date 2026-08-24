// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVulScanGlobalConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum download rate for vulnerability patches on a single user terminal device. Unit: Byte/s. A value of 0 indicates no speed limit.
   * 
   * @example
   * 1048576
   */
  maxDownloadSpeed?: number;
  /**
   * @remarks
   * The vulnerability fix configuration for WUYING Workspace. This configuration applies only to user terminal devices of the Cloud Desktop type.
   * 
   * @deprecated
   */
  wuyingVulFixConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxDownloadSpeed: 'MaxDownloadSpeed',
      wuyingVulFixConfigShrink: 'WuyingVulFixConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDownloadSpeed: 'number',
      wuyingVulFixConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

