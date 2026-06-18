// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * i128903591758597631635
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

