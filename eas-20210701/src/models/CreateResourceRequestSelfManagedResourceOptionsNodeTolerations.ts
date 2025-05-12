// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $dara.Model {
  /**
   * @remarks
   * The effect.
   * 
   * Valid values:
   * 
   * *   PreferNoSchedule
   * *   NoSchedule
   * *   NoExecute
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The relationship between key names and key values.
   * 
   * Valid values:
   * 
   * *   Equal
   * *   Exists
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The key value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

