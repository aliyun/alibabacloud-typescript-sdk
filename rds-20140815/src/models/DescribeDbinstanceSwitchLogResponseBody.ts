// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSwitchLogResponseBodyItemsItem extends $dara.Model {
  affectedSessions?: string;
  HAStatus?: string;
  switchCauseCode?: string;
  switchCauseDetail?: string;
  switchFinishTime?: string;
  switchId?: string;
  switchStartTime?: string;
  totalSessions?: string;
  static names(): { [key: string]: string } {
    return {
      affectedSessions: 'AffectedSessions',
      HAStatus: 'HAStatus',
      switchCauseCode: 'SwitchCauseCode',
      switchCauseDetail: 'SwitchCauseDetail',
      switchFinishTime: 'SwitchFinishTime',
      switchId: 'SwitchId',
      switchStartTime: 'SwitchStartTime',
      totalSessions: 'TotalSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedSessions: 'string',
      HAStatus: 'string',
      switchCauseCode: 'string',
      switchCauseDetail: 'string',
      switchFinishTime: 'string',
      switchId: 'string',
      switchStartTime: 'string',
      totalSessions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSwitchLogResponseBodyItems extends $dara.Model {
  item?: DescribeDBInstanceSwitchLogResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeDBInstanceSwitchLogResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSwitchLogResponseBody extends $dara.Model {
  /**
   * @example
   * rdsaiiabnaiiabn
   */
  DBInstanceName?: string;
  items?: DescribeDBInstanceSwitchLogResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 60
   */
  pageRecordCount?: number;
  /**
   * @example
   * D1CA494F-CC13-4EB6-8C4D-5352EE4045BD
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      items: DescribeDBInstanceSwitchLogResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

