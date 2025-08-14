// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VodPackagingConfigDrmProvider extends $dara.Model {
  encryptionMethod?: string;
  IV?: string;
  systemIds?: string[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionMethod: 'EncryptionMethod',
      IV: 'IV',
      systemIds: 'SystemIds',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionMethod: 'string',
      IV: 'string',
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

export class VodPackagingConfigStreamSelection extends $dara.Model {
  maxVideoBitsPerSecond?: number;
  minVideoBitsPerSecond?: number;
  streamOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxVideoBitsPerSecond: 'MaxVideoBitsPerSecond',
      minVideoBitsPerSecond: 'MinVideoBitsPerSecond',
      streamOrder: 'StreamOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxVideoBitsPerSecond: 'number',
      minVideoBitsPerSecond: 'number',
      streamOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VodPackagingConfig extends $dara.Model {
  drmProvider?: VodPackagingConfigDrmProvider;
  manifestName?: string;
  segmentDuration?: number;
  streamSelection?: VodPackagingConfigStreamSelection;
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
      drmProvider: VodPackagingConfigDrmProvider,
      manifestName: 'string',
      segmentDuration: 'number',
      streamSelection: VodPackagingConfigStreamSelection,
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

