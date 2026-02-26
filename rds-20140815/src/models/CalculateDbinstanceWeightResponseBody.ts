// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight extends $dara.Model {
  DBInstanceId?: string;
  DBInstanceType?: string;
  readonlyInstanceSQLDelayedTime?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      readonlyInstanceSQLDelayedTime: 'ReadonlyInstanceSQLDelayedTime',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceType: 'string',
      readonlyInstanceSQLDelayedTime: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateDBInstanceWeightResponseBodyItems extends $dara.Model {
  DBInstanceWeight?: CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceWeight: 'DBInstanceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceWeight: { 'type': 'array', 'itemType': CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceWeight)) {
      $dara.Model.validateArray(this.DBInstanceWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateDBInstanceWeightResponseBody extends $dara.Model {
  items?: CalculateDBInstanceWeightResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C816A4BF-A6EC-4722-95F9-2055859CCFD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: CalculateDBInstanceWeightResponseBodyItems,
      requestId: 'string',
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

