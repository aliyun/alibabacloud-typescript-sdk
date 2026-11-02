// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveTranscodeTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * The template 1130-2
   */
  name?: string;
  /**
   * @remarks
   * The template configuration.
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * The template ID. You can obtain the ID from the [Intelligent Media Services console](https://ims.console.aliyun.com/summary) by choosing Templates > Real-time Transcoding Templates, or from the response parameters of the [Create a real-time transcoding template](https://help.aliyun.com/document_detail/449217.html) API operation.
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
      templateConfigShrink: 'TemplateConfig',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateConfigShrink: 'string',
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

