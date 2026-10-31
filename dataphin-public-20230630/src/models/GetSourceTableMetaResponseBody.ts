// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceTableMetaResponseBodyDataColumns extends $dara.Model {
  /**
   * @remarks
   * The column comment.
   * 
   * @example
   * unique id
   */
  comment?: string;
  /**
   * @remarks
   * The column data type.
   * 
   * @example
   * bigint
   */
  dataType?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the column is a primary key.
   * 
   * @example
   * false
   */
  pk?: boolean;
  /**
   * @remarks
   * Indicates whether the column is a partition column.
   * 
   * @example
   * false
   */
  pt?: boolean;
  /**
   * @remarks
   * The raw column data type.
   * 
   * @example
   * bigint
   */
  rawDataType?: string;
  /**
   * @remarks
   * The column sequence number.
   * 
   * @example
   * 1
   */
  seqNumber?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      dataType: 'DataType',
      name: 'Name',
      pk: 'Pk',
      pt: 'Pt',
      rawDataType: 'RawDataType',
      seqNumber: 'SeqNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      dataType: 'string',
      name: 'string',
      pk: 'boolean',
      pt: 'boolean',
      rawDataType: 'string',
      seqNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceTableMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The column list.
   */
  columns?: GetSourceTableMetaResponseBodyDataColumns[];
  /**
   * @remarks
   * The globally unique identifier (GUID) of the table.
   * 
   * @example
   * 300001410.default.sample
   */
  guid?: string;
  /**
   * @remarks
   * The table description or comment.
   * 
   * @example
   * sample
   */
  tableComment?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * sample
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      guid: 'Guid',
      tableComment: 'TableComment',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetSourceTableMetaResponseBodyDataColumns },
      guid: 'string',
      tableComment: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceTableMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The metadata of the integration source table, including the table description and field list.
   */
  data?: GetSourceTableMetaResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSourceTableMetaResponseBodyData,
      httpStatusCode: 'number',
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

