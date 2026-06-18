// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakeDoubleCallRequest extends $dara.Model {
  /**
   * @remarks
   * Account name.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  accountName?: string;
  /**
   * @remarks
   * Business data carried in the request. The value must be in JSON format.
   * 
   * @example
   * {"bizId": 123456}
   */
  bizData?: string;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * User\\"s phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1502123****
   */
  memberPhone?: string;
  /**
   * @remarks
   * Outbound caller number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571000****
   */
  outboundCallNumber?: string;
  /**
   * @remarks
   * Agent\\"s phone number.  
   * > This parameter is required only if the call needs to be placed through the agent\\"s phone.
   * 
   * @example
   * 150****1234
   */
  servicerPhone?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      bizData: 'BizData',
      instanceId: 'InstanceId',
      memberPhone: 'MemberPhone',
      outboundCallNumber: 'OutboundCallNumber',
      servicerPhone: 'ServicerPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bizData: 'string',
      instanceId: 'string',
      memberPhone: 'string',
      outboundCallNumber: 'string',
      servicerPhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

