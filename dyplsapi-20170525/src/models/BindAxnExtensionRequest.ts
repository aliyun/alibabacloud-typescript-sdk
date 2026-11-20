// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnExtensionRequest extends $dara.Model {
  /**
   * @remarks
   * The ASR model ID. Valid values:
   * 
   * - General-Telephone-Mandarin Chinese model ID: 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   * 
   * - General-Telephone-Cantonese model ID: 9b4afe3d224e4fa3bf963697113e2f77
   * 
   * - General-Telephone-Regional accent model ID: 3655a6cb94764145a1f9a38a3c3b3b4b
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
   * Resets the number display logic in the binding relationship. Set the value to **1**, which indicates that the intermediate number X is displayed for both the caller and the callee.
   * 
   * > Due to carrier regulatory restrictions, the setting to display the real number during a call does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The call restriction status. Valid values:
   * 
   * - **CONTROL_AX_DISABLE**: Number A cannot call number X.
   * - **CONTROL_BX_DISABLE**: Number B cannot call number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The city where you want to select number X.
   * 
   * > - If no available numbers exist in the specified city in the current number pool, or if this parameter is not specified, the system randomly assigns a number from another city in the current number pool as number X.
   * > - If the **number X allocation mode** is set to **strict match mode**, the system returns an allocation error when no eligible numbers are available.
   * 
   * @example
   * Beijing
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the binding relationship. The time is accurate to seconds.
   * > The expiration time must be at least 1 minute later than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-05 12:00:00
   */
  expiration?: string;
  extend?: string;
  /**
   * @remarks
   * The extension number of number X. The extension number must be 1 to 3 digits in length.
   * 
   * > If you specify an extension number, you must also specify number X. This means that both the Extension and PhoneNoX parameters must be specified.
   * 
   * @example
   * 130
   */
  extension?: string;
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
   * abcdef
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number A of the AXN extension number.
   * Number A can be a mobile phone number or a landline number. For a landline number, you must add the area code. Do not add a hyphen between the area code and the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * The number B of the AXN extension number.
   * 
   * Number B can be a mobile phone number or a landline number. For a landline number, you must add the area code. Do not add a hyphen between the area code and the phone number.
   * > - When number A calls number X, the call is forwarded to number B by default. If number B is not specified, the call cannot be connected.
   * > - When number A calls number X, the call is forwarded to number B only when the **callback mode for number A** is set to **default mode**. If it is not set to **default mode**, the call cannot be connected.
   * > - To modify the **callback mode for number A**, go to [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool?resType=1) > filter by **AXN Extension Number** > **Number Pool Management** > **Callback Mode for Number A** > **Adjust Configuration**.
   * > - To update number B, call the [UpdateSubscription](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-updatesubscription) operation.
   * 
   * @example
   * 138****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * The number X of the AXN extension number.
   * 
   * Number X is a privacy number that you have [purchased](https://dyplsnext.console.aliyun.com/numberbuy?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m) in the console.
   * 
   * > If you do not specify number X, the system randomly assigns a number from the specified number pool as number X based on the ExpectCity parameter.
   * 
   * @example
   * 139****1111
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * You can obtain the **number pool key** on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m) page in the Privacy Protection console.
   * 
   * @example
   * FC10000011111****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Set the corporate ringback tone for dial-up to number X after the AXN extension number is bound.
   * 
   * Specify the **ringtone field** and **ringback tone encoding** for this parameter.
   * 
   * Valid values for the **ringtone field**:
   * - AXNRing_AB: The ringtone settings before number A calls number X and the call is connected (with a callback number) in the AXN extension number scenario.
   * - AXNRing_A: The ringtone settings before number A calls number X and the call is connected (without a callback number) in the AXN extension number scenario.
   * - AXNRing_N: The ringtone settings before the number on side N calls number X and the call is connected in the AXN extension number scenario.
   * - AXNRing_A_PICKUP: The ringtone settings after number A calls number X and the call is connected in the AXN extension number scenario.
   * - AXNRing_N_PICKUP: The ringtone settings after the number on side N calls number X and the call is connected in the AXN extension number scenario.
   * 
   * **Ringback tone encoding**:
   * 
   * You can obtain the corporate ringback tone encoding on the [Corporate Ringback Tone Management](https://dyplsnext.console.aliyun.com/number-pool/ringtone?resType=1) page in the Privacy Protection console.
   * 
   * **Example**:
   * 
   * To set the ringtone before number A calls number X and the call is connected (without a callback number), enter "AXNRing_A": "1000****1".
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
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      extend: 'Extend',
      extension: 'Extension',
      isRecordingEnabled: 'IsRecordingEnabled',
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
      expectCity: 'string',
      expiration: 'string',
      extend: 'string',
      extension: 'string',
      isRecordingEnabled: 'boolean',
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

