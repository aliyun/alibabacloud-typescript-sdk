// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlockStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIds?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

