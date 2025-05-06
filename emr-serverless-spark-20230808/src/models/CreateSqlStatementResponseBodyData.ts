// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The interactive query ID.
   * 
   * @example
   * st-1231dfafadfa***
   */
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      statementId: 'statementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statementId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

