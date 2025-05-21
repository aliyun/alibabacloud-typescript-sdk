// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore } from "./DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore";


export class DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores extends $dara.Model {
  logHubStore?: DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore[];
  static names(): { [key: string]: string } {
    return {
      logHubStore: 'LogHubStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logHubStore: { 'type': 'array', 'itemType': DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore },
    };
  }

  validate() {
    if(Array.isArray(this.logHubStore)) {
      $dara.Model.validateArray(this.logHubStore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

