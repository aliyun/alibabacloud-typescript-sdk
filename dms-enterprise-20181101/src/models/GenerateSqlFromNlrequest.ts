// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSqlFromNLRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  dbId?: string;
  /**
   * @example
   * MySQL
   */
  dialect?: string;
  /**
   * @example
   * state>0代表成功
   */
  knowledge?: string;
  /**
   * @example
   * base
   */
  level?: string;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  question?: string;
  realLoginUserUid?: string;
  /**
   * @example
   * users,orders
   */
  tableNames?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dialect: 'Dialect',
      knowledge: 'Knowledge',
      level: 'Level',
      model: 'Model',
      question: 'Question',
      realLoginUserUid: 'RealLoginUserUid',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dialect: 'string',
      knowledge: 'string',
      level: 'string',
      model: 'string',
      question: 'string',
      realLoginUserUid: 'string',
      tableNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

