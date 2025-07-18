// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Field } from "./Field";
import { ColumnMetadata } from "./ColumnMetadata";


export class GetStatementResultResponseBodyDataColumnMetadata extends $dara.Model {
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

export class GetStatementResultResponseBodyDataRecordsRecords extends $dara.Model {
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

export class GetStatementResultResponseBodyDataRecords extends $dara.Model {
  records?: GetStatementResultResponseBodyDataRecordsRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetStatementResultResponseBodyDataRecordsRecords },
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

export class GetStatementResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of column metadata.
   */
  columnMetadata?: GetStatementResultResponseBodyDataColumnMetadata;
  /**
   * @remarks
   * Multiple rows of data.
   */
  records?: GetStatementResultResponseBodyDataRecords;
  /**
   * @remarks
   * Total number of entries.
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
      columnMetadata: GetStatementResultResponseBodyDataColumnMetadata,
      records: GetStatementResultResponseBodyDataRecords,
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

export class GetStatementResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the asynchronous call.
   */
  data?: GetStatementResultResponseBodyData;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * API execution status, with values as follows:
   * 
   * - **false**: Execution failed.
   * - **true**: Execution succeeded.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetStatementResultResponseBodyData,
      message: 'string',
      requestId: 'string',
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

