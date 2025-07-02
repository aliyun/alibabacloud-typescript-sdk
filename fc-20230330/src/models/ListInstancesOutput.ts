// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceInfo } from "./InstanceInfo";


export class ListInstancesOutput extends $dara.Model {
  instances?: InstanceInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': InstanceInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

