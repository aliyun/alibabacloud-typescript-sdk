// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDbProxyInstanceSslResponseBodyDbProxyCertListItems } from "./GetDbProxyInstanceSslResponseBodyDbProxyCertListItems";


export class GetDbProxyInstanceSslResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of SSL encryption settings.
   */
  dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D330E60C-8AAA-4D63-8F64-5B78F4692F98
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyCertListItems: 'DbProxyCertListItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyCertListItems: GetDbProxyInstanceSslResponseBodyDbProxyCertListItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dbProxyCertListItems && typeof (this.dbProxyCertListItems as any).validate === 'function') {
      (this.dbProxyCertListItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

