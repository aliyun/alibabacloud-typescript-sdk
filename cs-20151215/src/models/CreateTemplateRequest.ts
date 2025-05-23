// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * this is test
   */
  description?: string;
  /**
   * @remarks
   * The name of the orchestration template.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * service-account-template
   */
  name?: string;
  /**
   * @remarks
   * The label of the template.
   * 
   * @example
   * test
   */
  tags?: string;
  /**
   * @remarks
   * The template content in the YAML format.
   * 
   * This parameter is required.
   * 
   * @example
   * apiVersion: v1\\nkind: ServiceAccount\\nmetadata:\\n  name: test-sa
   */
  template?: string;
  /**
   * @remarks
   * The template type.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If this parameter is not specified or the value is set to another value, the template is not displayed on the Orchestration Template page in the console.
   * 
   * We recommend that you set the parameter to `kubernetes`.
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

