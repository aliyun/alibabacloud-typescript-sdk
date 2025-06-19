// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestPeriodsBizDates extends $dara.Model {
  /**
   * @remarks
   * The data timestamp at which data is no longer backfilled. Configure this parameter in the `yyyy-mm-dd` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-24
   */
  endBizDate?: string;
  /**
   * @remarks
   * The data timestamp at which the data starts to be backfilled. Configure this parameter in the `yyyy-mm-dd` format.
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

