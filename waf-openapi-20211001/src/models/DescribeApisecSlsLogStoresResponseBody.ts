// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecSlsLogStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The names of the Logstores in Simple Log Service.
   */
  logStores?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStores: 'LogStores',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStores: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logStores)) {
      $dara.Model.validateArray(this.logStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

