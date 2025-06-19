// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkflowInstancesRequestPeriodsBizDates } from "./CreateWorkflowInstancesRequestPeriodsBizDates";


export class CreateWorkflowInstancesRequestPeriods extends $dara.Model {
  /**
   * @remarks
   * The data timestamps. You can specify up to seven data timestamps.
   * 
   * This parameter is required.
   */
  bizDates?: CreateWorkflowInstancesRequestPeriodsBizDates[];
  /**
   * @remarks
   * The end time of data backfill. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. Default value: 23:59:59.
   * 
   * If you configure this parameter, you must also configure the StartTime parameter.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of data backfill. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. Default value: 00:00:00.
   * 
   * If you configure this parameter, you must also configure the EndTime parameter.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizDates: 'BizDates',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDates: { 'type': 'array', 'itemType': CreateWorkflowInstancesRequestPeriodsBizDates },
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizDates)) {
      $dara.Model.validateArray(this.bizDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

