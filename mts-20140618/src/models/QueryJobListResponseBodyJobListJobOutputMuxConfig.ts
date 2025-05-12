// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputMuxConfigGif } from "./QueryJobListResponseBodyJobListJobOutputMuxConfigGif";
import { QueryJobListResponseBodyJobListJobOutputMuxConfigSegment } from "./QueryJobListResponseBodyJobListJobOutputMuxConfigSegment";
import { QueryJobListResponseBodyJobListJobOutputMuxConfigWebp } from "./QueryJobListResponseBodyJobListJobOutputMuxConfigWebp";


export class QueryJobListResponseBodyJobListJobOutputMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: QueryJobListResponseBodyJobListJobOutputMuxConfigGif;
  /**
   * @remarks
   * The segment configurations. The value is a JSON object.
   */
  segment?: QueryJobListResponseBodyJobListJobOutputMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: QueryJobListResponseBodyJobListJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryJobListResponseBodyJobListJobOutputMuxConfigGif,
      segment: QueryJobListResponseBodyJobListJobOutputMuxConfigSegment,
      webp: QueryJobListResponseBodyJobListJobOutputMuxConfigWebp,
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

