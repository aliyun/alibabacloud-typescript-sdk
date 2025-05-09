// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataCorrectOrderRequestParamDbItemList } from "./CreateDataCorrectOrderRequestParamDbItemList";


export class CreateDataCorrectOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment that contains the SQL statements used to change data. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to obtain the attachment key from the value of AttachmentKey.
   * 
   * >  This parameter is required if you set **SqlType** to **ATTACHMENT**.
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
   * The databases whose data you want to change.
   * 
   * This parameter is required.
   */
  dbItemList?: CreateDataCorrectOrderRequestParamDbItemList[];
  /**
   * @remarks
   * The estimated number of data rows that may be affected by the data change.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  estimateAffectRows?: number;
  /**
   * @remarks
   * The mode in which the data change ticket is executed after the ticket is approved. Valid values:
   * 
   * *   **COMMITOR**: The ticket is executed by the user who submits the ticket.
   * *   **AUTO**: The ticket is automatically executed after the ticket is approved.
   * *   **LAST_AUDITOR**: The ticket is executed by the last approver of the ticket.
   * 
   * @example
   * COMMITOR
   */
  execMode?: string;
  /**
   * @remarks
   * The SQL statements for data change.
   * 
   * > 
   * 
   * *   This parameter is required if you set **SqlType** to **TEXT**.
   * 
   * *   The size of the SQL statement cannot exceed 15 MB.
   * 
   * @example
   * update base_user set id = 1 where id  = 1;
   */
  execSQL?: string;
  /**
   * @remarks
   * The key of the attachment that contains the SQL statements used to roll back the data change. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to obtain the attachment key from the value of AttachmentKey.
   * 
   * >  This parameter is required if you set **RollbackSqlType** to **ATTACHMENT**.
   * 
   * @example
   * test_rollback.sql
   */
  rollbackAttachmentName?: string;
  /**
   * @remarks
   * The SQL statements for rolling back the data change.
   * 
   * >  This parameter is required if you set **RollbackSqlType** to **TEXT**.
   * 
   * @example
   * update base_user set id = 1 where id  = 1;
   */
  rollbackSQL?: string;
  /**
   * @remarks
   * The format of the SQL statements used to roll back the data change. Valid values:
   * 
   * *   **TEXT**
   * *   **ATTACHMENT**
   * 
   * @example
   * TEXT
   */
  rollbackSqlType?: string;
  /**
   * @remarks
   * The format of the SQL statements used to change data. Valid values:
   * 
   * *   **TEXT**
   * *   **ATTACHMENT**
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
      estimateAffectRows: 'EstimateAffectRows',
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
      dbItemList: { 'type': 'array', 'itemType': CreateDataCorrectOrderRequestParamDbItemList },
      estimateAffectRows: 'number',
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

