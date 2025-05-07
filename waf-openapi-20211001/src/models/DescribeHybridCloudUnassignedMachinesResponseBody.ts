// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines } from "./DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines";


export class DescribeHybridCloudUnassignedMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3EBCFCE9-4A3C-5E01-915D-691B****510A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 28
   */
  totalCount?: number;
  /**
   * @remarks
   * The servers that are not assigned to the hybrid cloud cluster.
   */
  unassignedMachines?: DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      unassignedMachines: 'UnassignedMachines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      unassignedMachines: { 'type': 'array', 'itemType': DescribeHybridCloudUnassignedMachinesResponseBodyUnassignedMachines },
    };
  }

  validate() {
    if(Array.isArray(this.unassignedMachines)) {
      $dara.Model.validateArray(this.unassignedMachines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

