// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-chongqing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The edge nodes.
   */
  ensRegionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

