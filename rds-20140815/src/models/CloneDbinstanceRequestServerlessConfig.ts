// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDBInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic start and stop feature for the serverless ApsaraDB RDS for MySQL instance. After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection is established to the instance, the instance is automatically resumed. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > *   This parameter is supported only for serverless ApsaraDB RDS for MySQL instances.
   * > *   This parameter is available only on the China site (aliyun.com).
   * 
   * @example
   * true
   */
  autoPause?: boolean;
  /**
   * @remarks
   * The maximum number of RDS Capacity Units (RCUs). Valid values:
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **1 to 8**
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 8**
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **1 to 12**
   * 
   * > *   The value of this parameter must be greater than or equal to the value of **MinCapacity** and can be specified only to an **integer**.
   * > *   This parameter is available only on the China site (aliyun.com).
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of RCUs. Valid values:
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **0.5 to 8**.
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 8**. Only integers are supported.
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **0.5 to 12**.
   * 
   * > *   The value of this parameter must be less than or equal to the value of **MaxCapacity**.
   * > *   This parameter is available only on the China site (aliyun.com).
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable the forced scaling feature for the serverless ApsaraDB RDS for MySQL instance. In most cases, ApsaraDB RDS automatically scales in or out the RCUs of a serverless instance based on business requirements in real time. In rare cases, the scaling does not take effect in real time. You can enable the forced scaling feature to forcefully scales in or out the RCUs of the instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > 
   * 
   * *   This parameter is supported only for serverless ApsaraDB RDS for MySQL instances.
   * 
   * *   This parameter is available only on the China site (aliyun.com).
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

