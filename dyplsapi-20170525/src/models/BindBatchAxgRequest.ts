// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindBatchAxgRequestAxgBindList extends $dara.Model {
  /**
   * @remarks
   * The ASR model ID. Valid values:
   * 
   * - The ID of the telephony model for Mandarin: 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   * 
   * - The ID of the telephony model for Cantonese: 9b4afe3d224e4fa3bf963697113e2f77
   * 
   * - The ID of the telephony model for local accents: 3655a6cb94764145a1f9a38a3c3b3b4b
   * 
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  ASRModelId?: string;
  /**
   * @remarks
   * The automatic speech recognition (ASR) status. Valid values:
   * 
   * - **false** (default): The ASR feature is disabled.
   * 
   * - **true**: The ASR feature is enabled.
   * 
   * @example
   * true
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Resets the number display logic for the binding. Set the value to **1**. This indicates that the intermediate number (Number X) is displayed to both the calling and called parties.
   * 
   * > Due to carrier regulations, the feature of displaying real numbers is not supported.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The one-way call restriction. Valid values:
   * 
   * - **CONTROL_AX_DISABLE**: Number A cannot call Number X.
   * 
   * - **CONTROL_BX_DISABLE**: Number B cannot call Number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The city to which Number X belongs.
   * 
   * > - If no numbers are available in the specified city, or if this parameter is not specified, a number from another city in the current number pool is randomly selected and used as Number X.
   * >
   * > - If **Number X Assignment Mode** is set to **Strict Match Mode** and no eligible number is found, an allocation error is reported.
   * 
   * @example
   * 北京
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the binding. The value is accurate to seconds.
   * 
   * > - The expiration time must be more than 1 minute later than the current time.
   * >
   * > - This parameter is required.
   * 
   * @example
   * 2022-07-11 01:05:15
   */
  expiration?: string;
  /**
   * @remarks
   * The group ID (GID) in the AXG binding.
   * 
   * You can view the GID in the following ways:
   * 
   * - Log on to the Phone Number Protection console. On the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page, select **AXG Privacy Number** and click **G Number Group Management** to view the GIDs of all G number groups.
   * 
   * - If you use the [CreateAxgGroup](https://help.aliyun.com/document_detail/110250.html) operation to create a G number group, the value of the **GroupId** parameter in the response is the GID.
   * 
   * > The G number group must contain at least one phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 200001234****
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to record all calls made in the binding. Valid values:
   * 
   * - **true**: Call recording is enabled.
   * 
   * - **false** (default): Call recording is disabled.
   * 
   * @example
   * false
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The extension field. This parameter is carried in call record messages.
   * 
   * @example
   * 1***********0fd
   */
  outId?: string;
  /**
   * @remarks
   * The external business ID.
   * 
   * @example
   * 20***************677
   */
  outOrderId?: string;
  /**
   * @remarks
   * Number A in the AXG binding. Number A can be a mobile phone number or a landline number. If you use a landline number, add the area code, and do not add a hyphen between the area code and the landline number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Number B in the AXG binding.
   * 
   * Number B can be a mobile phone number or a landline number. If you use a landline number, add the area code, and do not add a hyphen between the area code and the landline number.
   * 
   * > - When Number A calls Number X, the call is transferred to Number B by default. If Number B is not specified, the call fails.
   * >
   * > - When Number A calls Number X, if **A Callback Mode** is set to **Default Mode**, the call is transferred to Number B. Otherwise, the call fails.
   * >
   * > - To modify **A Callback Mode**, on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool?resType=1) page, select **AXG Privacy Number** and choose **Pool Management** > **A Callback Mode** > **Adjust Configuration**.
   * >
   * > - To update Number B, call the [UpdateSubscription](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-updatesubscription?spm=a2c4g.11186623.0.i16) operation.
   * 
   * @example
   * 138****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Number X in the AXG binding.
   * 
   * Number X must be a [purchased privacy number](https://dyplsnext.console.aliyun.com/numberbuy?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m). You can log on to the Phone Number Protection console, go to the [Number Management](https://dyplsnext.console.aliyun.com/number/list) page, and then select **AXG Privacy Number** to obtain Number X.
   * 
   * > If you do not specify Number X, a random number is selected from the number pool based on the **ExpectCity** parameter and used as Number X.
   * 
   * @example
   * 139****1111
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The corporate ringback tone (CRBT) that is played when Number X in an AXG binding is called.
   * 
   * You must specify the **ringtone field** and the **CRBT code**.
   * 
   * Valid values for the **ringtone field**:
   * 
   * - `AXGRing_AB`: the ringtone for calls from Number A to Number X (with a callback number).
   * 
   * - `AXGRing_A`: the ringtone for calls from Number A to Number X (without a callback number).
   * 
   * - `AXGRing_G`: the ringtone for calls from a number in Group G to Number X.
   * 
   * **CRBT code**:
   * 
   * You can log on to the Phone Number Protection console and obtain the CRBT code on the [Corporate CRBT Management](https://dyplsnext.console.aliyun.com/number-pool/ringtone?resType=1) page.
   * 
   * **Example**:
   * 
   * To set the ringtone for calls from Number A to Number X (without a callback number), specify `"AXGRing_A": "1000****1"`.
   * 
   * > The CRBT that is set at the binding level takes precedence over the CRBT that is set at the number pool level.
   * 
   * @example
   * {"AXGRing_AB":"1000****2","AXGRing_A":"1000****1"}
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
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
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
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
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

export class BindBatchAxgRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AXG bindings.
   * 
   * This parameter is required.
   */
  axgBindList?: BindBatchAxgRequestAxgBindList[];
  ownerId?: number;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * You can log on to the Phone Number Protection console and obtain the key on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      axgBindList: 'AxgBindList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axgBindList: { 'type': 'array', 'itemType': BindBatchAxgRequestAxgBindList },
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.axgBindList)) {
      $dara.Model.validateArray(this.axgBindList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

