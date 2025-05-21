// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedNodesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The disk usage of the storage node. Unit: %.
   * 
   * @example
   * 90.5
   */
  diskUsageRatio?: string;
  /**
   * @remarks
   * The number of the storage node.
   * 
   * @example
   * Node1
   */
  node?: string;
  static names(): { [key: string]: string } {
    return {
      diskUsageRatio: 'DiskUsageRatio',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskUsageRatio: 'string',
      node: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

