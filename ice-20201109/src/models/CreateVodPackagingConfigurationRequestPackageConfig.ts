// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVodPackagingConfigurationRequestPackageConfigDrmProvider } from "./CreateVodPackagingConfigurationRequestPackageConfigDrmProvider";
import { CreateVodPackagingConfigurationRequestPackageConfigStreamSelection } from "./CreateVodPackagingConfigurationRequestPackageConfigStreamSelection";


export class CreateVodPackagingConfigurationRequestPackageConfig extends $dara.Model {
  /**
   * @remarks
   * The settings of digital rights management (DRM) encryption.
   * 
   * **if can be null:**
   * true
   */
  drmProvider?: CreateVodPackagingConfigurationRequestPackageConfigDrmProvider;
  /**
   * @remarks
   * The manifest name. The name can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * index
   */
  manifestName?: string;
  /**
   * @remarks
   * The duration of each segment in a packaged stream. Unit: seconds. MediaPackage rounds segments to the nearest multiple of the input segment duration. Valid values: 1 to 30.
   * 
   * @example
   * 6
   */
  segmentDuration?: number;
  /**
   * @remarks
   * The settings of stream selection.
   */
  streamSelection?: CreateVodPackagingConfigurationRequestPackageConfigStreamSelection;
  static names(): { [key: string]: string } {
    return {
      drmProvider: 'DrmProvider',
      manifestName: 'ManifestName',
      segmentDuration: 'SegmentDuration',
      streamSelection: 'StreamSelection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmProvider: CreateVodPackagingConfigurationRequestPackageConfigDrmProvider,
      manifestName: 'string',
      segmentDuration: 'number',
      streamSelection: CreateVodPackagingConfigurationRequestPackageConfigStreamSelection,
    };
  }

  validate() {
    if(this.drmProvider && typeof (this.drmProvider as any).validate === 'function') {
      (this.drmProvider as any).validate();
    }
    if(this.streamSelection && typeof (this.streamSelection as any).validate === 'function') {
      (this.streamSelection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

