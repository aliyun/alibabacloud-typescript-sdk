// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The check options.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The check target.
   * 
   * If the type parameter is set to NodePoolUpgrade, this parameter must be set to the node pool ID.
   * 
   * If other check types are selected, this parameter does not need to be set.
   * 
   * @example
   * np1f6779297c4444a3a1cdd29be8******
   */
  target?: string;
  /**
   * @remarks
   * The check type.
   * 
   * This parameter is required.
   * 
   * @example
   * NodePoolUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

