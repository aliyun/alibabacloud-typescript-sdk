// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecRequestServerlessConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic start and stop feature for the serverless instance that runs MySQL or PostgreSQL. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection to the instance is established, the instance is automatically resumed.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  autoPause?: boolean;
  /**
   * @remarks
   * The **maximum** number of RDS Capacity Units (RCUs). Valid values:
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **1 to 32**
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 16**. Only integers are supported.
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **1 to 14**
   * 
   * >  The value of this parameter must be greater than or equal to the value of **MinCapacity**.
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of RCUs. Valid values:****
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **0.5 to 32**.
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 8**. Only integers are supported.
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **0.5 to 14**.
   * 
   * >  The value of this parameter must be less than or equal to the value of MaxCapacity.
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable the forceful scaling feature for the serverless instance that runs MySQL or PostgreSQL. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > 
   * 
   * *   If you set this parameter to true, **a service interruption that lasts 30 to 120 seconds occurs during forced scaling**. Process with caution.
   * 
   * *   The RCU scaling for a serverless instance immediately takes effect. In some cases, such as the execution of large transactions, the scaling does not immediately take effect. In this case, you can enable this feature to forcefully scale the RCUs of the instance.
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

