// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLCollectorRetentionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Log retention period of SQL Explorer logs. Valid values:
   * * **30**: 30 days.
   * * **180**: 180 days.
   * * **365**: 1 year.
   * * **1095**: 3 years.
   * * **1825**: 5 years.
   * 
   * > Log retention period of SQL Explorer logs for ApsaraDB RDS for PostgreSQL and ApsaraDB RDS for SQL Server is fixed at 30 days.
   * 
   * @example
   * 365
   */
  configValue?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5CEDCC2-CA75-43F7-9508-92F418CE6391
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

