// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveTranscodeTemplateResponseBodyTemplateContent } from "./GetLiveTranscodeTemplateResponseBodyTemplateContent";


export class GetLiveTranscodeTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the template.
   */
  templateContent?: GetLiveTranscodeTemplateResponseBodyTemplateContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateContent: GetLiveTranscodeTemplateResponseBodyTemplateContent,
    };
  }

  validate() {
    if(this.templateContent && typeof (this.templateContent as any).validate === 'function') {
      (this.templateContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

