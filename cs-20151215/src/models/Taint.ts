// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Taint extends $dara.Model {
  /**
   * @remarks
   * The scheduling policy. Valid values:
   * 
   * - `NoSchedule`: Not tolerated. This affects only the scheduling process. Already scheduled pods are not affected. This applies only to newly added pods.
   * 
   * - `NoExecute`: Not tolerated. When the taint changes, the pod is evicted.
   * 
   * - `PreferNoSchedule`: Soft constraint. Existing pods on the node are not affected. The scheduler tries to avoid scheduling pods that do not tolerate the taint to the node.
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

