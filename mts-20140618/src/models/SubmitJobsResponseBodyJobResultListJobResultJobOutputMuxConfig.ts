// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif;
  /**
   * @remarks
   * The segment configuration. The value is a JSON object.
   */
  segment?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigGif,
      segment: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment,
      webp: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigWebp,
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

