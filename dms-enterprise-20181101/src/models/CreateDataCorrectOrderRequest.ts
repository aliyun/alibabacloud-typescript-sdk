// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCorrectOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The database ID. The database can be a physical database or a logical database.
   * 
   * *   To query the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To query the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * The instance ID. You can call the ListInstances or GetInstance operation to query the instance ID.
   * 
   * > 
   * > The instance change feature is supported only by ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and AnalyticDB for MySQL clusters.
   * 
   * @example
   * 1860****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      instanceId: 'InstanceId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      instanceId: 'number',
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

export class CreateDataCorrectOrderRequest extends $dara.Model {
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
  param?: CreateDataCorrectOrderRequestParam;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to call the API operation.
   * 
   * @example
   * 21400447956867****
   */
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
      param: CreateDataCorrectOrderRequestParam,
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

