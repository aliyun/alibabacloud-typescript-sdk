// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceIdsRequest extends $dara.Model {
  edition?: number;
  instanceIds?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
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

