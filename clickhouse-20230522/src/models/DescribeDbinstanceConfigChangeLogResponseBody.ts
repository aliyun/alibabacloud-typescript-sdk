// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceConfigChangeLogResponseBodyDataParamChangeLogs extends $dara.Model {
  applied?: boolean;
  /**
   * @example
   * 2025-06-25 13:46:06
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-06-25 13:46:06
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  ID?: number;
  /**
   * @example
   * max_concurrent_queries
   */
  name?: string;
  /**
   * @example
   * 100
   */
  newValue?: string;
  /**
   * @example
   * 50
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      applied: 'Applied',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      ID: 'ID',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applied: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      ID: 'number',
      name: 'string',
      newValue: 'string',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigChangeLogResponseBodyData extends $dara.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  paramChangeLogs?: DescribeDBInstanceConfigChangeLogResponseBodyDataParamChangeLogs[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      paramChangeLogs: 'ParamChangeLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      paramChangeLogs: { 'type': 'array', 'itemType': DescribeDBInstanceConfigChangeLogResponseBodyDataParamChangeLogs },
    };
  }

  validate() {
    if(Array.isArray(this.paramChangeLogs)) {
      $dara.Model.validateArray(this.paramChangeLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigChangeLogResponseBody extends $dara.Model {
  data?: DescribeDBInstanceConfigChangeLogResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 780DE414-*********-88BE-A2E21B862B57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceConfigChangeLogResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

