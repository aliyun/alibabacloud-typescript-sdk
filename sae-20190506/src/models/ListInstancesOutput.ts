// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceInfo } from "./InstanceInfo";
import { VersionStatus } from "./VersionStatus";


export class ListInstancesOutput extends $dara.Model {
  currentError?: string;
  instances?: InstanceInfo[];
  requestId?: string;
  versionStatus?: { [key: string]: VersionStatus };
  static names(): { [key: string]: string } {
    return {
      currentError: 'currentError',
      instances: 'instances',
      requestId: 'requestId',
      versionStatus: 'versionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      instances: { 'type': 'array', 'itemType': InstanceInfo },
      requestId: 'string',
      versionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': VersionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.versionStatus) {
      $dara.Model.validateMap(this.versionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

