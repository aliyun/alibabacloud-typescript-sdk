// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuousStrategy extends $dara.Model {
  /**
   * @remarks
   * The data arrival delay in minutes. After a window ends, the system waits for this duration before creating a run to allow data to arrive completely. Default value: 0.
   * 
   * @example
   * 5
   */
  dataDelayMinutes?: number;
  /**
   * @remarks
   * Specifies whether to enable continuous evaluation. If this parameter is not specified or is set to true, continuous evaluation is enabled. If this parameter is set to false, continuous evaluation is disabled but the configuration is retained.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The unit of the continuous evaluation window interval. This field is required for the current polling implementation.
   * 
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @remarks
   * The size of the continuous evaluation window interval. This parameter is used together with intervalUnit. The value must be greater than 0.
   * 
   * @example
   * 1
   */
  intervalValue?: number;
  static names(): { [key: string]: string } {
    return {
      dataDelayMinutes: 'dataDelayMinutes',
      enabled: 'enabled',
      intervalUnit: 'intervalUnit',
      intervalValue: 'intervalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDelayMinutes: 'number',
      enabled: 'boolean',
      intervalUnit: 'string',
      intervalValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

