// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWebRTCStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 257e73de-1ee8-123b-0b9a-00163e0a****
   */
  callId?: string;
  /**
   * @remarks
   * General information.
   * 
   * This parameter is required.
   * 
   * @example
   * [null,"","","1647337928819","1647337888816","agent",null,"上海","10.10.XX.XX","11.1.XX.XX","2002"]
   */
  generalInfo?: string;
  /**
   * @remarks
   * The access point address.
   * 
   * This parameter is required.
   * 
   * @example
   * ["47.101.XX.XX","44368","47.104.XX.XX","37947"]
   */
  googAddress?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The content of the receiver report.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","1649328987","40","PCMU","383560","89","49","ssrc_1649328987_recv","2022-03-15T09:52:08.820Z","","0","20000"]
   */
  receiverReport?: string;
  /**
   * @remarks
   * The content of the sender report.
   * 
   * This parameter is required.
   * 
   * @example
   * ["11090","2055127460","0","2236","384592","ssrc_2055127460_send","2022-03-15T09:52:08.820Z","1"]
   */
  senderReport?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      generalInfo: 'GeneralInfo',
      googAddress: 'GoogAddress',
      instanceId: 'InstanceId',
      receiverReport: 'ReceiverReport',
      senderReport: 'SenderReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      generalInfo: 'string',
      googAddress: 'string',
      instanceId: 'string',
      receiverReport: 'string',
      senderReport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

