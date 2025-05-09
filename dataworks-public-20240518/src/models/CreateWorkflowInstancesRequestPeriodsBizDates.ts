// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestPeriodsBizDates extends $dara.Model {
  /**
   * @remarks
   * The end date of the business.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-24
   */
  endBizDate?: string;
  /**
   * @remarks
   * The start business date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-20
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      endBizDate: 'EndBizDate',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endBizDate: 'string',
      startBizDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

