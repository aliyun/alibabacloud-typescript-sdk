// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProcCorrectOrderRequestParamDbItemList } from "./CreateProcCorrectOrderRequestParamDbItemList";


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

