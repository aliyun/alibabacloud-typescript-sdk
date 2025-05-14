// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyNodeErrorRecovery extends $dara.Model {
  /**
   * @remarks
   * The number of seconds to wait before automatic switchover.
   * 
   * @example
   * 30
   */
  autoSwitchCountdownSeconds?: number;
  /**
   * @remarks
   * Indicates whether to enable automatic switchover when a node error occurs.
   * 
   * @example
   * true
   */
  enableAutoSwitchOnNodeError?: boolean;
  /**
   * @remarks
   * Indicates whether the node has an error.
   * 
   * @example
   * false
   */
  hasNodeError?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSwitchCountdownSeconds: 'autoSwitchCountdownSeconds',
      enableAutoSwitchOnNodeError: 'enableAutoSwitchOnNodeError',
      hasNodeError: 'hasNodeError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitchCountdownSeconds: 'number',
      enableAutoSwitchOnNodeError: 'boolean',
      hasNodeError: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

