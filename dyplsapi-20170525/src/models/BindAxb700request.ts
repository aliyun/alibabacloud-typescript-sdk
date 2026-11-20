// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxb700Request extends $dara.Model {
  /**
   * @remarks
   * Optional. The ASR model ID. Valid values:
   * 
   * - General-Phone-Mandarin model ID: 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   * - General-Phone-Cantonese model ID: 9b4afe3d224e4fa3bf963697113e2f77
   * - General-Phone-Regional Accent model ID: 3655a6cb94764145a1f9a38a3c3b3b4b.
   * 
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  asrModelId?: string;
  /**
   * @remarks
   * The audio prompt encoding.
   * 
   * - ACallX_Apre: The audio prompt encoding played to A before the call is connected when A calls X.
   * - ACallX_Ain: The audio prompt encoding played to A after the call is connected when A calls X.
   * - ACallX_Bin: The audio prompt encoding played to B after the call is connected when A calls X.
   * - BCallX_Bpre: The audio prompt encoding played to B before the call is connected when B calls X.
   * - BCallX_Ain: The audio prompt encoding played to A after the call is connected when B calls X.
   * - BCallX_Bin: The audio prompt encoding played to B after the call is connected when B calls X.
   * 
   * @example
   * {
   * "ACallX_Apre":"185"
   * }
   */
  audio?: string;
  /**
   * @remarks
   * The one-way call restriction logic. Valid values:
   * 
   * - CONTROL_AX_DISABLE: Number A cannot call number X.
   * 
   * - CONTROL_BX_DISABLE: Number B cannot call number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The sequential ringing duration. Unit: seconds. Valid values: 5 to 20.
   * 
   * @example
   * 10
   */
  callTimeout?: number;
  /**
   * @remarks
   * Optional. The DTMF key configuration for 700AXB number binding. The following items can be configured:
   * 
   * - endCallIvrPhoneNo: The audio playback target, A or B.
   * - waitingDtmfTime: The maximum wait time after the first audio file is played. Maximum value: 30 seconds.
   * - maxLoop dtmf: The maximum number of times the first audio file is replayed when a key press does not match. Maximum value: 5.
   * - step1File: The name of the first audio file.
   * - step2File: The name of the second audio file.
   * - validKey: The valid key values, such as 1,2. Only two valid key values can be configured, separated by commas (,).
   * - waitingEndCall: The carrier hang-up wait time. Maximum value: 10 seconds.
   * 
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
   * The expiration time of the number binding.
   * 
   * > - The expiration time must be at least 1 minute later than the current binding time, accurate to the second.
   * >- You can manually unbind the number at any time before the binding expires.
   * >- If you unbind a number that is in an active call, the current call is not affected.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @remarks
   * The industrial Internet identifier code, which has a one-to-one mapping with OrderId.
   * 
   * The code supports characters such as "." and "/" as domain separators. The code must not contain non-printable characters such as spaces or line breaks.
   * 
   * This field is required when the caller generates the industrial Internet identifier code independently.
   * 
   * > 
   * > - Either OrderId or IndustrialId is required depending on the business scenario.
   * 
   * @example
   * 700.100.1/12345678
   */
  industrialId?: string;
  /**
   * @remarks
   * Specifies whether to enable the ASR service. Valid values:
   * 
   * - false: Disable (default).
   * 
   * - true: Enable.
   * 
   * @example
   * false
   */
  needAsr?: boolean;
  /**
   * @remarks
   * Specifies whether call recording files are required for all calls made through this number binding. Valid values:
   * 
   * - true: Enable recording.
   * 
   * - false: Disable recording (default).
   * 
   * @example
   * true
   */
  needRecord?: boolean;
  /**
   * @remarks
   * The business order code.
   * 
   * - This code has a one-to-one mapping with the actual business order and must be unique.
   * 
   * - The code supports characters such as "." and "/" as domain separators. The code must not contain non-printable characters such as spaces or line breaks.
   * 
   * - This field is required when the caller submits a business order code and the platform generates an industrial Internet identifier code.
   * > 
   * > - Either OrderId or IndustrialId is required depending on the business scenario.
   * 
   * @example
   * 12345678
   */
  orderId?: string;
  /**
   * @remarks
   * The external business extension field. This parameter is returned in the call record receipt message.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  /**
   * @remarks
   * The external business ID.
   * 
   * @example
   * abcdefgh
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the China 700 number pool.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2258****
   */
  poolKey?: string;
  /**
   * @remarks
   * The recording file format. Valid values: mp3 and wav.
   * 
   * @example
   * mp3
   */
  recType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The phone number of user A.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  telA?: string;
  /**
   * @remarks
   * The phone number of user B.
   * 
   * This parameter is required.
   * 
   * @example
   * 136****0000
   */
  telB?: string;
  /**
   * @remarks
   * Optional. The intermediate number X.
   * > - If the caller does not specify an X number,
   * > - the platform assigns a number from the number pool as the X number.
   * 
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

