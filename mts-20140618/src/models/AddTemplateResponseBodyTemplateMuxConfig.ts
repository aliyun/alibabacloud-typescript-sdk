// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddTemplateResponseBodyTemplateMuxConfigGif } from "./AddTemplateResponseBodyTemplateMuxConfigGif";
import { AddTemplateResponseBodyTemplateMuxConfigSegment } from "./AddTemplateResponseBodyTemplateMuxConfigSegment";
import { AddTemplateResponseBodyTemplateMuxConfigWebp } from "./AddTemplateResponseBodyTemplateMuxConfigWebp";


export class AddTemplateResponseBodyTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing settings for GIF.
   */
  gif?: AddTemplateResponseBodyTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment settings.
   */
  segment?: AddTemplateResponseBodyTemplateMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing settings for WebP.
   */
  webp?: AddTemplateResponseBodyTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: AddTemplateResponseBodyTemplateMuxConfigGif,
      segment: AddTemplateResponseBodyTemplateMuxConfigSegment,
      webp: AddTemplateResponseBodyTemplateMuxConfigWebp,
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

