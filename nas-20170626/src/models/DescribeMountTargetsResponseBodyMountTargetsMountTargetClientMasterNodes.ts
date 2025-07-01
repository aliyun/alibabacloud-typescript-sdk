// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode } from "./DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode";


export class DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes extends $dara.Model {
  clientMasterNode?: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode[];
  static names(): { [key: string]: string } {
    return {
      clientMasterNode: 'ClientMasterNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMasterNode: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode },
    };
  }

  validate() {
    if(Array.isArray(this.clientMasterNode)) {
      $dara.Model.validateArray(this.clientMasterNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

