// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Taint extends $dara.Model {
  /**
   * @remarks
   * The scheduling policy. Valid values:
   * 
   * *   `NoSchedule`: This taint is not tolerated. However, pods that are already scheduled to the node are not affected.
   * *   `NoExecute`: Pods that do not tolerate this taint are evicted after this taint is added to the node.
   * *   `PreferNoSchedule`: This value specifies a soft limit on pods. Existing pods on the node are not affected. The scheduler attempts to avoid scheduling pods that cannot tolerate the taint to the node.
   * 
   * Default value: `NoSchedule`.
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The `key` of the taint.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The `value` of the taint.
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

