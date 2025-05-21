// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore } from "./DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore";


export class DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStores extends $dara.Model {
  logHubStore?: DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore[];
  static names(): { [key: string]: string } {
    return {
      logHubStore: 'LogHubStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logHubStore: { 'type': 'array', 'itemType': DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore },
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

