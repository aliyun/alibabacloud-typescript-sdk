// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudPhoneNodeResponseBodyNodeInfos extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the cloud phone matrix.
   * 
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nodeId: 'string',
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

