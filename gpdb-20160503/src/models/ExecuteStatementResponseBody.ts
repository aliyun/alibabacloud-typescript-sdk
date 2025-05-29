// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteStatementResponseBodyData } from "./ExecuteStatementResponseBodyData";


export class ExecuteStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the SQL statements were created.
   * 
   * @example
   * 2023-12-04T10:08:47+0800
   */
  createdAt?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The returned results of the synchronous call.
   */
  data?: ExecuteStatementResponseBodyData;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbtest
   */
  database?: string;
  /**
   * @remarks
   * The ID of the job for asynchronously executing the SQL statements.
   * 
   * @example
   * ABB39CC3
   */
  id?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The ARN of the access credential for the created Data API account.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      DBInstanceId: 'DBInstanceId',
      data: 'Data',
      database: 'Database',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      secretArn: 'SecretArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      DBInstanceId: 'string',
      data: ExecuteStatementResponseBodyData,
      database: 'string',
      id: 'string',
      message: 'string',
      requestId: 'string',
      secretArn: 'string',
      status: 'string',
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

