// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all lifecycle hooks are disabled when the scaling activity is triggered. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  disableLifecycleHook?: boolean;
  /**
   * @remarks
   * The IDs of the lifecycle hooks that are disabled.
   */
  ignoredLifecycleHookIds?: string[];
  static names(): { [key: string]: string } {
    return {
      disableLifecycleHook: 'DisableLifecycleHook',
      ignoredLifecycleHookIds: 'IgnoredLifecycleHookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableLifecycleHook: 'boolean',
      ignoredLifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ignoredLifecycleHookIds)) {
      $dara.Model.validateArray(this.ignoredLifecycleHookIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

