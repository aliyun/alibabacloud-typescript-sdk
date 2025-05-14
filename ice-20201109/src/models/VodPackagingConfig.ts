// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingConfigDrmProvider } from "./VodPackagingConfigDrmProvider";
import { VodPackagingConfigStreamSelection } from "./VodPackagingConfigStreamSelection";


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

