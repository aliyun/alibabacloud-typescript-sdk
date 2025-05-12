// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTemplateResponseBodyTemplateMuxConfigGif } from "./UpdateTemplateResponseBodyTemplateMuxConfigGif";
import { UpdateTemplateResponseBodyTemplateMuxConfigSegment } from "./UpdateTemplateResponseBodyTemplateMuxConfigSegment";
import { UpdateTemplateResponseBodyTemplateMuxConfigWebp } from "./UpdateTemplateResponseBodyTemplateMuxConfigWebp";


export class UpdateTemplateResponseBodyTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The duration for which the final frame is paused. Unit: milliseconds.
   */
  gif?: UpdateTemplateResponseBodyTemplateMuxConfigGif;
  /**
   * @remarks
   * The length of the segment. Unit: seconds.
   */
  segment?: UpdateTemplateResponseBodyTemplateMuxConfigSegment;
  /**
   * @remarks
   * The loop count.
   */
  webp?: UpdateTemplateResponseBodyTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: UpdateTemplateResponseBodyTemplateMuxConfigGif,
      segment: UpdateTemplateResponseBodyTemplateMuxConfigSegment,
      webp: UpdateTemplateResponseBodyTemplateMuxConfigWebp,
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

