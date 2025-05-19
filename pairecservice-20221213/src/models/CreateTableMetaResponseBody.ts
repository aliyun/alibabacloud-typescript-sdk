// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableMetaResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  tableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tableMetaId: 'TableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tableMetaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

