// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynDbTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 851D11EA-681C-5B38-A065-C3F90BBD49DE
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tables.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

