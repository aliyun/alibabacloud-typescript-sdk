// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxb700Request extends $dara.Model {
  /**
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  asrModelId?: string;
  /**
   * @example
   * {
   * "ACallX_Apre":"185"
   * }
   */
  audio?: string;
  /**
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @example
   * 10
   */
  callTimeout?: number;
  /**
   * @example
   * {
   *     "endCallIvrPhoneNo":"A",
   *     "waitingDtmfTime":10,
   *     "maxLoop":3,
   *     "step1File":"62ab72f8-4750-4234-859e-e8d678c0cad3-flow_tts_test_1.wav",
   *     "step2File":"62ab72f8-4750-4234-859e-e8d678c0cad3-flow_tts_test_2.wav",
   *     "validKey":"1,2",
   *     "waitingEndCall":2
   * }
   */
  dtmfConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @example
   * 700.100.1/12345678
   */
  industrialId?: string;
  /**
   * @example
   * false
   */
  needAsr?: boolean;
  /**
   * @example
   * true
   */
  needRecord?: boolean;
  /**
   * @example
   * 12345678
   */
  orderId?: string;
  /**
   * @example
   * abcdef
   */
  outId?: string;
  /**
   * @example
   * abcdefgh
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FC2258****
   */
  poolKey?: string;
  /**
   * @example
   * mp3
   */
  recType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  telA?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 136****0000
   */
  telB?: string;
  /**
   * @example
   * 700********0000
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      asrModelId: 'AsrModelId',
      audio: 'Audio',
      callRestrict: 'CallRestrict',
      callTimeout: 'CallTimeout',
      dtmfConfig: 'DtmfConfig',
      expiration: 'Expiration',
      industrialId: 'IndustrialId',
      needAsr: 'NeedAsr',
      needRecord: 'NeedRecord',
      orderId: 'OrderId',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      recType: 'RecType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telA: 'TelA',
      telB: 'TelB',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModelId: 'string',
      audio: 'string',
      callRestrict: 'string',
      callTimeout: 'number',
      dtmfConfig: 'string',
      expiration: 'string',
      industrialId: 'string',
      needAsr: 'boolean',
      needRecord: 'boolean',
      orderId: 'string',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      poolKey: 'string',
      recType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telA: 'string',
      telB: 'string',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

