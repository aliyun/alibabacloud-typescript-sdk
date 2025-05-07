// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   **Master**: primary instance
   * *   **Readonly**: read-only instance
   * 
   * @example
   * Master
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The latency at which the read-only instances replicate data. The read-only instances replicate data from the primary instance at the latency that is specified by the **ReadonlyInstanceSQLDelayedTime** parameter. Unit: seconds.
   * 
   * @example
   * 30
   */
  readonlyInstanceSQLDelayedTime?: string;
  /**
   * @remarks
   * The read weight that the system calculates in real time for the instance.
   * 
   * @example
   * 100
   */
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

