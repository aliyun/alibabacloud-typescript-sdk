// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchTemplateResponseBodyTemplateListTemplateMuxConfigGif } from "./SearchTemplateResponseBodyTemplateListTemplateMuxConfigGif";
import { SearchTemplateResponseBodyTemplateListTemplateMuxConfigSegment } from "./SearchTemplateResponseBodyTemplateListTemplateMuxConfigSegment";


export class SearchTemplateResponseBodyTemplateListTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   */
  gif?: SearchTemplateResponseBodyTemplateListTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment configurations.
   */
  segment?: SearchTemplateResponseBodyTemplateListTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SearchTemplateResponseBodyTemplateListTemplateMuxConfigGif,
      segment: SearchTemplateResponseBodyTemplateListTemplateMuxConfigSegment,
    };
  }

  validate() {
    if(this.gif && typeof (this.gif as any).validate === 'function') {
      (this.gif as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

