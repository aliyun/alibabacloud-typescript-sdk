// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HyperParameterRange } from "./HyperParameterRange";


export class HyperParameterDefinition extends $dara.Model {
  /**
   * @example
   * 0
   */
  defaultValue?: string;
  description?: string;
  /**
   * @example
   * Batch Size
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * batch_size
   */
  name?: string;
  range?: HyperParameterRange;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Integer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      range: 'Range',
      required: 'Required',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      displayName: 'string',
      name: 'string',
      range: HyperParameterRange,
      required: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

