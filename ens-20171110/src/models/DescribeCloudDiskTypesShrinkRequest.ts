// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskTypesShrinkRequest extends $dara.Model {
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
  ensRegionIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIdsShrink: 'EnsRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

