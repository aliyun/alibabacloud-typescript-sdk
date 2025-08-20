// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedNodesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The disk usage of the storage node.
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

export class DescribeInclinedNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried storage nodes.
   */
  items?: DescribeInclinedNodesResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0BF6685-0519-543E-90F8-DB8949E4D5F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeInclinedNodesResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

