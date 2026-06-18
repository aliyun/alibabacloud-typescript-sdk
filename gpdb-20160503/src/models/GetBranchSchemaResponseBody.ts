// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBranchSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  /**
   * @remarks
   * The schema SQL content.
   * 
   * @example
   * CREATE TABLE public.example(id int);
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

