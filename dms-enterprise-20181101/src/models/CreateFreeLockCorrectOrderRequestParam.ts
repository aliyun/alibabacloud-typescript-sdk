// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFreeLockCorrectOrderRequestParamDbItemList } from "./CreateFreeLockCorrectOrderRequestParamDbItemList";


export class CreateFreeLockCorrectOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment that contains the SQL statements used to change data. This parameter is not supported.
   * 
   * @example
   * test.sql
   */
  attachmentName?: string;
  /**
   * @remarks
   * The reason for the data change.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The databases in which you want to change data.
   * 
   * This parameter is required.
   */
  dbItemList?: CreateFreeLockCorrectOrderRequestParamDbItemList[];
  /**
   * @remarks
   * The execution mode of the ticket after the ticket is approved. Valid values:
   * 
   * *   **COMMITOR**: The data change is performed by the user who submits the ticket.
   * *   **AUTO**: The data change is automatically performed after the ticket is approved.
   * *   **LAST_AUDITOR**: The data change is performed by the last approver of the ticket.
   * 
   * @example
   * COMMITOR
   */
  execMode?: string;
  /**
   * @remarks
   * The SQL statements that you want to execute to change data.
   * 
   * This parameter is required.
   * 
   * @example
   * delete from base_user where 1 = 1;
   */
  execSQL?: string;
  /**
   * @remarks
   * The key of the attachment that contains the SQL statements used to roll back the data change.
   * 
   * @example
   * test_rollback.sql
   */
  rollbackAttachmentName?: string;
  /**
   * @remarks
   * The SQL statements used to roll back the data change.
   * 
   * @example
   * empty
   */
  rollbackSQL?: string;
  /**
   * @remarks
   * The format of the SQL statements used to roll back the data change. Valid values:
   * 
   * *   **TEXT**: text
   * *   **ATTACHMENT**: attachment. This value is not supported.
   * 
   * @example
   * TEXT
   */
  rollbackSqlType?: string;
  /**
   * @remarks
   * The format of the SQL statements used to change data. Valid values:
   * 
   * *   **TEXT**: text
   * *   **ATTACHMENT**: attachment. This value is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      dbItemList: 'DbItemList',
      execMode: 'ExecMode',
      execSQL: 'ExecSQL',
      rollbackAttachmentName: 'RollbackAttachmentName',
      rollbackSQL: 'RollbackSQL',
      rollbackSqlType: 'RollbackSqlType',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      classify: 'string',
      dbItemList: { 'type': 'array', 'itemType': CreateFreeLockCorrectOrderRequestParamDbItemList },
      execMode: 'string',
      execSQL: 'string',
      rollbackAttachmentName: 'string',
      rollbackSQL: 'string',
      rollbackSqlType: 'string',
      sqlType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbItemList)) {
      $dara.Model.validateArray(this.dbItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

