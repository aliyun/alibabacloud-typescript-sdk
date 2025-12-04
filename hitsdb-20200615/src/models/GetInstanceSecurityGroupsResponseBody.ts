// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSecurityGroupsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  instanceId?: string;
  requestId?: string;
  securityGroups?: string[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      instanceId: 'string',
      requestId: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

