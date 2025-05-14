// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakeDoubleCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  accountName?: string;
  /**
   * @example
   * {"bizId": 123456}
   */
  bizData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1502123****
   */
  memberPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571000****
   */
  outboundCallNumber?: string;
  /**
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

