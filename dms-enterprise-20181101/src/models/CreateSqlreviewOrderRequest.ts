// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSQLReviewOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The files to be reviewed. Multiple files can be reviewed at a time.
   * 
   * This parameter is required.
   */
  attachmentKeyList?: string[];
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * >  You can call this operation to query only physical databases. This operation is unavailable to query logical databases.
   * 
   * This parameter is required.
   * 
   * @example
   * 123321
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * SQL review for xxx
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentKeyList: 'AttachmentKeyList',
      dbId: 'DbId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKeyList: { 'type': 'array', 'itemType': 'string' },
      dbId: 'number',
      projectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachmentKeyList)) {
      $dara.Model.validateArray(this.attachmentKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSQLReviewOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The purpose or objective of the SQL review. This reduces unnecessary communication.
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
  param?: CreateSQLReviewOrderRequestParam;
  /**
   * @remarks
   * The stakeholders involved in this operation. All the specified stakeholders can view the ticket details and take part in the approval process. Irrelevant users other than DMS administrators and database administrators (DBAs) are not allowed to view the ticket details.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      param: CreateSQLReviewOrderRequestParam,
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

