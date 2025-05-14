// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomTemplatesResponseBodyCustomTemplateListFrontendHintTranscodeTemplateHint } from "./ListCustomTemplatesResponseBodyCustomTemplateListFrontendHintTranscodeTemplateHint";


export class ListCustomTemplatesResponseBodyCustomTemplateListFrontendHint extends $dara.Model {
  transcodeTemplateHint?: ListCustomTemplatesResponseBodyCustomTemplateListFrontendHintTranscodeTemplateHint;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplateHint: 'TranscodeTemplateHint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplateHint: ListCustomTemplatesResponseBodyCustomTemplateListFrontendHintTranscodeTemplateHint,
    };
  }

  validate() {
    if(this.transcodeTemplateHint && typeof (this.transcodeTemplateHint as any).validate === 'function') {
      (this.transcodeTemplateHint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

