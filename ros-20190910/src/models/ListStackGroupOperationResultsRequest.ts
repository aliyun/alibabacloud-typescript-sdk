// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupOperationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * You can call the [ListStackGroupOperations](https://help.aliyun.com/document_detail/151342.html) operation to query the operation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Valid values: 1 to 50.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack group.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

