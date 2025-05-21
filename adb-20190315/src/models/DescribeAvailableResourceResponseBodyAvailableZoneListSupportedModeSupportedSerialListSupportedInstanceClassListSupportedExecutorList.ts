// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount";


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList extends $dara.Model {
  /**
   * @remarks
   * The information about the supported compute nodes.
   */
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount,
    };
  }

  validate() {
    if(this.nodeCount && typeof (this.nodeCount as any).validate === 'function') {
      (this.nodeCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

