// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertSegment } from "./MediaConvertSegment";


export class MediaConvertMuxConfig extends $dara.Model {
  segment?: MediaConvertSegment;
  static names(): { [key: string]: string } {
    return {
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segment: MediaConvertSegment,
    };
  }

  validate() {
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

