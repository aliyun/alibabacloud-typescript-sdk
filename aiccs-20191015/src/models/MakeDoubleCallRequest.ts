// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakeDoubleCallRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  accountName?: string;
  /**
   * @remarks
   * The business data in JSON format.
   * 
   * @example
   * {"bizId": 123456}
   */
  bizData?: string;
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * The mobile phone number of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1502123****
   */
  memberPhone?: string;
  /**
   * @remarks
   * The outbound caller number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571000****
   */
  outboundCallNumber?: string;
  /**
   * @remarks
   * The mobile phone number of the agent. This parameter is required only when you make a call through the agent\"s mobile phone.
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

