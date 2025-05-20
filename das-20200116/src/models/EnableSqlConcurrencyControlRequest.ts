// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSqlConcurrencyControlRequest extends $dara.Model {
  /**
   * @remarks
   * The duration within which the SQL throttling rule takes effect. Unit: seconds.
   * 
   * >  The throttling rule takes effect only within this duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  concurrencyControlTime?: number;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You must specify the instance ID only if your database instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of concurrent SQL statements. Set this parameter to a positive integer.
   * 
   * >  When the number of concurrent SQL statements that contain the specified keywords reaches this upper limit, the throttling rule is triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The keywords that are used to identify the SQL statements that need to be throttled.
   * 
   * >  If you specify multiple SQL keywords, separate them with tildes (~). If the number of concurrent SQL statements that contain all the specified SQL keywords reaches the specified upper limit, the throttling rule is triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * call~open~api~test~4~from~POP
   */
  sqlKeywords?: string;
  /**
   * @remarks
   * The type of the SQL statements. Valid values:
   * 
   * *   **SELECT**
   * *   **UPDATE**
   * *   **DELETE**
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      concurrencyControlTime: 'ConcurrencyControlTime',
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      maxConcurrency: 'MaxConcurrency',
      sqlKeywords: 'SqlKeywords',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyControlTime: 'number',
      consoleContext: 'string',
      instanceId: 'string',
      maxConcurrency: 'number',
      sqlKeywords: 'string',
      sqlType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

