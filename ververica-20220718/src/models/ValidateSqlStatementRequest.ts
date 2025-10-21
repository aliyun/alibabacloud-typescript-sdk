// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SqlStatementWithContext } from "./SqlStatementWithContext";


export class ValidateSqlStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the code that you want to verify.
   * 
   * This parameter is required.
   */
  body?: SqlStatementWithContext;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SqlStatementWithContext,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

