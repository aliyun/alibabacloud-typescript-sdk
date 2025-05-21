// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount";


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList extends $dara.Model {
  /**
   * @remarks
   * The number of the supported compute nodes.
   */
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount;
  /**
   * @remarks
   * The support storage capacity. Unit: GB.
   */
  storageSize?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount,
      storageSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.nodeCount && typeof (this.nodeCount as any).validate === 'function') {
      (this.nodeCount as any).validate();
    }
    if(Array.isArray(this.storageSize)) {
      $dara.Model.validateArray(this.storageSize);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

