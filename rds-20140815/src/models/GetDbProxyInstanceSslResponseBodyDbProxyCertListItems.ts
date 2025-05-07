// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems } from "./GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems";


export class GetDbProxyInstanceSslResponseBodyDbProxyCertListItems extends $dara.Model {
  dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems[];
  static names(): { [key: string]: string } {
    return {
      dbProxyCertListItems: 'DbProxyCertListItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyCertListItems: { 'type': 'array', 'itemType': GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems },
    };
  }

  validate() {
    if(Array.isArray(this.dbProxyCertListItems)) {
      $dara.Model.validateArray(this.dbProxyCertListItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

