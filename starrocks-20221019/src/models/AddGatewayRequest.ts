// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  feNodeNumber?: number;
  /**
   * @example
   * eas_automation_test
   */
  gatewayName?: string;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      feNodeNumber: 'FeNodeNumber',
      gatewayName: 'GatewayName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feNodeNumber: 'number',
      gatewayName: 'string',
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

