// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset to query. If you do not specify this parameter, the tags of all asset types are queried. Valid values:
   * 
   * *   **ecs**: server
   * *   **cloud_product**: Alibaba Cloud service
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

