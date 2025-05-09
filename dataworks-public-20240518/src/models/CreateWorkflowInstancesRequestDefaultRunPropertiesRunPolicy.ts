// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy extends $dara.Model {
  /**
   * @remarks
   * The time when the instance finishes running. This parameter is required if you specify the RunPolicy parameter.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the instance can be run immediately during the time period in the future. Default value: false.
   * 
   * @example
   * false
   */
  immediately?: boolean;
  /**
   * @remarks
   * The time when the instance starts to run. This parameter is required if you specify the RunPolicy parameter.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the time period during which the data is backfilled. This parameter is required if you specify the RunPolicy parameter. Valid values:
   * 
   * *   Daily
   * *   Weekend
   * 
   * @example
   * Daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      immediately: 'Immediately',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      immediately: 'boolean',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

