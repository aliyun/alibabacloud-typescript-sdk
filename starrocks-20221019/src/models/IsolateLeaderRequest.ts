// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsolateLeaderRequest extends $dara.Model {
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isolateLeader?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isolateLeader: 'IsolateLeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isolateLeader: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

