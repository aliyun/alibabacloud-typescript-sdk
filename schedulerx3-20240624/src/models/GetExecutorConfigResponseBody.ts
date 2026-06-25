// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecutorConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The default global configuration for Data Integration tasks. This configuration specifies the default handling policies for different types of DDL messages. Example:
   * `{"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}`
   * 
   * The DDL message types are as follows:
   * 
   * - RENAMECOLUMN: `RENAME COLUMN`
   * 
   * - DROPTABLE: `DROP TABLE`
   * 
   * - CREATETABLE: `CREATE TABLE`
   * 
   * - MODIFYCOLUMN: `MODIFY COLUMN`
   * 
   * - TRUNCATETABLE: `TRUNCATE TABLE`
   * 
   * - DROPCOLUMN: `DROP COLUMN`
   * 
   * - ADDCOLUMN: `ADD COLUMN`
   * 
   * - RENAMETABLE: `RENAME TABLE`
   * 
   * When DataWorks receives a DDL message, it applies one of the following handling policies:
   * 
   * - WARNING: Discards the message and logs a warning in the Real-time Synchronization Task log.
   * 
   * - IGNORE: Discards the message without sending it to the Destination Data Source.
   * 
   * - CRITICAL: Causes the Real-time Synchronization Task to fail.
   * 
   * - NORMAL: Forwards the message to the Destination Data Source. Because handling of DDL messages can vary by Destination Data Source, DataWorks only forwards the message.
   * 
   * @example
   * [{"cluster":"c2c619b5129e0400fa3df263b249622aa","namespace":"default","service":"xxljob-http-demo1-svc"}]
   */
  config?: string;
  /**
   * @remarks
   * The type of the Executor.
   * 
   * @example
   * k8s_service
   */
  executorType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      executorType: 'ExecutorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      executorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutorConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned for the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The configuration data for the Executor.
   */
  data?: GetExecutorConfigResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * not support query script history, please upgrade engine version to 2.2.2+
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetExecutorConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

