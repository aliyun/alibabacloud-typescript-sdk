// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchExecuteStatementResult extends $tea.Model {
  generatedFieldsList?: Field[][];
  static names(): { [key: string]: string } {
    return {
      generatedFieldsList: 'GeneratedFieldsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generatedFieldsList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': Field } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginTransactionResult extends $tea.Model {
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColumnMetadata extends $tea.Model {
  arrayBaseColumnType?: number;
  isAutoIncrement?: boolean;
  isCaseSensitive?: boolean;
  isCurrency?: boolean;
  isSigned?: boolean;
  label?: string;
  name?: string;
  nullable?: number;
  precision?: number;
  scale?: number;
  schemaName?: string;
  tableName?: string;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayBaseColumnType: 'ArrayBaseColumnType',
      isAutoIncrement: 'IsAutoIncrement',
      isCaseSensitive: 'IsCaseSensitive',
      isCurrency: 'IsCurrency',
      isSigned: 'IsSigned',
      label: 'Label',
      name: 'Name',
      nullable: 'Nullable',
      precision: 'Precision',
      scale: 'Scale',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayBaseColumnType: 'number',
      isAutoIncrement: 'boolean',
      isCaseSensitive: 'boolean',
      isCurrency: 'boolean',
      isSigned: 'boolean',
      label: 'string',
      name: 'string',
      nullable: 'number',
      precision: 'number',
      scale: 'number',
      schemaName: 'string',
      tableName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitTransactionResult extends $tea.Model {
  transactionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      transactionStatus: 'TransactionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResult extends $tea.Model {
  numberOfRecordsUpdated?: number;
  static names(): { [key: string]: string } {
    return {
      numberOfRecordsUpdated: 'NumberOfRecordsUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numberOfRecordsUpdated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResult extends $tea.Model {
  columnMetadata?: ColumnMetadata[];
  formattedRecords?: string;
  generatedFields?: Field[];
  numberOfRecordsUpdated?: number;
  records?: Field[][];
  static names(): { [key: string]: string } {
    return {
      columnMetadata: 'ColumnMetadata',
      formattedRecords: 'FormattedRecords',
      generatedFields: 'GeneratedFields',
      numberOfRecordsUpdated: 'NumberOfRecordsUpdated',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMetadata: { 'type': 'array', 'itemType': ColumnMetadata },
      formattedRecords: 'string',
      generatedFields: { 'type': 'array', 'itemType': Field },
      numberOfRecordsUpdated: 'number',
      records: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': Field } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Field extends $tea.Model {
  arrayValue?: string;
  blobValue?: string;
  booleanValue?: boolean;
  isNull?: boolean;
  longValue?: number;
  stringValue?: string;
  static names(): { [key: string]: string } {
    return {
      arrayValue: 'ArrayValue',
      blobValue: 'BlobValue',
      booleanValue: 'BooleanValue',
      isNull: 'IsNull',
      longValue: 'LongValue',
      stringValue: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayValue: 'string',
      blobValue: 'string',
      booleanValue: 'boolean',
      isNull: 'boolean',
      longValue: 'number',
      stringValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertListResult extends $tea.Model {
  autoIncrementKeys?: number[];
  numberOfRecordsUpdated?: number;
  static names(): { [key: string]: string } {
    return {
      autoIncrementKeys: 'AutoIncrementKeys',
      numberOfRecordsUpdated: 'NumberOfRecordsUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementKeys: { 'type': 'array', 'itemType': 'number' },
      numberOfRecordsUpdated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertResult extends $tea.Model {
  autoIncrementKey?: number;
  numberOfRecordsUpdated?: number;
  static names(): { [key: string]: string } {
    return {
      autoIncrementKey: 'AutoIncrementKey',
      numberOfRecordsUpdated: 'NumberOfRecordsUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementKey: 'number',
      numberOfRecordsUpdated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultSetOptions extends $tea.Model {
  decimalReturnType?: string;
  longReturnType?: string;
  static names(): { [key: string]: string } {
    return {
      decimalReturnType: 'DecimalReturnType',
      longReturnType: 'LongReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decimalReturnType: 'string',
      longReturnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackTransactionResult extends $tea.Model {
  transactionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      transactionStatus: 'TransactionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResult extends $tea.Model {
  records?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Selector extends $tea.Model {
  eq?: string;
  ge?: string;
  gt?: string;
  le?: string;
  like?: string;
  lt?: string;
  ne?: string;
  static names(): { [key: string]: string } {
    return {
      eq: 'Eq',
      ge: 'Ge',
      gt: 'Gt',
      le: 'Le',
      like: 'Like',
      lt: 'Lt',
      ne: 'Ne',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'string',
      ge: 'string',
      gt: 'string',
      le: 'string',
      like: 'string',
      lt: 'string',
      ne: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlParameter extends $tea.Model {
  name?: string;
  typeHint?: string;
  value?: Field;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      typeHint: 'TypeHint',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      typeHint: 'string',
      value: Field,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResult extends $tea.Model {
  numberOfRecordsUpdated?: number;
  static names(): { [key: string]: string } {
    return {
      numberOfRecordsUpdated: 'NumberOfRecordsUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numberOfRecordsUpdated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExecuteStatementRequest extends $tea.Model {
  database?: string;
  parameterSets?: SqlParameter[][];
  resourceArn?: string;
  secretArn?: string;
  sql?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      parameterSets: 'ParameterSets',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      sql: 'Sql',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      parameterSets: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': SqlParameter } },
      resourceArn: 'string',
      secretArn: 'string',
      sql: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExecuteStatementShrinkRequest extends $tea.Model {
  database?: string;
  parameterSetsShrink?: string;
  resourceArn?: string;
  secretArn?: string;
  sql?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      parameterSetsShrink: 'ParameterSets',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      sql: 'Sql',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      parameterSetsShrink: 'string',
      resourceArn: 'string',
      secretArn: 'string',
      sql: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExecuteStatementResponseBody extends $tea.Model {
  code?: string;
  data?: BatchExecuteStatementResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: BatchExecuteStatementResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExecuteStatementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchExecuteStatementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchExecuteStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginTransactionRequest extends $tea.Model {
  database?: string;
  resourceArn?: string;
  secretArn?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      resourceArn: 'string',
      secretArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginTransactionResponseBody extends $tea.Model {
  code?: string;
  data?: BeginTransactionResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: BeginTransactionResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginTransactionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BeginTransactionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BeginTransactionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitTransactionRequest extends $tea.Model {
  resourceArn?: string;
  secretArn?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
      secretArn: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitTransactionResponseBody extends $tea.Model {
  code?: string;
  data?: CommitTransactionResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: CommitTransactionResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitTransactionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CommitTransactionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CommitTransactionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRequest extends $tea.Model {
  database?: string;
  filter?: { [key: string]: Selector };
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      filter: 'Filter',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': Selector },
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShrinkRequest extends $tea.Model {
  database?: string;
  filterShrink?: string;
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      filterShrink: 'Filter',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      filterShrink: 'string',
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: DeleteResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementRequest extends $tea.Model {
  continueAfterTimeout?: boolean;
  database?: string;
  formatRecordsAs?: string;
  includeResultMetadata?: boolean;
  parameters?: SqlParameter[];
  resourceArn?: string;
  resultSetOptions?: ExecuteStatementRequestResultSetOptions;
  secretArn?: string;
  sql?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      continueAfterTimeout: 'ContinueAfterTimeout',
      database: 'Database',
      formatRecordsAs: 'FormatRecordsAs',
      includeResultMetadata: 'IncludeResultMetadata',
      parameters: 'Parameters',
      resourceArn: 'ResourceArn',
      resultSetOptions: 'ResultSetOptions',
      secretArn: 'SecretArn',
      sql: 'Sql',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continueAfterTimeout: 'boolean',
      database: 'string',
      formatRecordsAs: 'string',
      includeResultMetadata: 'boolean',
      parameters: { 'type': 'array', 'itemType': SqlParameter },
      resourceArn: 'string',
      resultSetOptions: ExecuteStatementRequestResultSetOptions,
      secretArn: 'string',
      sql: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementShrinkRequest extends $tea.Model {
  continueAfterTimeout?: boolean;
  database?: string;
  formatRecordsAs?: string;
  includeResultMetadata?: boolean;
  parametersShrink?: string;
  resourceArn?: string;
  resultSetOptionsShrink?: string;
  secretArn?: string;
  sql?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      continueAfterTimeout: 'ContinueAfterTimeout',
      database: 'Database',
      formatRecordsAs: 'FormatRecordsAs',
      includeResultMetadata: 'IncludeResultMetadata',
      parametersShrink: 'Parameters',
      resourceArn: 'ResourceArn',
      resultSetOptionsShrink: 'ResultSetOptions',
      secretArn: 'SecretArn',
      sql: 'Sql',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continueAfterTimeout: 'boolean',
      database: 'string',
      formatRecordsAs: 'string',
      includeResultMetadata: 'boolean',
      parametersShrink: 'string',
      resourceArn: 'string',
      resultSetOptionsShrink: 'string',
      secretArn: 'string',
      sql: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResponseBody extends $tea.Model {
  code?: string;
  data?: ExecuteStatementResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: ExecuteStatementResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExecuteStatementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRequest extends $tea.Model {
  database?: string;
  record?: { [key: string]: any };
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      record: 'Record',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      record: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertShrinkRequest extends $tea.Model {
  database?: string;
  recordShrink?: string;
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      recordShrink: 'Record',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      recordShrink: 'string',
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertResponseBody extends $tea.Model {
  code?: string;
  data?: InsertResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: InsertResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InsertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertListRequest extends $tea.Model {
  database?: string;
  records?: { [key: string]: any }[];
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      records: 'Records',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      records: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertListShrinkRequest extends $tea.Model {
  database?: string;
  recordsShrink?: string;
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      recordsShrink: 'Records',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      recordsShrink: 'string',
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertListResponseBody extends $tea.Model {
  code?: string;
  data?: InsertListResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: InsertListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InsertListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackTransactionRequest extends $tea.Model {
  resourceArn?: string;
  secretArn?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
      secretArn: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackTransactionResponseBody extends $tea.Model {
  code?: string;
  data?: RollbackTransactionResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: RollbackTransactionResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackTransactionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RollbackTransactionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackTransactionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectRequest extends $tea.Model {
  database?: string;
  filter?: { [key: string]: Selector };
  pageNumber?: number;
  pageSize?: number;
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': Selector },
      pageNumber: 'number',
      pageSize: 'number',
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectShrinkRequest extends $tea.Model {
  database?: string;
  filterShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      filterShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResponseBody extends $tea.Model {
  code?: string;
  data?: SelectResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: SelectResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SelectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRequest extends $tea.Model {
  database?: string;
  filter?: { [key: string]: Selector };
  record?: { [key: string]: any };
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      filter: 'Filter',
      record: 'Record',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': Selector },
      record: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShrinkRequest extends $tea.Model {
  database?: string;
  filterShrink?: string;
  recordShrink?: string;
  resourceArn?: string;
  secretArn?: string;
  table?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      filterShrink: 'Filter',
      recordShrink: 'Record',
      resourceArn: 'ResourceArn',
      secretArn: 'SecretArn',
      table: 'Table',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      filterShrink: 'string',
      recordShrink: 'string',
      resourceArn: 'string',
      secretArn: 'string',
      table: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateResult;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: UpdateResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteStatementRequestResultSetOptions extends $tea.Model {
  decimalReturnType?: string;
  longReturnType?: string;
  static names(): { [key: string]: string } {
    return {
      decimalReturnType: 'DecimalReturnType',
      longReturnType: 'LongReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decimalReturnType: 'string',
      longReturnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rds-data", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async batchExecuteStatementWithOptions(tmpReq: BatchExecuteStatementRequest, runtime: $Util.RuntimeOptions): Promise<BatchExecuteStatementResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchExecuteStatementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameterSets)) {
      request.parameterSetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameterSets, "ParameterSets", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.parameterSetsShrink)) {
      body["ParameterSets"] = request.parameterSetsShrink;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.sql)) {
      body["Sql"] = request.sql;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchExecuteStatement",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchExecuteStatementResponse>(await this.callApi(params, req, runtime), new BatchExecuteStatementResponse({}));
  }

  async batchExecuteStatement(request: BatchExecuteStatementRequest): Promise<BatchExecuteStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchExecuteStatementWithOptions(request, runtime);
  }

  async beginTransactionWithOptions(request: BeginTransactionRequest, runtime: $Util.RuntimeOptions): Promise<BeginTransactionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BeginTransaction",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BeginTransactionResponse>(await this.callApi(params, req, runtime), new BeginTransactionResponse({}));
  }

  async beginTransaction(request: BeginTransactionRequest): Promise<BeginTransactionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.beginTransactionWithOptions(request, runtime);
  }

  async commitTransactionWithOptions(request: CommitTransactionRequest, runtime: $Util.RuntimeOptions): Promise<CommitTransactionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CommitTransaction",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CommitTransactionResponse>(await this.callApi(params, req, runtime), new CommitTransactionResponse({}));
  }

  async commitTransaction(request: CommitTransactionRequest): Promise<CommitTransactionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitTransactionWithOptions(request, runtime);
  }

  async deleteWithOptions(tmpReq: DeleteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.table)) {
      body["Table"] = request.table;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Delete",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResponse>(await this.callApi(params, req, runtime), new DeleteResponse({}));
  }

  async delete(request: DeleteRequest): Promise<DeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWithOptions(request, runtime);
  }

  async executeStatementWithOptions(tmpReq: ExecuteStatementRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteStatementResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteStatementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.resultSetOptions))) {
      request.resultSetOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.resultSetOptions), "ResultSetOptions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.continueAfterTimeout)) {
      body["ContinueAfterTimeout"] = request.continueAfterTimeout;
    }

    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.formatRecordsAs)) {
      body["FormatRecordsAs"] = request.formatRecordsAs;
    }

    if (!Util.isUnset(request.includeResultMetadata)) {
      body["IncludeResultMetadata"] = request.includeResultMetadata;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.resultSetOptionsShrink)) {
      body["ResultSetOptions"] = request.resultSetOptionsShrink;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.sql)) {
      body["Sql"] = request.sql;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteStatement",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteStatementResponse>(await this.callApi(params, req, runtime), new ExecuteStatementResponse({}));
  }

  async executeStatement(request: ExecuteStatementRequest): Promise<ExecuteStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeStatementWithOptions(request, runtime);
  }

  async insertWithOptions(tmpReq: InsertRequest, runtime: $Util.RuntimeOptions): Promise<InsertResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.record)) {
      request.recordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.record, "Record", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.recordShrink)) {
      body["Record"] = request.recordShrink;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.table)) {
      body["Table"] = request.table;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Insert",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertResponse>(await this.callApi(params, req, runtime), new InsertResponse({}));
  }

  async insert(request: InsertRequest): Promise<InsertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertWithOptions(request, runtime);
  }

  async insertListWithOptions(tmpReq: InsertListRequest, runtime: $Util.RuntimeOptions): Promise<InsertListResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.recordsShrink)) {
      body["Records"] = request.recordsShrink;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.table)) {
      body["Table"] = request.table;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertList",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertListResponse>(await this.callApi(params, req, runtime), new InsertListResponse({}));
  }

  async insertList(request: InsertListRequest): Promise<InsertListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertListWithOptions(request, runtime);
  }

  async rollbackTransactionWithOptions(request: RollbackTransactionRequest, runtime: $Util.RuntimeOptions): Promise<RollbackTransactionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RollbackTransaction",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackTransactionResponse>(await this.callApi(params, req, runtime), new RollbackTransactionResponse({}));
  }

  async rollbackTransaction(request: RollbackTransactionRequest): Promise<RollbackTransactionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackTransactionWithOptions(request, runtime);
  }

  async selectWithOptions(tmpReq: SelectRequest, runtime: $Util.RuntimeOptions): Promise<SelectResponse> {
    Util.validateModel(tmpReq);
    let request = new SelectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.table)) {
      body["Table"] = request.table;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Select",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SelectResponse>(await this.callApi(params, req, runtime), new SelectResponse({}));
  }

  async select(request: SelectRequest): Promise<SelectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.selectWithOptions(request, runtime);
  }

  async updateWithOptions(tmpReq: UpdateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!Util.isUnset(tmpReq.record)) {
      request.recordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.record, "Record", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      body["Database"] = request.database;
    }

    if (!Util.isUnset(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!Util.isUnset(request.recordShrink)) {
      body["Record"] = request.recordShrink;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.secretArn)) {
      body["SecretArn"] = request.secretArn;
    }

    if (!Util.isUnset(request.table)) {
      body["Table"] = request.table;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Update",
      version: "2022-03-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResponse>(await this.callApi(params, req, runtime), new UpdateResponse({}));
  }

  async update(request: UpdateRequest): Promise<UpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWithOptions(request, runtime);
  }

}
