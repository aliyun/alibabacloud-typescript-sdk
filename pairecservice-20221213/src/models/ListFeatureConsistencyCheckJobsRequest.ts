// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. To obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `ASC`: Ascending order.
   * 
   * - `DESC`: Descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The field to sort the results by. Valid values:
   * 
   * - `GmtCreateTime`: Sorts by creation time.
   * 
   * - `GmtModifiedTime`: Sorts by modification time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * - `ToRun`: Waiting to run.
   * 
   * - `Running`: In progress.
   * 
   * - `Success`: Successful.
   * 
   * - `Failure`: Failed.
   * 
   * - `Stopped`: Stopped or canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

