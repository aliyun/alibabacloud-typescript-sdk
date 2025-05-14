// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LivePackagingConfigDrmConfig } from "./LivePackagingConfigDrmConfig";
import { LiveManifestConfig } from "./LiveManifestConfig";


export class LivePackagingConfig extends $dara.Model {
  drmConfig?: LivePackagingConfigDrmConfig;
  liveManifestConfigs?: LiveManifestConfig[];
  segmentDuration?: number;
  useAudioRenditionGroups?: boolean;
  static names(): { [key: string]: string } {
    return {
      drmConfig: 'DrmConfig',
      liveManifestConfigs: 'LiveManifestConfigs',
      segmentDuration: 'SegmentDuration',
      useAudioRenditionGroups: 'UseAudioRenditionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmConfig: LivePackagingConfigDrmConfig,
      liveManifestConfigs: { 'type': 'array', 'itemType': LiveManifestConfig },
      segmentDuration: 'number',
      useAudioRenditionGroups: 'boolean',
    };
  }

  validate() {
    if(this.drmConfig && typeof (this.drmConfig as any).validate === 'function') {
      (this.drmConfig as any).validate();
    }
    if(Array.isArray(this.liveManifestConfigs)) {
      $dara.Model.validateArray(this.liveManifestConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

