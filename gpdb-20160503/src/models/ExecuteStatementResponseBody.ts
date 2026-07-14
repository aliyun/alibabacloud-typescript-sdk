// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Field } from "./Field";
import { ColumnMetadata } from "./ColumnMetadata";


export class ExecuteStatementResponseBodyDataColumnMetadata extends $dara.Model {
  columnMetadata?: ColumnMetadata[];
  static names(): { [key: string]: string } {
    return {
      columnMetadata: 'ColumnMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMetadata: { 'type': 'array', 'itemType': ColumnMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.columnMetadata)) {
      $dara.Model.validateArray(this.columnMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResponseBodyDataRecordsRecords extends $dara.Model {
  record?: Field[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': Field },
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResponseBodyDataRecords extends $dara.Model {
  records?: ExecuteStatementResponseBodyDataRecordsRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ExecuteStatementResponseBodyDataRecordsRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResponseBodyData extends $dara.Model {
  columnMetadata?: ExecuteStatementResponseBodyDataColumnMetadata;
  records?: ExecuteStatementResponseBodyDataRecords;
  /**
   * @remarks
   * The total number of rows.
   * 
   * @example
   * 10
   */
  totalNumRows?: number;
  static names(): { [key: string]: string } {
    return {
      columnMetadata: 'ColumnMetadata',
      records: 'Records',
      totalNumRows: 'TotalNumRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMetadata: ExecuteStatementResponseBodyDataColumnMetadata,
      records: ExecuteStatementResponseBodyDataRecords,
      totalNumRows: 'number',
    };
  }

  validate() {
    if(this.columnMetadata && typeof (this.columnMetadata as any).validate === 'function') {
      (this.columnMetadata as any).validate();
    }
    if(this.records && typeof (this.records as any).validate === 'function') {
      (this.records as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
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
   * The result returned for synchronous calls.
   */
  data?: ExecuteStatementResponseBodyData;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * adbtest
   */
  database?: string;
  /**
   * @remarks
   * The task ID for asynchronous SQL execution.
   * 
   * @example
   * ABB39CC3
   */
  id?: string;
  /**
   * @remarks
   * The response message.
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
   * The access credential.
   * 
   * @example
   * acs:gpdb:cn-beijing:1033**:secret/testsecret-eG2AQGRIwQ0zFp4VA7mYL3uiCXTfDQbQ
   */
  secretArn?: string;
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * - **success**: The execution is successful.
   * - **fail**: The execution failed.
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

