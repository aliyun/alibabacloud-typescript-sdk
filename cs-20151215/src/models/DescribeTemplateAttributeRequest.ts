// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The templatetype.
   * 
   * - If you set this parameter to `kubernetes`, the template is displayed on the Orchestration Templates page in the console.
   * 
   * - If you leave this parameter empty or set it to other values, the template is not displayed on the Orchestration Templates page in the console.
   * 
   * Settings this parameter to `kubernetes` is recommended.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

