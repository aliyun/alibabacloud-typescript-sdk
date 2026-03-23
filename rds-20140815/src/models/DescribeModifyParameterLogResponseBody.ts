// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyParameterLogResponseBodyItemsParameterChangeLog extends $dara.Model {
  modifyTime?: string;
  newParameterValue?: string;
  oldParameterValue?: string;
  parameterName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      newParameterValue: 'NewParameterValue',
      oldParameterValue: 'OldParameterValue',
      parameterName: 'ParameterName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      newParameterValue: 'string',
      oldParameterValue: 'string',
      parameterName: 'string',
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

export class DescribeModifyParameterLogResponseBodyItems extends $dara.Model {
  parameterChangeLog?: DescribeModifyParameterLogResponseBodyItemsParameterChangeLog[];
  static names(): { [key: string]: string } {
    return {
      parameterChangeLog: 'ParameterChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterChangeLog: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyItemsParameterChangeLog },
    };
  }

  validate() {
    if(Array.isArray(this.parameterChangeLog)) {
      $dara.Model.validateArray(this.parameterChangeLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBody extends $dara.Model {
  DBInstanceId?: string;
  engine?: string;
  engineVersion?: string;
  items?: DescribeModifyParameterLogResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      items: DescribeModifyParameterLogResponseBodyItems,
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

