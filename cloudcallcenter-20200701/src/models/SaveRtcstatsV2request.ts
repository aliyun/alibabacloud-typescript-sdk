// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRTCStatsV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  generalInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  googAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  receiverReport?: string;
  /**
   * @remarks
   * This parameter is required.
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

