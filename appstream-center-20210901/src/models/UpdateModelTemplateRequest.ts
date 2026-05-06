// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelTemplateRequest extends $dara.Model {
  /**
   * @example
   * {
   * 	"defaults": {
   * 		"model": {
   * 			"primary": "bailian/qwen3.5-plus"
   * 		}
   * 	}
   * }
   */
  config?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @example
   * model-template-001
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      modelTemplateId: 'ModelTemplateId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      modelTemplateId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

