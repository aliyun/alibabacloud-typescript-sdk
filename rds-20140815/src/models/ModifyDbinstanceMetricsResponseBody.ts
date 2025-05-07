// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pgm-bp1s1j103lo6****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B55934BB-FFAA-5276-80A8-E0FDB12810B3
   */
  requestId?: string;
  /**
   * @remarks
   * The application scope of this modification. Valid values:
   * 
   * *   **instance**: This modification is applied only to the current instance.
   * *   **region**: This modification is applied to all ApsaraDB RDS for PostgreSQL instances that are equipped with the same type of storage media as the current instance in the region to which the current instance belongs.
   * 
   * @example
   * instance
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

