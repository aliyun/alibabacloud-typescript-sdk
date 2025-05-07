// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ASR model. On the [Automatic Speech Recognition (ASR) Model Management](https://dyplsnext.console.aliyun.com/?spm=5176.12818093.categories-n-products.ddypls.22e616d0a0tEFC#/asr) page, you can view the ID of the ASR model.
   * 
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
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
   * Re-sets the phone number display logic in the AXB binding. Fixed value: **1**, indicating that phone number X is displayed on both the calling phone and the called phone.
   * 
   * >  Due to the regulatory restrictions imposed by carriers, the setting to display real phone numbers during calls does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The status of the one-way call restriction. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The maximum ringing duration for each number in sequential ringing. Unit: seconds. The value ranges from 5 to 20.
   * 
   * @example
   * 10
   */
  callTimeout?: number;
  /**
   * @remarks
   * Specifies the dual tone multiple frequency (DTMF) key configuration in the AXB binding. The following content can be configured:
   * 
   * *   endCallIvrPhoneNo: for whom the audio is played, user A or user B.
   * *   waitingDtmfTime: the maximum waiting time after the first audio is played. The maximum waiting time is 30 seconds.
   * *   maxLoop: the maximum number of loop playback times of the first audio if the DTMF key is not matched. The maximum number of loop playback times is 5.
   * *   step1File: the name of the first audio.
   * *   step2File: the name of the second audio.
   * *   validKey: the valid key values, such as 1,2. Only two valid key values can be set, and the key values are separated by a comma (,).
   * *   waitingEndCall: The waiting duration to hang up a call. The waiting duration is allowed by a carrier. The maximum waiting duration is 10 seconds.
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
   * Specifies the city to which phone number X to be selected belongs.
   * 
   * *   If no phone number for the specified city is available in the current phone number pool or this parameter is not specified, a phone number that belongs to another city is randomly selected from the current phone number pool and assigned as phone number X.
   * *   If**Number X Assignment Mode** is set to **Strict Matching Mode** and no phone number meets the requirement, the system displays an allocation error.
   * 
   * @example
   * hangzhou
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the AXB binding.
   * 
   * >  The expiration time must be more than 1 minute later than the time when you call this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @remarks
   * Specifies whether to record all calls made by the bound phone numbers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The extension field for the external business. This parameter is returned in a call record receipt.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  /**
   * @remarks
   * The ID of the external business.
   * 
   * @example
   * 34553330****
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number A in the AXB binding.
   * 
   * Phone number A can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the AXB binding. If phone number A is used to call phone number X, the call is forwarded to phone number B. Phone number B can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * >  If you need to update phone number B, call the [UpdateSubscription](https://help.aliyun.com/document_detail/110253.html) operation.
   * 
   * @example
   * 139****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Phone number X in the AXB binding.
   * 
   * Phone number X is the phone number that you purchased in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) or by using the [BuySecretNo](https://help.aliyun.com/document_detail/110266.html) operation before you bind a phone number. Phone number X is used to forward calls.
   * 
   * If you do not specify this parameter, a random phone number is selected from the phone number pool based on the value of the ExpectCity parameter and is used as phone number X.
   * 
   * @example
   * 139****0000
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * @example
   * FC5526*****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Sets the ringtone code for enterprise Color Ring Back Tone (CRBT) in the AXB binding.
   * 
   * *   Ringtone setting when phone number A is used to call phone number X in the AXB binding: AXBRing_A
   * *   Ringtone setting when phone number B is used to call phone number X in the AXB binding: AXBRing_B
   * 
   * Enterprise CRBT codes: Enterprise CRBT codes can be queried in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). You can choose **Number Pool Management** > **Enterprise CRBT Management** to view enterprise CRBT codes. You can also upload, delete, or perform other operations on enterprise CRBT codes.
   * 
   * >  The bound enterprise CRBTs are preferentially used. If no enterprise CRBT is set or the setting does not take effect, the enterprise CRBTs at the phone number pool level are used.
   * 
   * @example
   * {"AXBRing_B":"1000****1","AXBRing_A":"1000****1"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      callTimeout: 'CallTimeout',
      dtmfConfig: 'DtmfConfig',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
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
      callTimeout: 'number',
      dtmfConfig: 'string',
      expectCity: 'string',
      expiration: 'string',
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

