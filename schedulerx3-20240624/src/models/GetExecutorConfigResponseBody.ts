// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecutorConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The default global configuration content for the Data Integration synchronization Solutions node, which specifies the default processing policy for different DDL message types. Example:
   * {"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}
   * 
   * DDL message types:
   * - RENAMECOLUMN: Rename a column.
   * - DROPTABLE: Delete a table.
   * - CREATETABLE: Create a table.
   * - MODIFYCOLUMN: Modify a column type.
   * - TRUNCATETABLE: Truncate a table.
   * - DROPCOLUMN: Delete a column.
   * - ADDCOLUMN: Add a column.
   * - RENAMETABLE: Rename a table.
   * 
   * When DataWorks receives a DDL message of the corresponding type, the processing policy is as follows:
   * - WARNING: Discard the message directly and record alerting information in the real-time synchronization log, indicating that the message was discarded due to an execute error.
   * - IGNORE: Discard the message directly without sending it to the destination data source.
   * - CRITICAL: Set the real-time synchronization node to the error state and stop the node.
   * - NORMAL: Forward the message to the destination data source for processing. Because different destination data sources may have a different processing policy for DDL messages, DataWorks only forwards the message.
   * 
   * @example
   * [{"cluster":"c2c619b5129e0400fa3df263b249622aa","namespace":"default","service":"xxljob-http-demo1-svc"}]
   */
  config?: string;
  /**
   * @remarks
   * The executor type.
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
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The query result.
   */
  data?: GetExecutorConfigResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * not support query script history, please upgrade engine version to 2.2.2+
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
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

