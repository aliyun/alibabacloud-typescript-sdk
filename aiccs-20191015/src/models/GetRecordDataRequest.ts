// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordDataRequest extends $dara.Model {
  /**
   * @remarks
   * Session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * Log on to the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview) and view the instance ID in **Instance Management**.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
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

