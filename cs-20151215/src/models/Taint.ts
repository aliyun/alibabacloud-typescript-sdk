// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Taint extends $dara.Model {
  /**
   * @remarks
   * The scheduling policy. Valid values:
   * 
   * - `NoSchedule`: Not tolerated. It affects only the scheduling process and applies only to newly added pods. Already scheduled pods are not affected.
   * 
   * - `NoExecute`: Not tolerated. Pods are evicted when the taint changes.
   * 
   * - `PreferNoSchedule`: Soft constraint. Existing pods on the node are not affected. The system tries to avoid scheduling pods that do not meet the requirements to the node.
   * 
   * Default value: `NoSchedule`.
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key of the taint.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the taint.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
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

