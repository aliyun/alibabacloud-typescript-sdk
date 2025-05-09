// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDIJobRequestRealtimeStartSettingsFailoverSettings extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use advanced parameters for failover settings when you create a task.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is deprecated. Use advanced parameters for failover settings when you create a task.
   * 
   * @example
   * 30
   * 
   * @deprecated
   */
  upperLimit?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      upperLimit: 'UpperLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      upperLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

