// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLiveTranscodeTemplateRequestTemplateConfig } from "./UpdateLiveTranscodeTemplateRequestTemplateConfig";


export class UpdateLiveTranscodeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the template.
   */
  templateConfig?: UpdateLiveTranscodeTemplateRequestTemplateConfig;
  /**
   * @remarks
   * The template ID. To obtain the template ID, log on to the [Intelligent Media Services (IMS) console](https://ims.console.aliyun.com/summary), choose Real-time Media Processing > Template Management, and then click the Transcoding tab. Alternatively, find the ID from the response parameters of the [CreateLiveTranscodeTemplate](https://help.aliyun.com/document_detail/449217.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfig: UpdateLiveTranscodeTemplateRequestTemplateConfig,
      templateId: 'string',
    };
  }

  validate() {
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

