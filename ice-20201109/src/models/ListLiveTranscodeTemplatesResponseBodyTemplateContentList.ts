// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig } from "./ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig";


export class ListLiveTranscodeTemplatesResponseBodyTemplateContentList extends $dara.Model {
  /**
   * @remarks
   * The category of the template. Valid values:
   * 
   * @example
   * system
   */
  category?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-07-20T03:26:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my_template
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the template.
   */
  templateConfig?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9b1571b513cb44f7a1ba6ae561ff46f7
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
      templateConfig: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig,
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

