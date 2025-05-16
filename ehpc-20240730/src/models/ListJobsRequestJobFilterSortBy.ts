// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequestJobFilterSortBy extends $dara.Model {
  /**
   * @remarks
   * The order in which jobs are sorted based on their execution time. Valid values:
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * asc
   */
  executeOrder?: string;
  /**
   * @remarks
   * The order in which jobs are sorted based on their queuing time. Valid values:
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * desc
   */
  pendOrder?: string;
  /**
   * @remarks
   * The order in which jobs are sorted based on their submitting time. Valid values:
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * asc
   */
  submitOrder?: string;
  static names(): { [key: string]: string } {
    return {
      executeOrder: 'ExecuteOrder',
      pendOrder: 'PendOrder',
      submitOrder: 'SubmitOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeOrder: 'string',
      pendOrder: 'string',
      submitOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

