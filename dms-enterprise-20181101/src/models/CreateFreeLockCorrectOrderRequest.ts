// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeLockCorrectOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. The database can be a physical database or a logical database.
   * 
   * *   To obtain the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To obtain the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1860****
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

export class CreateFreeLockCorrectOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment that provides more instructions for the ticket. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to obtain the attachment key from the value of the AttachmentKey parameter.
   * 
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The purpose or objective of the data change. This parameter is used to help reduce unnecessary communication.
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
  param?: CreateFreeLockCorrectOrderRequestParam;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The stakeholders of the data change. All stakeholders can view the ticket details and assist in the approval process. Irrelevant users other than DMS administrators and database administrators (DBAs) are not allowed to view the ticket details.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      realLoginUserUid: 'RealLoginUserUid',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateFreeLockCorrectOrderRequestParam,
      realLoginUserUid: 'string',
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

