// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-cuv4scs4obxch****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The IDs of the instances.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceGroupId: 'InstanceGroupId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
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

