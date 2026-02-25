// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TogglePublicSlbRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  enablePublicSlb?: boolean;
  /**
   * @example
   * gw-0002xci9buu68ongixvk
   */
  gatewayId?: string;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePublicSlb: 'EnablePublicSlb',
      gatewayId: 'GatewayId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePublicSlb: 'boolean',
      gatewayId: 'string',
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

