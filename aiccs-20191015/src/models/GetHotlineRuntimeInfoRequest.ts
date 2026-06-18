// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineRuntimeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The agent account name. It is unique within the instance (logon name).
   * 
   * This parameter is required.
   * 
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @remarks
   * The instance ID.  
   * 
   * You can log on to the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview) and view the instance ID in **Instance Management**.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
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

