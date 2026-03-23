// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange extends $dara.Model {
  maxValue?: number;
  minValue?: number;
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
  DBInstanceClass?: string;
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
  DBInstanceClasses?: DescribeAvailableClassesResponseBodyDBInstanceClasses[];
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

