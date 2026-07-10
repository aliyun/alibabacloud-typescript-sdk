// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the SDK enables strict face quality detection:
   * 
   * - **Y**: enabled.
   * 
   * - **N**: disabled (default).
   * 
   * 
   * > 
   * > - If this parameter is enabled, the SDK must integrate the [strict face quality detection module](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/description-of-sdk-package-clipping). Strict quality detection may reduce the face authentication success rate.
   * > - Only Android SDK 2.3.24 and later versions are supported.
   * 
   * @example
   * N
   */
  appQualityCheck?: string;
  /**
   * @remarks
   * The user authorization ID. Maximum length: 64 characters.
   * 
   * @example
   * 92d46b9e9e2d703f2897f350d5bd4149
   */
  authId?: string;
  /**
   * @remarks
   * The date of birth on the certificate.
   * 
   * This field is required when **CertType** is set to **PASSPORT** and **Mode** is set to **3**.
   * 
   * @example
   * 1993-10-10
   */
  birthday?: string;
  /**
   * @remarks
   * The security token that you generate to prevent duplication and tampering.
   * 
   * If this value is set, the **CallbackToken** field is displayed in the callback URL.
   * 
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for the authentication result. The callback request method is GET by default, and the callback URL must start with `https`. After authentication is complete, the platform calls back this URL and automatically appends the `certifyId` and `passed` fields. The `passed` field returns the subcode value. Example: `https://www.alibabacloud.com?callbackToken=1000004826&certifyId=shaxxxx&passed=200.`
   * 
   * <notice>
   * 
   * - The callback is triggered only when authentication is complete (including both passed and failed). If the user abandons authentication, an abnormal break occurs, or authentication is not performed, no notification is sent. After receiving the callback notification, invoke the query operation to obtain authentication details if needed.
   * - The URL is validated for public network access before the operation is invoked. If the URL is not accessible over the public network, a 401 error is returned.
   * - After receiving the callback, return HTTP status code 200. Otherwise, a retry is triggered with two callbacks within 3 seconds.
   * 
   * </notice>
   * 
   * @example
   * https://www.aliyun.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the camera selection feature:
   * 
   * - **Y**: enabled.
   * 
   * - **N**: disabled (default).
   * 
   * > This feature takes effect only for PC integration mode. After this feature is enabled, users can select a camera for authentication.
   * 
   * @example
   * N
   */
  cameraSelection?: string;
  /**
   * @remarks
   * The real name.
   * 
   * @example
   * 张三
   */
  certName?: string;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * The certificate type.
   * Currently, only ID cards are supported. Set this parameter to IDENTITY_CARD.
   * 
   * @example
   * IDENTITY_CARD
   */
  certType?: string;
  /**
   * @remarks
   * >Warning: This parameter will be deprecated.</warning>
   * 
   * The CertifyId from a previous successful ID Verification. The photo from that authentication is used as the comparison photo.
   * 
   * > You can use one of the following four methods to submit a photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select only one method.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  certifyId?: string;
  /**
   * @remarks
   * The type of the returned **CertifyUrl**. Valid values:
   * 
   * - **L**: original long URL.
   * 
   * - **S** (default): short URL.
   * 
   * @example
   * L
   */
  certifyUrlStyle?: string;
  /**
   * @remarks
   * The Web SDK device type. Valid values: **WEB** or **H5**.
   * 
   * > Only Web SDK device types are supported.
   * 
   * @example
   * WEB
   */
  certifyUrlType?: string;
  /**
   * @remarks
   * Specifies whether to allow cropping of the face photo. By default, cropping is not allowed.
   * 
   * - T: allows cropping.
   * 
   * - F: does not allow cropping.
   * 
   * > If the requested image is not captured by a standard liveness detection SDK, allow cropping of the face photo. After this feature is enabled, the requested image is cropped and corrected before the request is sent to the service.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @example
   * Y
   */
  enableBeauty?: string;
  /**
   * @remarks
   * The encryption algorithm. Currently, only the SM2 algorithm is supported.
   * 
   * After encrypted transmission is enabled, pass in the encrypted CertName and CertNo. For more information about encryption, refer to [Parameter encryption description](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/description-of-parameter-encryption#task-2229332).
   * 
   * @example
   * SM2
   */
  encryptType?: string;
  /**
   * @remarks
   * The Base64-encoded photo.
   * 
   * > You can use one of the following four methods to submit a photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select only one method.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @remarks
   * The OSS photo URL. Currently, only authorized OSS photo URLs are supported.
   * 
   * > You can use one of the following four methods to submit a photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select only one method.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @remarks
   * The device assistant tag type. Valid values: **DeviceRisk**.
   * 
   * >
   * > - Selecting device assistant output incurs additional fees. For more information, refer to [Paid value-added services](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/face-guard).
   * > - If you do not need device assistant tag output, do not pass this parameter or pass an empty value.
   * 
   * @example
   * DeviceRisk
   */
  faceGuardOutput?: string;
  /**
   * @remarks
   * Specifies whether to display the "I have completed authentication" button on the H5 fallback page after authentication is complete:
   * - **Y**: enabled.
   * - **N** (default): disabled.
   * 
   * @example
   * Y
   */
  h5DegradeConfirmBtn?: string;
  /**
   * @remarks
   * The IP address of the user.
   * 
   * @example
   * 114.xxx.xxx.xxx
   */
  ip?: string;
  /**
   * @remarks
   * The Metainfo environment parameter, which must be obtained through the client SDK.
   * 
   * @example
   * {"zimVer":"3.0.0","appVersion": "1","bioMetaInfo": "4.1.0:11501568,0","appName": "com.aliyun.antcloudauth","deviceType": "ios","osVersion": "iOS 10.3.2","apdidToken": "","deviceModel": "iPhone9,1"}
   */
  metaInfo?: string;
  /**
   * @remarks
   * The mobile phone number of the user.
   * 
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  /**
   * @remarks
   * The method for obtaining passport NFC verification elements:
   * 
   * - **1**: user input. The end user manually enters certificate element information using the UI provided by the Alibaba Cloud SDK.
   * 
   * - **3**: external parameter input. Certificate element information is passed in externally.
   * 
   * > To decode the encrypted information on the passport chip through NFC, three passport elements are required: name, date of birth, and certificate expiration date.
   * 
   * @example
   * 1
   */
  mode?: string;
  /**
   * @remarks
   * The liveness detection type. Valid values:
   * > The liveness detection type supports only the following values. Custom actions or combinations are not supported.
   * 
   * Note:
   * The liveness detection type supports only the following values. Custom actions or combinations are not supported.
   * 
   * - **LIVENESS** (default): blink
   * 
   * - **PHOTINUS_LIVENESS**: blink + colorful light
   * 
   * - **MULTI_ACTION**: blink + head shake (the order of blink and head shake is random)
   * 
   * - **MOVE_ACTION** (recommended): move closer/farther + blink
   * 
   * - **MOVE_PHOTINUS**: move closer/farther + colorful light
   * 
   * > 
   * >- **The default liveness detection type** is supported in the following versions:
   * >   - Android SDK 1.2.6 and later
   * >   - iOS SDK 1.2.4 and later
   * >   - Harmony SDK 1.0.0 and later
   * >- Other types are supported in the latest Android/iOS/Harmony SDK versions. Integrate the latest version.
   * 
   * @example
   * MOVE_ACTION
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to block authentication when multiple faces are detected on the device. Valid values:
   * 
   * - **Y**: blocked. The client prompts the user to redo face authentication.
   * 
   * - **N** (default): not blocked. The largest face in the frame is sent to the server for security detection.
   * 
   * @example
   * Y
   */
  needMultiFaceCheck?: string;
  /**
   * @remarks
   * The bucket name of the authorized OSS space.
   * 
   * > You can use one of the following four methods to submit a photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select only one method.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The file name in the authorized OSS space.
   * 
   * > You can use one of the following four methods to submit a photo: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, or OSS. Select only one method.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request.
   * 
   * The value is a 32-character alphanumeric string. The first few characters are a custom abbreviation defined by the merchant, the middle part can be a time segment, and the last part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The fallback configuration when WebRTC or WebAssembly is incompatible during mobile H5 authentication.
   * 
   * - **keep**: fallback is not supported. The system returns directly.
   * 
   * - **url** (default): fallback is supported. An authentication URL is returned. The user opens or switches to a browser to authenticate using this URL.
   * 
   * - **video**: fallback is supported. The system camera records a 3 to 5 second blink video for authentication.
   * 
   * 
   * > 
   * > When the fallback mode is Video, the following features are disabled and product security is reduced. Configure this mode only for security scenarios.
   * > - The liveness detection type setting does not take effect.
   * > - The VideoEvidence feature is not supported.
   * 
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @remarks
   * A fixed value. This parameter varies depending on the product plan:
   * - APP authentication plan: set to ID_PRO.
   * - Face liveness verification plan: set to PV_FV.
   * - Liveness detection plan: set to LR_FR.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies whether to enable the rare character mode:
   * 
   * - **Y**: enabled. An information input box is displayed before authentication. The user must enter the name with rare characters and the ID card number, and agree to the protocol before starting the authentication process.
   * 
   * - **N**: disabled (default).
   * 
   * @example
   * Y
   */
  rarelyCharacters?: string;
  /**
   * @remarks
   * Specifies whether to read the certificate photo:
   * 
   * - **Y**: read.
   * 
   * - **N**: do not read.
   * 
   * > If the certificate face photo is needed in subsequent authentication steps, set this parameter to Y.
   * 
   * @example
   * Y
   */
  readImg?: string;
  /**
   * @remarks
   * The redirect URL for the merchant business page.
   * 
   * @example
   * www.aliyun.com
   */
  returnUrl?: string;
  /**
   * @remarks
   * The authentication scenario ID.
   * 
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @remarks
   * The elderly-friendly configuration parameter. This parameter takes effect for each authentication request. You can select different parameters for each authentication request based on the business attributes, customer distribution, and operational characteristics of your app. Valid values (default: 0):
   * 
   * - **0**: disabled. The elderly-friendly mode is not enabled for the current authentication request.
   * 
   * - **1**: enabled. The elderly-friendly mode is enabled for the current authentication request.
   * 
   * - **2**: user choice.
   * 
   * 
   * Allows the end user to select the authentication mode. The product guide page provides two authentication entries: "Start Authentication" and "Elderly Authentication Mode". When the user selects "Elderly Authentication Mode", the system enters elderly-friendly mode.
   * > 
   * > - The elderly-friendly parameter takes effect only when the liveness detection type **Model** is set to **LIVENESS** or **MULTI_ACTION**.
   * 
   * @example
   * 0
   */
  suitableType?: string;
  /**
   * @remarks
   * The UI configuration file URL.
   * 
   * You can view the complete configuration in [Web SDK UI custom configuration](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/web-sdk-ui-custom-configuration-description).
   * 
   * @example
   * www.aliyundoc.com
   */
  uiCustomUrl?: string;
  /**
   * @remarks
   * The custom user ID defined by the business. Keep this value unique.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The certificate expiration date.
   * 
   * This field is required when **CertType** is set to **PASSPORT** and **Mode** is set to **3**.
   * 
   * @example
   * 2039-06-10
   */
  validityDate?: string;
  /**
   * @remarks
   * Specifies whether to enable video evidence:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled (default).
   * 
   * > Because video files are large, the system discards video files to prioritize the transmission of essential authentication images when the network is unstable. Set video as a weak dependency in your business logic.
   * 
   * @example
   * false
   */
  videoEvidence?: string;
  /**
   * @remarks
   * The custom voluntary content. This parameter is required when personalized settings are enabled. The format is a JSON string of a String List.
   * 
   * - For read-aloud scenarios: the content cannot exceed 60 Chinese characters (excluding punctuation), and the List contains only 1 element.
   * 
   * - For Q&A scenarios: a maximum of 3 questions can be set. Each question cannot exceed 30 Chinese characters, and each question is a separate element in the List.
   * 
   * @example
   * ["本人王先生同意***协议。"]
   */
  voluntaryCustomizedContent?: string;
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authId: 'AuthId',
      birthday: 'Birthday',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      cameraSelection: 'CameraSelection',
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
      certifyId: 'CertifyId',
      certifyUrlStyle: 'CertifyUrlStyle',
      certifyUrlType: 'CertifyUrlType',
      crop: 'Crop',
      enableBeauty: 'EnableBeauty',
      encryptType: 'EncryptType',
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      faceGuardOutput: 'FaceGuardOutput',
      h5DegradeConfirmBtn: 'H5DegradeConfirmBtn',
      ip: 'Ip',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      mode: 'Mode',
      model: 'Model',
      needMultiFaceCheck: 'NeedMultiFaceCheck',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      procedurePriority: 'ProcedurePriority',
      productCode: 'ProductCode',
      rarelyCharacters: 'RarelyCharacters',
      readImg: 'ReadImg',
      returnUrl: 'ReturnUrl',
      sceneId: 'SceneId',
      suitableType: 'SuitableType',
      uiCustomUrl: 'UiCustomUrl',
      userId: 'UserId',
      validityDate: 'ValidityDate',
      videoEvidence: 'VideoEvidence',
      voluntaryCustomizedContent: 'VoluntaryCustomizedContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authId: 'string',
      birthday: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      cameraSelection: 'string',
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      certifyId: 'string',
      certifyUrlStyle: 'string',
      certifyUrlType: 'string',
      crop: 'string',
      enableBeauty: 'string',
      encryptType: 'string',
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      faceGuardOutput: 'string',
      h5DegradeConfirmBtn: 'string',
      ip: 'string',
      metaInfo: 'string',
      mobile: 'string',
      mode: 'string',
      model: 'string',
      needMultiFaceCheck: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      procedurePriority: 'string',
      productCode: 'string',
      rarelyCharacters: 'string',
      readImg: 'string',
      returnUrl: 'string',
      sceneId: 'number',
      suitableType: 'string',
      uiCustomUrl: 'string',
      userId: 'string',
      validityDate: 'string',
      videoEvidence: 'string',
      voluntaryCustomizedContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

