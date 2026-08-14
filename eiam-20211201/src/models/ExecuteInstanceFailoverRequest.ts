// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteInstanceFailoverRequest extends $dara.Model {
  /**
   * @remarks
   * 故障转移状态
   * 
   * This parameter is required.
   * 
   * @example
   * active
   */
  instanceFailoverStatus?: string;
  /**
   * @remarks
   * IDaaS 的副本实例 ID
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

