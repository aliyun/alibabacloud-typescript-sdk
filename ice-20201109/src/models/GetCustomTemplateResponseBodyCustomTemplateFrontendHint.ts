// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomTemplateResponseBodyCustomTemplateFrontendHintTranscodeTemplateHint } from "./GetCustomTemplateResponseBodyCustomTemplateFrontendHintTranscodeTemplateHint";


export class GetCustomTemplateResponseBodyCustomTemplateFrontendHint extends $dara.Model {
  transcodeTemplateHint?: GetCustomTemplateResponseBodyCustomTemplateFrontendHintTranscodeTemplateHint;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplateHint: 'TranscodeTemplateHint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplateHint: GetCustomTemplateResponseBodyCustomTemplateFrontendHintTranscodeTemplateHint,
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

