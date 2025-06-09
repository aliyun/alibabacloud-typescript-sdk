// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FullSampleItem } from "./FullSampleItem";


export class SampleBase extends $dara.Model {
  fullSampleDeviceIds?: FullSampleItem[];
  fullSampleUsers?: FullSampleItem[];
  sampleMethod?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      fullSampleDeviceIds: 'FullSampleDeviceIds',
      fullSampleUsers: 'FullSampleUsers',
      sampleMethod: 'SampleMethod',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullSampleDeviceIds: { 'type': 'array', 'itemType': FullSampleItem },
      fullSampleUsers: { 'type': 'array', 'itemType': FullSampleItem },
      sampleMethod: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fullSampleDeviceIds)) {
      $dara.Model.validateArray(this.fullSampleDeviceIds);
    }
    if(Array.isArray(this.fullSampleUsers)) {
      $dara.Model.validateArray(this.fullSampleUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

