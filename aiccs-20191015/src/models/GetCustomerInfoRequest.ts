// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 82345678****
   */
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

