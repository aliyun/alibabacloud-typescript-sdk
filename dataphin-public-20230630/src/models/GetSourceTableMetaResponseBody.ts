// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceTableMetaResponseBodyDataColumns extends $dara.Model {
  /**
   * @example
   * unique id
   */
  comment?: string;
  /**
   * @example
   * bigint
   */
  dataType?: string;
  /**
   * @example
   * id
   */
  name?: string;
  /**
   * @example
   * false
   */
  pk?: boolean;
  /**
   * @example
   * false
   */
  pt?: boolean;
  /**
   * @example
   * bigint
   */
  rawDataType?: string;
  /**
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
  columns?: GetSourceTableMetaResponseBodyDataColumns[];
  /**
   * @example
   * 300001410.default.sample
   */
  guid?: string;
  /**
   * @example
   * sample
   */
  tableComment?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetSourceTableMetaResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

