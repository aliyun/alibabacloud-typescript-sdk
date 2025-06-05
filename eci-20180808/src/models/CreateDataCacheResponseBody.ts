// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DataCache ID.
   * 
   * @example
   * edc-bp15l4vvys94oo******
   */
  dataCacheId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D81A4A13-6DCC-4579-AC62-90A6C3EC7BBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataCacheId: 'DataCacheId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCacheId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

