// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BrowserOssLocation } from "./BrowserOssLocation";


export class BrowserRecordingConfiguration extends $dara.Model {
  enabled?: boolean;
  ossLocation?: BrowserOssLocation;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      ossLocation: 'ossLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      ossLocation: BrowserOssLocation,
    };
  }

  validate() {
    if(this.ossLocation && typeof (this.ossLocation as any).validate === 'function') {
      (this.ossLocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

