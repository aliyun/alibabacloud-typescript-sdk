// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus } from "./ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus";


export class ListDedicatedClusterResponseBodyDedicatedClusterStatusList extends $dara.Model {
  dedicatedClusterStatus?: ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus[];
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterStatus: 'DedicatedClusterStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterStatus: { 'type': 'array', 'itemType': ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedClusterStatus)) {
      $dara.Model.validateArray(this.dedicatedClusterStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

