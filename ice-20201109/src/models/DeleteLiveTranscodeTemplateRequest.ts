// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveTranscodeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template ID. You can obtain the ID from the [Intelligent Media Services console](https://ice.console.aliyun.com/summary) > Template Management > Real-time Transcoding Template, or from the response parameters of [CreateLiveTranscodeTemplate](https://help.aliyun.com/document_detail/449217.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

