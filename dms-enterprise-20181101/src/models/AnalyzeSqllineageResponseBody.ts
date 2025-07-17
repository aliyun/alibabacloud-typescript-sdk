// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeSQLLineageResponseBodyLineageResultLineagesProcessDetail extends $dara.Model {
  /**
   * @remarks
   * The calculating method. Valid values:
   * 
   * *   **DIRECT**: No function or expression is used.
   * *   **EXPR**: A function or expression is used.
   * 
   * @example
   * DIRECT
   */
  calWay?: string;
  /**
   * @remarks
   * The SQL code snippet for field processing.
   * 
   * @example
   * dmstest.b.id
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      calWay: 'CalWay',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calWay: 'string',
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeSQLLineageResponseBodyLineageResultLineages extends $dara.Model {
  /**
   * @remarks
   * The target.
   * 
   * @example
   * dmstest.a.id
   */
  dst?: string;
  /**
   * @remarks
   * The type of the lineage. Valid values:
   * 
   * *   **FIELD_DEPEND_FIELD**: Fields depend on fields.
   * *   **TABLE_DEPEND_TABLE**: Tables depend on tables.
   * *   **FIELD_INFLU_TABLE**: Fields influence tables.
   * *   **FIELD_INFLU_FIELD**: Fields influence fields.
   * *   **FIELD_INFLU_TABLE**: Tables influence fields.
   * *   **FIELD_JOIN_FIELD**: Fields are associated with fields.
   * 
   * @example
   * FIELD_DEPEND_FIELD
   */
  lineageType?: string;
  /**
   * @remarks
   * The operation type of the SQL statement in which the data lineage is generated. For example, if the operation type is SELECT, the data lineage is generated from a SELECT statement.
   * 
   * >  This field is an extended field which has no practical use.
   * 
   * @example
   * SELECT
   */
  operType?: string;
  /**
   * @remarks
   * The handling details. This parameter is returned only when LineageType is FIELD_DEPEND_FIELD.
   */
  processDetail?: AnalyzeSQLLineageResponseBodyLineageResultLineagesProcessDetail;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * dmstest.b.id
   */
  src?: string;
  static names(): { [key: string]: string } {
    return {
      dst: 'Dst',
      lineageType: 'LineageType',
      operType: 'OperType',
      processDetail: 'ProcessDetail',
      src: 'Src',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dst: 'string',
      lineageType: 'string',
      operType: 'string',
      processDetail: AnalyzeSQLLineageResponseBodyLineageResultLineagesProcessDetail,
      src: 'string',
    };
  }

  validate() {
    if(this.processDetail && typeof (this.processDetail as any).validate === 'function') {
      (this.processDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeSQLLineageResponseBodyLineageResultObjectMetadataFields extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * dmstest.a.id
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeSQLLineageResponseBodyLineageResultObjectMetadata extends $dara.Model {
  /**
   * @remarks
   * The fields in the metatable.
   */
  fields?: AnalyzeSQLLineageResponseBodyLineageResultObjectMetadataFields[];
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * a
   */
  name?: string;
  /**
   * @remarks
   * The source of metadata. Valid values:
   * 
   * *   **DDL**: The metadata comes from parsed SQL statements or definition of databases and tables collected by DMS.
   * *   **LINEAGE**: The metadata comes from lineage analysis results.
   * 
   * @example
   * DDL
   */
  source?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * *   **TABLE**
   * *   **VIEW**
   * *   **TMP_TABLE**
   * 
   * @example
   * TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      name: 'Name',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': AnalyzeSQLLineageResponseBodyLineageResultObjectMetadataFields },
      name: 'string',
      source: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeSQLLineageResponseBodyLineageResult extends $dara.Model {
  /**
   * @remarks
   * The details about the lineage.
   */
  lineages?: AnalyzeSQLLineageResponseBodyLineageResultLineages[];
  /**
   * @remarks
   * The table and field metadata information.
   */
  objectMetadata?: AnalyzeSQLLineageResponseBodyLineageResultObjectMetadata[];
  static names(): { [key: string]: string } {
    return {
      lineages: 'Lineages',
      objectMetadata: 'ObjectMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineages: { 'type': 'array', 'itemType': AnalyzeSQLLineageResponseBodyLineageResultLineages },
      objectMetadata: { 'type': 'array', 'itemType': AnalyzeSQLLineageResponseBodyLineageResultObjectMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.lineages)) {
      $dara.Model.validateArray(this.lineages);
    }
    if(Array.isArray(this.objectMetadata)) {
      $dara.Model.validateArray(this.objectMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeSQLLineageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Returned data set of SQL lineage.
   */
  lineageResult?: AnalyzeSQLLineageResponseBodyLineageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B07137-F6AE-4756-8474-7F92BB6C4E04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      lineageResult: 'LineageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      lineageResult: AnalyzeSQLLineageResponseBodyLineageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.lineageResult && typeof (this.lineageResult as any).validate === 'function') {
      (this.lineageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

