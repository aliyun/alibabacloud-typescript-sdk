// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertSegment } from "./MediaConvertSegment";


export class MediaConvertMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The segment configuration field. For more information, see the Segment details.
   * 
   * This parameter takes effect only when Container is set to m3u8, hls-fmp4, mpd, or cmaf.
   */
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

