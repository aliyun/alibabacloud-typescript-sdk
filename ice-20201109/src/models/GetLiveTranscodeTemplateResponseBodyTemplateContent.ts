// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig } from "./GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig";


export class GetLiveTranscodeTemplateResponseBodyTemplateContent extends $dara.Model {
  /**
   * @remarks
   * The category of the template. Valid values:
   * 
   * *   system
   * *   customized
   * 
   * @example
   * customized
   */
  category?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-07-25T06:15:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * my-template
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the template.
   */
  templateConfig?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * bcfa57950bc649b2abfb476ecd36ea4f
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      name: 'Name',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      name: 'string',
      templateConfig: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig,
      templateId: 'string',
      type: 'string',
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

