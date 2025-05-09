// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The number of affected rows that is obtained by the precheck.
   * 
   * @example
   * 100
   */
  actualAffectRows?: number;
  /**
   * @remarks
   * The name of the attachment that contains the SQL statements used to change data.
   * 
   * @example
   * xxx
   */
  attachmentName?: string;
  /**
   * @remarks
   * The category of the reason for the data change.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The estimated number of affected rows.
   * 
   * @example
   * 100
   */
  estimateAffectRows?: number;
  /**
   * @remarks
   * The executed SQL statements.
   * 
   * @example
   * update t1 set name = \\"xxx\\" where id <= 100
   */
  exeSQL?: string;
  /**
   * @remarks
   * Indicates whether the precheck result is ignored. Valid values:
   * 
   * - **true**: The precheck result is ignored.
   * - **false**: The precheck result is not ignored.
   * 
   * @example
   * false
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The reason why the precheck result is ignored.
   * 
   * @example
   * test
   */
  ignoreAffectRowsReason?: string;
  /**
   * @remarks
   * The name of the attachment that contains the SQL statements used to roll back the data change.
   * 
   * @example
   * test
   */
  rbAttachmentName?: string;
  /**
   * @remarks
   * The SQL statements used to roll back the data change.
   * 
   * @example
   * empty
   */
  rbSQL?: string;
  /**
   * @remarks
   * The format of the SQL statements used to roll back the data change. Valid values:
   * 
   * - **TEXT**: text
   * - **ATTACHMENT**: attachment
   * 
   * @example
   * text
   */
  rbSQLType?: string;
  /**
   * @remarks
   * The format of the SQL statements used to change data. Valid values:
   * 
   * - **TEXT**: text
   * - **ATTACHMENT**: attachment
   * 
   * @example
   * text
   */
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      estimateAffectRows: 'EstimateAffectRows',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      rbAttachmentName: 'RbAttachmentName',
      rbSQL: 'RbSQL',
      rbSQLType: 'RbSQLType',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      attachmentName: 'string',
      classify: 'string',
      estimateAffectRows: 'number',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      rbAttachmentName: 'string',
      rbSQL: 'string',
      rbSQLType: 'string',
      sqlType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

