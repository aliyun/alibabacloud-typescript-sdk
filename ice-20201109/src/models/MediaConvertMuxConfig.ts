// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertSegment } from "./MediaConvertSegment";


export class MediaConvertMuxConfig extends $dara.Model {
  /**
   * @remarks
   * Shard configuration field. For more information, see Segment details.
   * 
   * This field takes effect only when Container is set to m3u8, hls-fmp4, mpd, or cmaf.
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

