// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcCorrectOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19721978
   */
  dbId?: number;
  /**
   * @remarks
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
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbItemList?: CreateProcCorrectOrderRequestParamDbItemList[];
  execMode?: string;
  /**
   * @remarks
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
   * @example
   * test_rollback.sql
   */
  rollbackAttachmentName?: string;
  /**
   * @example
   * empty
   */
  rollbackSQL?: string;
  /**
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
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  param?: CreateProcCorrectOrderRequestParam;
  relatedUserList?: number[];
  /**
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

