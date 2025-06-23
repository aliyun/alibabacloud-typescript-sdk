// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBlackholeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The action that you want to perform on the instance. Set the value to **undo**, which indicates that you want to deactivate blackhole filtering.
   * 
   * This parameter is required.
   * 
   * @example
   * undo
   */
  blackholeStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeStatus: 'BlackholeStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeStatus: 'string',
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

