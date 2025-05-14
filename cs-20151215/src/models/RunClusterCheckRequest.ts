// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster check items.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The target to be checked.
   * 
   * @example
   * np1f6779297c4444a3a1cdd29be8e5****
   */
  target?: string;
  /**
   * @remarks
   * The check method.
   * 
   * This parameter is required.
   * 
   * @example
   * ClusterUpgrade
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

