// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems } from "./DescribeDbproxyResponseBodyDbproxyConnectStringItemsDbproxyConnectStringItems";


export class DescribeDBProxyResponseBodyDBProxyConnectStringItems extends $dara.Model {
  DBProxyConnectStringItems?: DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems[];
  static names(): { [key: string]: string } {
    return {
      DBProxyConnectStringItems: 'DBProxyConnectStringItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyConnectStringItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyConnectStringItems)) {
      $dara.Model.validateArray(this.DBProxyConnectStringItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

