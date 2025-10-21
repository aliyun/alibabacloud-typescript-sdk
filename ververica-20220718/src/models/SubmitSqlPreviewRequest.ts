// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SqlStatementWithContext } from "./SqlStatementWithContext";


export class SubmitSqlPreviewRequest extends $dara.Model {
  body?: SqlStatementWithContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-session
   */
  sessionClusterName?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      sessionClusterName: 'sessionClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SqlStatementWithContext,
      sessionClusterName: 'string',
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

