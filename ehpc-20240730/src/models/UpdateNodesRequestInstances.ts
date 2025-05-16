// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodesRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the compute node.
   * 
   * @example
   * i-bp1bzqq1ddeemuddn****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the compute node.
   * 
   * @example
   * true
   */
  keepAlive?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keepAlive: 'KeepAlive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keepAlive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

