// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The orchestration template description.
   * 
   * @example
   * this is test
   */
  description?: string;
  /**
   * @remarks
   * The template name.
   * 
   * Naming rules: The name can contain digits, Chinese characters, letters, and hyphens (-). The name must be 1 to 63 characters in length and cannot start with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * service-account-template
   */
  name?: string;
  /**
   * @remarks
   * The orchestration template tags.
   * 
   * @example
   * test
   */
  tags?: string;
  /**
   * @remarks
   * The template content in YAML format.
   * 
   * This parameter is required.
   * 
   * @example
   * apiVersion: v1\\nkind: ServiceAccount\\nmetadata:\\n  name: test-sa
   */
  template?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * - If the value is set to `kubernetes`, the template is displayed on the Orchestration Templates page in the console.
   * 
   * - If this parameter is left empty or set to other values, the template is not displayed on the Orchestration Templates page in the console.
   * 
   * Settings this parameter to `kubernetes` is recommended.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      tags: 'tags',
      template: 'template',
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      tags: 'string',
      template: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

