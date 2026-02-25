// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayRequest extends $dara.Model {
  /**
   * @example
   * dg-2r69r8kpmn56k5s3
   */
  gatewayId?: string;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

