// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test-template
   */
  name?: string;
  /**
   * @remarks
   * The [template parameters](https://help.aliyun.com/document_detail/448291.html).
   * 
   * @example
   * {"param": "sample"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The template ID.
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
      templateConfig: 'string',
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

