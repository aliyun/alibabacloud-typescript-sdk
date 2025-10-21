// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionClusterRunningInfo extends $dara.Model {
  lastUpdateTime?: number;
  referenceDeploymentIds?: string[];
  startedAt?: number;
  static names(): { [key: string]: string } {
    return {
      lastUpdateTime: 'lastUpdateTime',
      referenceDeploymentIds: 'referenceDeploymentIds',
      startedAt: 'startedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUpdateTime: 'number',
      referenceDeploymentIds: { 'type': 'array', 'itemType': 'string' },
      startedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.referenceDeploymentIds)) {
      $dara.Model.validateArray(this.referenceDeploymentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

