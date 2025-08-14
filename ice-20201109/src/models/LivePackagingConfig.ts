// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LiveManifestConfig } from "./LiveManifestConfig";


export class LivePackagingConfigDrmConfig extends $dara.Model {
  contentId?: string;
  encryptionMethod?: string;
  IV?: string;
  rotatePeriod?: number;
  systemIds?: string[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentId: 'ContentId',
      encryptionMethod: 'EncryptionMethod',
      IV: 'IV',
      rotatePeriod: 'RotatePeriod',
      systemIds: 'SystemIds',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentId: 'string',
      encryptionMethod: 'string',
      IV: 'string',
      rotatePeriod: 'number',
      systemIds: { 'type': 'array', 'itemType': 'string' },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.systemIds)) {
      $dara.Model.validateArray(this.systemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

