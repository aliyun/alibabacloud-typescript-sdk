// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDataCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID generated for the DataCache in the destination region.
   * 
   * @example
   * edc-bp1423y6d7v7l6ua****
   */
  dataCacheId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58EE0CB3-C864-5395-A4F7-24F425074839
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

