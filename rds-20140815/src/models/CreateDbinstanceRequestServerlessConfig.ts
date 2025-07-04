// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic startup and stop feature for the serverless instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter is required only for serverless instances that run MySQL and PostgreSQL. After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection to the instance is established, the instance is resumed.
   * 
   * @example
   * true
   */
  autoPause?: boolean;
  /**
   * @remarks
   * The maximum number of RDS Capacity Units (RCUs). Valid values:
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **1 to 32**
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 16**
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **1 to 14**
   * 
   * >  The value of this parameter must be greater than or equal to the value of the **MinCapacity** parameter and can be set only to an **integer**.
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of RCUs. Valid values:
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **0.5 to 32**.
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 16**. Only integers are supported.
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **0.5 to 14**
   * 
   * >  The value of this parameter must be less than or equal to the value of the **MaxCapacity** parameter.
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable the forced scaling feature for the serverless instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > *   This parameter is required only for serverless instances that run MySQL and PostgreSQL. If you set this parameter to true, a service interruption that lasts approximately 30 to 120 seconds occurs during forced scaling. Process with caution.
   * > *   The RCU scaling for a serverless instance immediately takes effect. In some cases, such as the execution of large transactions, the scaling does not immediately take effect. In this case, you can enable this feature to forcefully scale the RCUs of the instance.
   * 
   * @example
   * false
   */
  switchForce?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPause: 'AutoPause',
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
      switchForce: 'SwitchForce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPause: 'boolean',
      maxCapacity: 'number',
      minCapacity: 'number',
      switchForce: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

