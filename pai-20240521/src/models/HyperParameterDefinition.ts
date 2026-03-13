// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HyperParameterRange } from "./HyperParameterRange";


export class HyperParameterDefinition extends $dara.Model {
  defaultValue?: string;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  range?: HyperParameterRange;
  required?: boolean;
  /**
   * @remarks
   * This parameter is required.
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

