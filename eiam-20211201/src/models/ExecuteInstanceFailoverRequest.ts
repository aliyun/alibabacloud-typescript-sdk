// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteInstanceFailoverRequest extends $dara.Model {
  /**
   * @remarks
   * The failover status. Valid values:
   * - inactive: The primary instance is active.
   * - active: The replica instance is active.
   * 
   * This parameter is required.
   * 
   * @example
   * active
   */
  instanceFailoverStatus?: string;
  /**
   * @remarks
   * The replica instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceFailoverStatus: 'InstanceFailoverStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceFailoverStatus: 'string',
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

