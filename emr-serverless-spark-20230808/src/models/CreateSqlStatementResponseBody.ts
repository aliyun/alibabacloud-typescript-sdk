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

export class CreateSqlStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateSqlStatementResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSqlStatementResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

