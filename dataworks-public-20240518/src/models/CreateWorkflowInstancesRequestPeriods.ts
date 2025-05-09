// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkflowInstancesRequestPeriodsBizDates } from "./CreateWorkflowInstancesRequestPeriodsBizDates";


export class CreateWorkflowInstancesRequestPeriods extends $dara.Model {
  /**
   * @remarks
   * The list of business dates. You can specify a multi-segment business date (up to 7 segments).
   * 
   * This parameter is required.
   */
  bizDates?: CreateWorkflowInstancesRequestPeriodsBizDates[];
  /**
   * @remarks
   * Specifies the end cycle time. Default value: 23:59:59.
   * 
   * If you enter this field, StartTime and EndTime must be filled in at the same time.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies the start cycle time. Default value: 00:00:00.
   * 
   * If you enter this field, StartTime and EndTime must be filled in at the same time.
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

