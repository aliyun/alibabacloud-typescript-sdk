// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstancesRequestLifecycleHookContext extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the lifecycle hook. Valid Values:
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
   * The IDs of the lifecycle hooks that you want to disable.
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

