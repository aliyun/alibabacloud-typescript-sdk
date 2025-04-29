// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus } from "./ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus";


export class ListPluginStatusResponseBodyInstancePluginStatusSet extends $dara.Model {
  instancePluginStatus?: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus[];
  static names(): { [key: string]: string } {
    return {
      instancePluginStatus: 'InstancePluginStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePluginStatus: { 'type': 'array', 'itemType': ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instancePluginStatus)) {
      $dara.Model.validateArray(this.instancePluginStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

