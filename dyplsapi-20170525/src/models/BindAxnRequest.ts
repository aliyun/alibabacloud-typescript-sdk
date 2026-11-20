// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnRequest extends $dara.Model {
  /**
   * @remarks
   * The ASR model ID. Valid values:
   * 
   * - 7ee372834d2f4cc7ac0d0ab2d0ae1aac: General-Telephone-Mandarin Chinese model.
   * 
   * - 9b4afe3d224e4fa3bf963697113e2f77: General-Telephone-Cantonese model.
   * 
   * - 3655a6cb94764145a1f9a38a3c3b3b4b: General-Telephone-Regional accent model.
   * 
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  ASRModelId?: string;
  /**
   * @remarks
   * The ASR status. Valid values:
   * 
   * - **false**: Disabled. This is the default value.
   * - **true**: Enabled.
   * 
   * @example
   * true
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Resets the number display logic in the binding relationship. Set the value to **1**, which indicates that the intermediate Number X is displayed for both the caller and the callee.
   * 
   * > Due to carrier regulatory restrictions, the setting to display the real number during a call does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The single-call restriction status. Valid values:
   * 
   * - **CONTROL_AX_DISABLE**: Number A cannot call Number X.
   * - **CONTROL_BX_DISABLE**: Number B cannot call Number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The ring duration. Unit: seconds.
   * 
   * @example
   * 10
   */
  callTimeout?: number;
  /**
   * @remarks
   * The city specified for selecting Number X.
   * 
   * > - If no available numbers in the specified city exist in the current number pool, or if this parameter is not specified, a number from another city is randomly assigned from the current number pool as Number X.
   * > - If the **Number X allocation mode** is set to **strict match mode**, the system returns an allocation error when no eligible numbers are available.
   * 
   * @example
   * Shanghai
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the binding relationship. Unit: seconds.
   * 
   * > The expiration time must be at least 60 seconds later than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  extend?: string;
  /**
   * @remarks
   * Specifies whether to record all calls generated for this binding relationship. Valid values:
   * 
   * - **true**: Records calls.
   * - **false**: Does not record calls. This is the default value.
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The number type.
   * 
   * > This parameter applies to former Alibaba Dayu customers. Alibaba Cloud users can ignore this parameter.
   * 
   * @example
   * AXB_170
   */
  noType?: string;
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
   * 34553330****
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Number A of the AXN privacy number. Number A can be a mobile phone number or a landline number. If it is a landline number, the area code must be included, and no hyphen is required between the area code and the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Number B of the AXN privacy number.
   * 
   * Number B can be a mobile phone number or a landline number. If it is a landline number, the area code must be included, and no hyphen is required between the area code and the phone number.
   * > - When Number A dials Number X, the call is forwarded to Number B by default. If Number B is not set, the call cannot be connected.
   * > - When Number A dials Number X, the call is forwarded to Number B only when the **callback mode for Number A** is set to **default mode**. Otherwise, the call cannot be connected.
   * > - To modify the **callback mode for Number A**, go to [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool?resType=1) > filter **AXN privacy number** > **Number Pool Management** > **Callback mode for Number A** > **Adjust Configuration**.
   * > - To update Number B, call the [UpdateSubscription](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-updatesubscription) operation.
   * 
   * @example
   * 138****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Number X of the AXN privacy number.
   * 
   * Number X is a privacy number that you have [purchased](https://dyplsnext.console.aliyun.com/numberbuy?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m) in the console.
   * 
   * > If Number X is not specified, a number is randomly selected from the specified number pool based on the ExpectCity parameter as Number X.
   * 
   * @example
   * 139****1111
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the number pool. You can obtain the **number pool key** on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m) page in the Privacy Protection console.
   * 
   * @example
   * FC2256****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Sets the corporate color ringback tone (CRBT) played during a dial-up to Number X after the AXN privacy number is attached.
   * 
   * Specify the **ringtone field** and **CRBT encoding** for this parameter.
   * 
   * **Ringtone field** valid values:
   * - AXNRing_AB: The ringtone Settings before Number A dials Number X and the call is connected (with a callback number) in AXN mode.
   * - AXNRing_A: The ringtone Settings before Number A dials Number X and the call is connected (without a callback number) in AXN mode.
   * - AXNRing_N: The ringtone Settings before Number N dials Number X and the call is connected in AXN mode.
   * - AXNRing_A_PICKUP: The ringtone Settings after Number A dials Number X and the call is connected in AXN mode.
   * - AXNRing_N_PICKUP: The ringtone Settings after Number N dials Number X and the call is connected in AXN mode.
   * 
   * **CRBT encoding**:
   * 
   * You can obtain the corporate CRBT encoding on the [Corporate CRBT Management](https://dyplsnext.console.aliyun.com/number-pool/ringtone?resType=1) page in the Privacy Protection console.
   * 
   * **Example**:
   * 
   * To set the ringtone played before Number A dials Number X and the call is connected (without a callback number), enter "AXNRing_A": "1000****1".
   * 
   * > The corporate CRBT configured at the attachment level takes precedence. If it is not set or does not take effect, the CRBT configured at the number pool level is used.
   * 
   * @example
   * {"AXNRing_N":"1000****1","AXNRing_A":"1000****1"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      callTimeout: 'CallTimeout',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      extend: 'Extend',
      isRecordingEnabled: 'IsRecordingEnabled',
      noType: 'NoType',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      callTimeout: 'number',
      expectCity: 'string',
      expiration: 'string',
      extend: 'string',
      isRecordingEnabled: 'boolean',
      noType: 'string',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

