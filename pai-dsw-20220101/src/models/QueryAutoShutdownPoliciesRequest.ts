// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAutoShutdownPoliciesRequest extends $dara.Model {
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * *******
   */
  token?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
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

