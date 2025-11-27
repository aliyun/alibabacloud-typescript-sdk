// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange extends $dara.Model {
  /**
   * @remarks
   * The maximum storage capacity that is supported for the instance. Unit: GB.
   * 
   * @example
   * 2000
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum storage capacity that is supported for the instance. Unit: GB.
   * 
   * @example
   * 5
   */
  minValue?: number;
  /**
   * @remarks
   * The minimum step size at which you can adjust the storage capacity of the instance. The minimum step size is 5 GB.
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
   * The instance type of the instance.
   * 
   * @example
   * rds.mysql.c1.large
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The storage capacity range that is supported for the instance.
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
   * An array that consists of the instance types available for the instance.
   */
  DBInstanceClasses?: DescribeAvailableClassesResponseBodyDBInstanceClasses[];
  /**
   * @remarks
   * The ID of the request.
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

