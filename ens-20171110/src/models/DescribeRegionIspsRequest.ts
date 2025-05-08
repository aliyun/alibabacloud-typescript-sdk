// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionIspsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node. You can specify only one node ID in a call.
   * 
   * @example
   * cn-dalian-unicom
   */
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

