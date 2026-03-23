// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceMetricsResponseBodyItems extends $dara.Model {
  description?: string;
  dimension?: string;
  groupKey?: string;
  groupKeyType?: string;
  method?: string;
  metricsKey?: string;
  metricsKeyAlias?: string;
  sortRule?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dimension: 'Dimension',
      groupKey: 'GroupKey',
      groupKeyType: 'GroupKeyType',
      method: 'Method',
      metricsKey: 'MetricsKey',
      metricsKeyAlias: 'MetricsKeyAlias',
      sortRule: 'SortRule',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dimension: 'string',
      groupKey: 'string',
      groupKeyType: 'string',
      method: 'string',
      metricsKey: 'string',
      metricsKeyAlias: 'string',
      sortRule: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMetricsResponseBody extends $dara.Model {
  DBInstanceName?: string;
  items?: DescribeDBInstanceMetricsResponseBodyItems[];
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      items: 'Items',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      items: { 'type': 'array', 'itemType': DescribeDBInstanceMetricsResponseBodyItems },
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

