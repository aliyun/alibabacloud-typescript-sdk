// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCalculationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of A/B metric IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2,3,4
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * The end date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-03
   */
  endDate?: string;
  /**
   * @remarks
   * The instance ID. Call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The start date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricIds: 'ABMetricIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricIds: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

