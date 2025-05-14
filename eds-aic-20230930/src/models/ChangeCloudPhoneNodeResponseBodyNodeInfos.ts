// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos } from "./ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos";


export class ChangeCloudPhoneNodeResponseBodyNodeInfos extends $dara.Model {
  instanceInfos?: ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos[];
  /**
   * @example
   * cpn-e5kxgjyt8s1mb****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: { 'type': 'array', 'itemType': ChangeCloudPhoneNodeResponseBodyNodeInfosInstanceInfos },
      nodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfos)) {
      $dara.Model.validateArray(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

