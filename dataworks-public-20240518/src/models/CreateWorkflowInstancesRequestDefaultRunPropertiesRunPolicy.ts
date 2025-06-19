// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy extends $dara.Model {
  /**
   * @remarks
   * The end time of running. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. This parameter is required if you configure the RunPolicy parameter.
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
   * The start time of running. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. This parameter is required if you configure the RunPolicy parameter.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the time period during which the data is backfilled. This parameter is required if you configure the RunPolicy parameter.
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

