// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * By default, all available node IDs are returned.
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

