// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of asset to query. If you do not specify an asset type, tag information for all asset types is queried. Valid values:
   * - **ecs**: server
   * - **cloud_product**: cloud product.
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

