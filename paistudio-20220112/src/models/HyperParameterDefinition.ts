// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HyperParameterRange } from "./HyperParameterRange";


export class HyperParameterDefinition extends $dara.Model {
  /**
   * @remarks
   * The default value of the hyperparameter.
   * 
   * @example
   * 0
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the hyperparameter.
   * 
   * @example
   * 参数定义了训练的batch_size。
   */
  description?: string;
  /**
   * @remarks
   * The display name of the parameter.
   * 
   * @example
   * Batch Size
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * batch_size
   */
  name?: string;
  /**
   * @remarks
   * The value range of the parameter.
   */
  range?: HyperParameterRange;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * The type of the hyperparameter.
   * 
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

