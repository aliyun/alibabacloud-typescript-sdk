// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputMuxConfigGif } from "./ListJobResponseBodyJobListJobOutputMuxConfigGif";
import { ListJobResponseBodyJobListJobOutputMuxConfigSegment } from "./ListJobResponseBodyJobListJobOutputMuxConfigSegment";
import { ListJobResponseBodyJobListJobOutputMuxConfigWebp } from "./ListJobResponseBodyJobListJobOutputMuxConfigWebp";


export class ListJobResponseBodyJobListJobOutputMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: ListJobResponseBodyJobListJobOutputMuxConfigGif;
  /**
   * @remarks
   * The segment configurations. The value is a JSON object.
   */
  segment?: ListJobResponseBodyJobListJobOutputMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: ListJobResponseBodyJobListJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: ListJobResponseBodyJobListJobOutputMuxConfigGif,
      segment: ListJobResponseBodyJobListJobOutputMuxConfigSegment,
      webp: ListJobResponseBodyJobListJobOutputMuxConfigWebp,
    };
  }

  validate() {
    if(this.gif && typeof (this.gif as any).validate === 'function') {
      (this.gif as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    if(this.webp && typeof (this.webp as any).validate === 'function') {
      (this.webp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

