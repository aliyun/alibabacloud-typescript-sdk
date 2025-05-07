// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ASR model.
   * 
   * @example
   * 980abddb908f48e8b987cb2cd303****
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic speech recognition (ASR). Valid values:
   * 
   * *   **false** (default): disables ASR.
   * *   **true**: enables ASR.
   * 
   * @example
   * false
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Re-sets the phone number display logic in the phone number binding. Fixed value: **1**, indicating that phone number X is displayed on both the calling phone and the called phone.
   * 
   * >  Due to the regulatory restrictions imposed by carriers, the setting to display real phone numbers during calls does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * One-way call restrictions. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * *   **CONTROL_CLEAR_DISABLE**: The call restrictions are cleared.
   * 
   * >  This parameter is required when **OperateType** is set to **updateCallRestrict**.
   * 
   * @example
   * CONTROL_BX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * Re-sets the expiration time of the phone number binding.
   * 
   * > 
   * 
   * *   This parameter is required when **OperateType** is set to **updateExpire**.
   * 
   * *   The expiration time must be more than 1 minute later than the time when you call this API operation.
   * 
   * @example
   * 2019-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @remarks
   * The ID of number group G in the phone number binding.
   * 
   * >  This parameter is required when **OperateType** is set to **updateAxgGroup**.
   * 
   * @example
   * 1234
   */
  groupId?: string;
  /**
   * @remarks
   * Re-sets the recording status in the phone number binding.
   * 
   * >  This parameter does not have a default value. If you do not specify this parameter, the value of the corresponding field is not updated.
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The operation to modify the phone number binding. Valid values:
   * 
   * *   **updateNoA**: modifies phone number A.
   * *   **updateNoB**: modifies phone number B.
   * *   **updateExpire**: modifies the validity period of the binding.
   * *   **updateAxgGroup**: modifies number group G.
   * *   **updateCallRestrict**: modifies one-way call restrictions.
   * *   **updateCallDisplayType**: updates the number display logic for calls.
   * *   **updateOutId**: updates the value of the OutId parameter.
   * *   **updateIsRecordingEnabled**: updates the status of the recording feature in the binding.
   * 
   * This parameter is required.
   * 
   * @example
   * updateNoA
   */
  operateType?: string;
  /**
   * @remarks
   * Re-sets the value of the OutId parameter in the phone number binding.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number A in the phone number binding.
   * 
   * >  This parameter is required when **OperateType** is set to **updateNoA**.
   * 
   * @example
   * 1390000****
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the phone number binding.
   * 
   * >  This parameter is required when **OperateType** is set to **updateNoB**.
   * 
   * @example
   * 1390000****
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Phone number X in the phone number binding.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * >  This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC122356****
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * *   **AXB_170**
   * *   **AXN_170**
   * *   **AXN_95**
   * *   **AXN_EXTENSION_REUSE**
   * 
   * > 
   * 
   * *   This parameter is applicable to the original key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * *   This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Updates the ringtone code for enterprise Color Ring Back Tone (CRBT) in the phone number binding.
   * 
   * AXB product:
   * 
   * *   Ringtone setting when phone number A is used to call phone number X in the AXB binding: AXBRing_A
   * *   Ringtone setting when phone number B is used to call phone number X in the AXB binding: AXBRing_B
   * 
   * AXN product:
   * 
   * *   Ringtone setting (with a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_AB
   * *   Ringtone setting (without a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_A
   * *   Ringtone setting when phone number N is used to call phone number X in the AXN extension binding: AXNRing_N
   * 
   * AXG product:
   * 
   * *   Ringtone setting (with a callback number) when phone number A is used to call phone number X in the AXG binding: AXGRing_AB
   * *   Ringtone setting (without a callback number) when phone number A is used to call phone number X in the AXG binding: AXGRing_A
   * *   Ringtone setting when a phone number in number group G is used to call phone number X in the AXG binding: AXGRing_G
   * 
   * Enterprise CRBT codes: Enterprise CRBT codes can be queried in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). You can choose **Number Pool Management** > **Enterprise CRBT Management** to view and manage enterprise CRBT codes. You can also upload, delete, or perform other operations on enterprise CRBT codes.
   * 
   * >  The bound enterprise CRBTs are preferentially used. If no enterprise CRBT is set or the setting does not take effect, the enterprise CRBTs at the phone number pool level are used.
   * 
   * @example
   * {"AXBRing_B":"100000001","AXBRing_A":"100000001"}
   */
  ringConfig?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account), choose **Number and Number Pool** > **Number Management**. On the Number Management page, select the desired record and click Details to view the binding ID. Alternatively, you can view the value of the **SubsId** parameter returned by an API operation for a phone number binding such as BindAxb. The value of this parameter indicates a binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000076879****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      operateType: 'OperateType',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      operateType: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
      subsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

