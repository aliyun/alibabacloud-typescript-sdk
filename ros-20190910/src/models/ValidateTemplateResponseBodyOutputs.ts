// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateResponseBodyOutputs extends $dara.Model {
  /**
   * @remarks
   * The description of the template output.
   * 
   * @example
   * The instance ID of my ECS.
   */
  description?: string;
  /**
   * @remarks
   * The alias of the template output.
   * 
   * @example
   * Instance ID
   */
  label?: string;
  /**
   * @remarks
   * The name of the template output.
   * 
   * @example
   * instance_id
   */
  outputKey?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      outputKey: 'OutputKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      outputKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

