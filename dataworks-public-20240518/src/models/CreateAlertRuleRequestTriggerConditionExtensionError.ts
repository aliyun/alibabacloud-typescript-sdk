// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRuleRequestTriggerConditionExtensionError extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to trigger an alert if a batch synchronization task is automatically rerun upon a failure.
   * 
   * @example
   * false
   */
  autoRerunAlertEnabled?: boolean;
  /**
   * @remarks
   * The IDs of the real-time computing tasks. This parameter is required when you monitor real-time computing tasks.
   */
  streamTaskIds?: number[];
  static names(): { [key: string]: string } {
    return {
      autoRerunAlertEnabled: 'AutoRerunAlertEnabled',
      streamTaskIds: 'StreamTaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunAlertEnabled: 'boolean',
      streamTaskIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.streamTaskIds)) {
      $dara.Model.validateArray(this.streamTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

