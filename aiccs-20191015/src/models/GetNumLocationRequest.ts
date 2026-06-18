// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNumLocationRequest extends $dara.Model {
  /**
   * @remarks
   * Unique ID for the customer request. Used for idempotency validation and can be generated using a UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it in the <b>Instance Management</b> section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Phone number to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1360987****
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

