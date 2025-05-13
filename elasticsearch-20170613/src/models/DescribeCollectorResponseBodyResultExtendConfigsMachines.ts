// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCollectorResponseBodyResultExtendConfigsMachines extends $dara.Model {
  /**
   * @remarks
   * The status of the shipper on the ECS instance. Valid values:
   * 
   * *   heartOk: The heartbeat is normal.
   * *   heartLost: The heartbeat is abnormal.
   * *   uninstalled: The shipper is not installed.
   * *   failed: The shipper fails to be installed.
   * 
   * @example
   * heartOk
   */
  agentStatus?: string;
  /**
   * @remarks
   * The IDs of the ECS instances.
   * 
   * @example
   * i-bp1gyhphjaj73jsr****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
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

