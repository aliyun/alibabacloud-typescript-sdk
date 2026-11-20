// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubs700Request extends $dara.Model {
  /**
   * @remarks
   * The ASR model ID. Valid values:
   * - General-telephone-Mandarin Chinese model ID: 7ee372834d2f4cc7ac0d0ab2d0ae1aac.
   * - General-telephone-Cantonese model ID: 9b4afe3d224e4fa3bf963697113e2f77.
   * - General-telephone-regional accent model ID: 3655a6cb94764145a1f9a38a3c3b3b4b.
   * 
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  asrModelId?: string;
  /**
   * @remarks
   * Optional. The audio playback code.
   * - AXB mode:
   * ACallX_Apre: The audio playback code for the voice prompt played to Number A before the call is connected when Number A calls Number X.
   * ACallX_Ain: The audio playback code for the voice prompt played to Number A after the call is connected when Number A calls Number X.
   * ACallX_Bin: The audio playback code for the voice prompt played to Number B after the call is connected when Number A calls Number X.
   * BCallX_Bpre: The audio playback code for the voice prompt played to Number B before the call is connected when Number B calls Number X.
   * BCallX_Ain: The audio playback code for the voice prompt played to Number A after the call is connected when Number B calls Number X.
   * BCallX_Bin: The audio playback code for the voice prompt played to Number B after the call is connected when Number B calls Number X.
   * - GXB mode:
   * GCallX_Gpre: The audio playback code for the voice prompt played to the caller before the call is connected when a number in Group G calls Number X.
   * GCallX_Gin: The audio playback code for the voice prompt played to the caller after the call is connected when a number in Group G calls Number X.
   * GCallX_Bin: The audio playback code for the voice prompt played to Number B after the call is connected when a number in Group G calls Number X.
   * BCallX_Bpre: The audio playback code for the voice prompt played to Number B before the call is connected when Number B calls Number X.
   * BCallX_Gin: The audio playback code for the voice prompt played to the callee after the call is connected when Number B calls Number X.
   * BCallX_Bin: The audio playback code for the voice prompt played to Number B after the call is connected when Number B calls Number X.
   * 
   * @example
   * {
   * "ACallX_Apre":"185"
   * }
   */
  audio?: string;
  /**
   * @remarks
   * The new single-call restriction logic.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The default Number A for the GXB private number. Note: The callback mode can be set at the number pool level. When the callback mode is set to the default mode, this field takes effect. When Number B calls Number X, the call is forwarded to this Number A by default. If Number A is not set, the call cannot be connected. To update Number A, call the number binding modification API.
   * 
   * @example
   * 138****0000
   */
  defaultA?: string;
  /**
   * @remarks
   * The new expiration time of the binding relationship.
   * 
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @remarks
   * The new group ID in the binding relationship.
   * 
   * @example
   * Sample value
   */
  groupId?: string;
  /**
   * @remarks
   * Optional. The Industrial Internet identification code, which has a one-to-one mapping with the OrderId. The code supports characters such as periods (.) and forward slashes (/) to separate code domains. The code must not contain non-printable characters, such as spaces and line breaks. This field is required when the business user generates the Industrial Internet identification code.
   * 
   * @example
   * 700.100.1/12345678
   */
  industrialId?: string;
  /**
   * @remarks
   * Specifies whether to enable the ASR feature. Valid values:
   * - false: Disables the feature. This is the default value.
   * - true: Enables the feature.
   * 
   * @example
   * false
   */
  needAsr?: boolean;
  /**
   * @remarks
   * The new media selection in the binding relationship.
   * 
   * @example
   * true
   */
  needRecord?: boolean;
  /**
   * @remarks
   * The operation type. Valid values:
   * - updateNoA: Updates Number A.
   * - updateNoB: Updates Number B.
   * - updateExpire: Updates the validity period of the binding relationship.
   * - updateGroup: Updates the Number G group.
   * - updateNoDefaultA: Updates the default callback Number A in GXB mode.
   * - updateCallRestrict: Sets the single-call restriction.
   * - updateOutId: Updates the OutId field.
   * - updateIsRecordingEnabled: Updates the recording status in the binding.
   * - updateAsr: Updates the ASR status in the binding.
   * - updateAudio: Updates the ringtone configuration in the binding.
   * 
   * This parameter is required.
   * 
   * @example
   * updateNoA
   */
  operateType?: string;
  /**
   * @remarks
   * The order ID. This parameter is required in practice. Encrypt the order ID for reporting to the regulatory platform.
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
  ownerId?: number;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000016848****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the binding relationship, which uniquely identifies the number binding relationship.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000*****
   */
  subsId?: number;
  /**
   * @remarks
   * The new Number A in the binding relationship.
   * 
   * @example
   * 138****0000
   */
  telA?: string;
  /**
   * @remarks
   * The new Number B in the binding relationship.
   * 
   * @example
   * 136****0000
   */
  telB?: string;
  /**
   * @remarks
   * The intermediate Number X. If the business user does not specify Number X, the application platform assigns a number from the number pool as Number X.
   * 
   * This parameter is required.
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
      defaultA: 'DefaultA',
      expiration: 'Expiration',
      groupId: 'GroupId',
      industrialId: 'IndustrialId',
      needAsr: 'NeedAsr',
      needRecord: 'NeedRecord',
      operateType: 'OperateType',
      orderId: 'OrderId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
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
      defaultA: 'string',
      expiration: 'string',
      groupId: 'string',
      industrialId: 'string',
      needAsr: 'boolean',
      needRecord: 'boolean',
      operateType: 'string',
      orderId: 'string',
      outId: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'number',
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

