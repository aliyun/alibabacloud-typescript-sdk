// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcCorrectOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The database ID. Databases are divided into physical databases and logical databases.
   * 
   * *   To query the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To query the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 19721978
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcCorrectOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The reason for the programmable object change.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The information about the database.
   * 
   * This parameter is required.
   */
  dbItemList?: CreateProcCorrectOrderRequestParamDbItemList[];
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
   * This parameter is required.
   * 
   * @example
   * DELIMITER ///
   * CREATE PROCEDURE GetAllProducts()
   * BEGIN
   * SELECT *  FROM base_user;
   * END ///
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
   * >  This parameter is required if you set the **RollbackSqlType** parameter to **TEXT**.
   * 
   * @example
   * empty
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
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      dbItemList: 'DbItemList',
      execMode: 'ExecMode',
      execSQL: 'ExecSQL',
      rollbackAttachmentName: 'RollbackAttachmentName',
      rollbackSQL: 'RollbackSQL',
      rollbackSqlType: 'RollbackSqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      dbItemList: { 'type': 'array', 'itemType': CreateProcCorrectOrderRequestParamDbItemList },
      execMode: 'string',
      execSQL: 'string',
      rollbackAttachmentName: 'string',
      rollbackSQL: 'string',
      rollbackSqlType: 'string',
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

export class CreateProcCorrectOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment for the ticket. The attachment provides more instructions for this operation.
   * 
   * You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to query the key of the attachment.
   * 
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The remarks of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  param?: CreateProcCorrectOrderRequestParam;
  /**
   * @remarks
   * The operators that are related to the ticket.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 4***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateProcCorrectOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

