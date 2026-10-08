// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange extends $dara.Model {
  /**
   * @remarks
   * The maximum storage capacity. Unit: GB.
   * 
   * @example
   * 2000
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum storage capacity. Unit: GB.
   * 
   * @example
   * 5
   */
  minValue?: number;
  /**
   * @remarks
   * The minimum granularity for storage capacity adjustment. The value is fixed at 5 GB increments.
   * 
   * @example
   * 5
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableClassesResponseBodyDBInstanceClasses extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * rds.mysql.c1.large
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance storage capacity range.
   */
  DBInstanceStorageRange?: DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorageRange: 'DBInstanceStorageRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      DBInstanceStorageRange: DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange,
    };
  }

  validate() {
    if(this.DBInstanceStorageRange && typeof (this.DBInstanceStorageRange as any).validate === 'function') {
      (this.DBInstanceStorageRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableClassesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available instance types for the instance.
   */
  DBInstanceClasses?: DescribeAvailableClassesResponseBodyDBInstanceClasses[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E4448A6-9FE6-4474-A0C1-AA7CFC772CAC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClasses: 'DBInstanceClasses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableClassesResponseBodyDBInstanceClasses },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceClasses)) {
      $dara.Model.validateArray(this.DBInstanceClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

