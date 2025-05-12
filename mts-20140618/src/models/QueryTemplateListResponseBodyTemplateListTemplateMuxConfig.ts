// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif } from "./QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif";
import { QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment } from "./QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment";
import { QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp } from "./QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp";


export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment configurations.
   */
  segment?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  webp?: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
      webp: 'Webp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif,
      segment: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigSegment,
      webp: QueryTemplateListResponseBodyTemplateListTemplateMuxConfigWebp,
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

