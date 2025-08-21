// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentInfoRequest extends $dara.Model {
  /**
   * @example
   * beebot_bot_public_cn-ca36x8v3n1x
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

