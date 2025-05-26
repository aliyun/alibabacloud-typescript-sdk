// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FastFailPolicy } from "./FastFailPolicy";


export class CreateTriggerRequestActions extends $dara.Model {
  /**
   * @remarks
   * The policy configurations for handling failures.
   */
  fastFailPolicy?: FastFailPolicy;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * doc/convert
   */
  name?: string;
  /**
   * @remarks
   * The template parameters.
   */
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      fastFailPolicy: 'FastFailPolicy',
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastFailPolicy: FastFailPolicy,
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.fastFailPolicy && typeof (this.fastFailPolicy as any).validate === 'function') {
      (this.fastFailPolicy as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

