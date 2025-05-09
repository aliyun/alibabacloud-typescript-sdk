// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeSQLLineageResponseBodyLineageResultLineagesProcessDetail } from "./AnalyzeSqllineageResponseBodyLineageResultLineagesProcessDetail";


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

