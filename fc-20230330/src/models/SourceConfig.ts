// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore. The trigger periodically subscribes to data from this Logstore and then triggers the function.
   * 
   * @example
   * my-sls-logstore-name
   */
  logstore?: string;
  /**
   * @remarks
   * The start time of consumption. Unit: seconds. If you do not specify this parameter, consumption starts from the latest data. If this parameter is specified, a trigger event is generated for data written after the specified time. For consumption of existing data, the trigger interval is ignored to catch up with the consumption delay until the real-time trigger progress is caught up. When the catch-up is complete, the trigger starts to trigger function invocations based on the specified trigger event interval without delay.
   * 
   * @example
   * 1704790317
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

