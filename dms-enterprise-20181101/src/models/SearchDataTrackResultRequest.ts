// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDataTrackResultRequestColumnFilter } from "./SearchDataTrackResultRequestColumnFilter";


export class SearchDataTrackResultRequest extends $dara.Model {
  /**
   * @remarks
   * The condition to filter columns.
   */
  columnFilter?: SearchDataTrackResultRequestColumnFilter;
  /**
   * @remarks
   * The end time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2023-04-23 10:00:00
   */
  filterEndTime?: string;
  /**
   * @remarks
   * The start time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2023-04-23 00:00:00
   */
  filterStartTime?: string;
  /**
   * @remarks
   * The names of the tables for which you want to track data operations.
   */
  filterTableList?: string[];
  /**
   * @remarks
   * The types of data operations that you want to track.
   */
  filterTypeList?: string[];
  /**
   * @remarks
   * The ID of the ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 420****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 62***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnFilter: 'ColumnFilter',
      filterEndTime: 'FilterEndTime',
      filterStartTime: 'FilterStartTime',
      filterTableList: 'FilterTableList',
      filterTypeList: 'FilterTypeList',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnFilter: SearchDataTrackResultRequestColumnFilter,
      filterEndTime: 'string',
      filterStartTime: 'string',
      filterTableList: { 'type': 'array', 'itemType': 'string' },
      filterTypeList: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(this.columnFilter && typeof (this.columnFilter as any).validate === 'function') {
      (this.columnFilter as any).validate();
    }
    if(Array.isArray(this.filterTableList)) {
      $dara.Model.validateArray(this.filterTableList);
    }
    if(Array.isArray(this.filterTypeList)) {
      $dara.Model.validateArray(this.filterTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

