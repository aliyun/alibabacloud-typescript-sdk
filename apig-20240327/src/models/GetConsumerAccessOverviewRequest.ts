// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerAccessOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The target AI gateway instance ID. Quotas and resources are isolated by instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

