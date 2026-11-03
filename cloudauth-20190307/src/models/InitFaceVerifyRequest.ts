// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable strict face quality detection in the SDK. Valid values:
   * 
   * - **Y**: Enables strict face quality detection.
   * 
   * - **N**: Does not enable strict face quality detection. This is the default value.
   * 
   * 
   * > 
   * > - If you enable this parameter, the SDK must integrate the [strict face quality detection module](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/description-of-sdk-package-clipping). Affected by strict quality detection, the success rate of face scanning may decrease.
   * > - Only Android SDK 2.3.24 and later are supported.
   * 
   * @example
   * N
   */
  appQualityCheck?: string;
  /**
   * @remarks
   * The user authorization ID. The maximum length is 64 characters.
   * 
   * @example
   * 92d46b9e9e2d703f2897f350d5bd4149
   */
  authId?: string;
  /**
   * @remarks
   * The date of birth on the ID document.
   * 
   * This parameter is required when the **CertType** parameter is set to **PASSPORT** and the **Mode** parameter is set to **3**.
   * 
   * @example
   * 1993-10-10
   */
  birthday?: string;
  /**
   * @remarks
   * The security token that you generate to prevent duplicate and tampered requests.
   * 
   * If you specify this parameter, the **CallbackToken** field is displayed in the callback URL.
   * 
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for authentication result notifications. The default callback request method is GET. The callback URL must start with `https`. After the authentication is completed, the platform invokes this URL and automatically appends the `certifyId` and `passed` fields. The value of the `passed` field is the subcode. Example: `https://www.aliyun.com?callbackToken=1000004826&certifyId=shaxxxx&passed=200`.
   * 
   * <notice>
   * 
   * - The callback is triggered only when the authentication is completed, including both successful and failed authentications. If the authentication is abandoned, an abnormal break occurs, or the authentication is not performed, no notification is sent. We recommend that you invoke the query API operation to obtain the authentication details after you receive the callback notification if needed.
   * - The accessibility of the URL is verified before the API operation is invoked. If the URL does not support public network access, a 401 error is returned.
   * - The API operation must return HTTP status code 200 after the callback. Otherwise, a retry is triggered, and two callbacks are sent within 3 seconds.
   * 
   * </notice>
   * 
   * @example
   * https://www.aliyun.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the camera selection feature. Valid values:
   * 
   * - **Y**: Enables the feature.
   * 
   * - **N**: Does not enable the feature. This is the default value.
   * 
   * > This feature takes effect only in the PC integration mode. After this feature is enabled, users can select a camera for authentication.
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
   * Zhang San
   */
  certName?: string;
  /**
   * @remarks
   * The ID document number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * The type of the ID document.
   * 
   * Only ID cards are supported. Set the value to IDENTITY_CARD.
   * 
   * @example
   * IDENTITY_CARD
   */
  certType?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * The CertifyId of a previous successful ID Verification. The photo used in the previous authentication is used as the comparison photo.
   * 
   * > You can specify only one of the following parameters to pass the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  certifyId?: string;
  /**
   * @remarks
   * The type of the returned **CertifyUrl**. Valid values:
   * 
   * - **L**: Original long URL.
   * 
   * - **S** (default): Short URL.
   * 
   * @example
   * L
   */
  certifyUrlStyle?: string;
  /**
   * @remarks
   * The device type of the Web SDK. Valid values: **WEB** and **H5**.
   * 
   * > Only Web SDK device types are supported.
   * 
   * @example
   * WEB
   */
  certifyUrlType?: string;
  /**
   * @remarks
   * Specifies whether to allow face image cropping. By default, cropping is not allowed. Valid values:
   * 
   * - T: Cropping is allowed.
   * 
   * - F: Cropping is not allowed.
   * 
   * > If the requested image is not collected by the standard liveness detection SDK, we recommend that you allow face image cropping. After this feature is enabled, the requested image is cropped and corrected before the request is sent to the service.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * Specifies whether to allow album upload. Valid values: Y and N. Default value: N.
   * 
   * @example
   * Y
   */
  enableAlbumUpload?: string;
  /**
   * @remarks
   * Specifies whether to enable the beauty filter. Valid values: Y and N.
   * 
   * @example
   * Y
   */
  enableBeauty?: string;
  /**
   * @remarks
   * Specifies whether to enable speech synthesis for H5 willingness authentication. Valid values: Y and N. Default value: Y.
   * 
   * @example
   * Y
   */
  enableTts?: string;
  /**
   * @remarks
   * The encryption algorithm. Only the SM2 algorithm is supported.
   * 
   * After encrypted transmission is enabled, you must pass the encrypted CertName and CertNo. For more information about encryption, see [Parameter encryption](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/description-of-parameter-encryption#task-2229332).
   * 
   * @example
   * SM2
   */
  encryptType?: string;
  /**
   * @remarks
   * The Base64-encoded image.
   * 
   * > You can specify only one of the following parameters to pass the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @remarks
   * The URL of the image in OSS. Only authorized OSS image URLs are supported.
   * 
   * > You can specify only one of the following parameters to pass the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @remarks
   * The type of the Device Assistant tag. Set the value to **DeviceRisk**.
   * 
   * >
   * > - Outputting Device Assistant tags incurs additional fees. For more information, see [Value-added services](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/face-guard).
   * > - If you do not need to output Device Assistant tags, you can leave this parameter empty or do not pass it.
   * 
   * @example
   * DeviceRisk
   */
  faceGuardOutput?: string;
  /**
   * @remarks
   * Specifies whether to display the I Have Completed Authentication button on the H5 downgrade page after authentication is completed. Valid values:
   * - **Y**: Displays the button.
   * - **N** (default): Hides the button.
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
   * The Metainfo environment parameter. You must obtain this parameter by using the client SDK.
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
   * The method to obtain the passport NFC verification elements. Valid values:
   * 
   * - **1**: User input. The end user manually enters the ID document element information by using the UI provided by the Alibaba Cloud SDK.
   * 
   * - **3**: External parameter input. The ID document element information is passed from external sources.
   * 
   * > When the NFC decoder decrypts the encrypted information of the passport chip, it needs to obtain three passport elements: name, date of birth, and expiration date.
   * 
   * @example
   * 1
   */
  mode?: string;
  /**
   * @remarks
   * The liveness detection type. Valid values:
   * > Only the following liveness detection types are supported. Custom actions or combinations are not supported.
   * 
   * Description
   * Only the following liveness detection types are supported. Custom actions or combinations are not supported.
   * 
   * - **LIVENESS** (default): Blinking.
   * 
   * - **PHOTINUS_LIVENESS**: Blinking and colorful light reflection.
   * 
   * - **MULTI_ACTION**: Blinking and head turning (the order is random).
   * 
   * - **MOVE_ACTION** (recommended): Moving closer or farther and blinking.
   * 
   * - **MOVE_PHOTINUS**: Moving closer or farther and colorful light reflection.
   * 
   * > 
   * >- **The default liveness detection type** is supported in the following SDK versions:
   * >   - Android SDK 1.2.6 and later
   * >   - iOS SDK 1.2.4 and later
   * >   - Harmony SDK 1.0.0 and later
   * >- Other types are supported in the latest SDK versions for Android, iOS, and Harmony. We recommend that you integrate the latest SDK version.
   * 
   * @example
   * MOVE_ACTION
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to intercept the request when multiple faces are detected on the terminal. Valid values:
   * 
   * - **Y**: Intercepts the request. The client prompts the user to scan the face again.
   * 
   * - **N** (default): Does not intercept the request. The largest face in the face scanning screen is sent to the server for security detection.
   * 
   * @example
   * Y
   */
  needMultiFaceCheck?: string;
  /**
   * @remarks
   * The name of the authorized OSS bucket.
   * 
   * > You can specify only one of the following parameters to pass the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The name of the object in the authorized OSS bucket.
   * 
   * > You can specify only one of the following parameters to pass the image: FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request.
   * 
   * The value is a 32-character alphanumeric string. The first few characters are a custom abbreviation of the merchant, the middle part can be a period of time, and the last part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The downgrade configuration when WebRTC or WebAssembly is incompatible during mobile H5 authentication. Valid values:
   * 
   * - **keep**: Downgrade is not supported. The result is directly returned.
   * 
   * - **url** (default): Downgrade is supported. The authentication URL is returned. The user opens or switches to a browser by using this URL for authentication.
   * 
   * - **video**: Downgrade is supported. The system camera is used to record a 3- to 5-second blinking video for authentication.
   * 
   * 
   * > 
   * > When the downgrade mode is set to video, the following features become invalid and product security is reduced. We recommend that you configure this mode only for security scenarios.
   * > - The liveness detection type setting does not take effect.
   * > - The VideoEvidence feature is not supported.
   * 
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @remarks
   * The fixed value. The value of this parameter varies based on the product solution:
   * - APP authentication solution: Set the value to ID_PRO.
   * - Face liveness verification solution: Set the value to PV_FV.
   * - Liveness detection solution: Set the value to LR_FR.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies whether to enable the rare character mode. Valid values:
   * 
   * - **Y**: Enables the mode. Before authentication, an information input box appears. The user must enter the name with rare characters and the ID card number, and agree to the agreement before the authentication process starts.
   * 
   * - **N**: Does not enable the mode. This is the default value.
   * 
   * @example
   * Y
   */
  rarelyCharacters?: string;
  /**
   * @remarks
   * Specifies whether to read the ID document photo. Valid values:
   * 
   * - **Y**: Reads the photo.
   * 
   * - **N**: Does not read the photo.
   * 
   * > If you need to use the face photo from the ID document in subsequent authentication steps, we recommend that you set this parameter to Y.
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
   * The ID of the authentication scenario.
   * 
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @remarks
   * The age-friendly configuration parameter. This parameter takes effect for each authentication request. You can select different parameters for each authentication request based on the business property, customer distribution, and operation attribute of your app. The following options are available. Default value: 0.
   * 
   * - **0**: Disables the age-friendly pattern for the current authentication request.
   * 
   * - **1**: Enables the age-friendly pattern for the current authentication request.
   * 
   * - **2**: Allows the user to select the pattern.
   * 
   * 
   * The end user can select the authentication pattern. The product guide page provides two authentication entries: Start Authentication and Senior Authentication Pattern. When the user selects Senior Authentication Pattern, the system enters the age-friendly pattern.
   * > 
   * > - The age-friendly parameter takes effect only when the liveness detection type **Model** is set to **LIVENESS** or **MULTI_ACTION**.
   * 
   * @example
   * 0
   */
  suitableType?: string;
  /**
   * @remarks
   * The URL of the UI configuration file.
   * 
   * For the complete configuration, see [Web SDK UI custom configuration](https://www.alibabacloud.com/help/en/id-verification/financial-grade-id-verification/web-sdk-ui-custom-configuration-description).
   * 
   * @example
   * www.aliyundoc.com
   */
  uiCustomUrl?: string;
  /**
   * @remarks
   * The custom user ID in the customer business. Make sure that the ID is unique.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The expiration date of the ID document.
   * 
   * This parameter is required when the **CertType** parameter is set to **PASSPORT** and the **Mode** parameter is set to **3**.
   * 
   * @example
   * 2039-06-10
   */
  validityDate?: string;
  /**
   * @remarks
   * Specifies whether to enable video evidence. Valid values:
   * 
   * - **true**: Enables video evidence.
   * 
   * - **false**: Does not enable video evidence. This is the default value.
   * 
   * > Because video files are large, the system discards video files to prioritize the transmission of necessary authentication images when the network is unstable. We recommend that you set your business to weakly depend on videos.
   * 
   * @example
   * false
   */
  videoEvidence?: string;
  /**
   * @remarks
   * The custom willingness content. This parameter is required when personalized settings are enabled. The value is a JSON string of a string list.
   * 
   * - In the read-along scenario: The content cannot exceed 60 Chinese characters (excluding punctuation marks), and the list contains only one element.
   * 
   * - In the Q&A scenario: You can configure up to three questions. Each question cannot exceed 30 Chinese characters, and each question is an element in the list.
   * 
   * @example
   * ["I, Mr. Wang, agree to the *** agreement."]
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
      enableAlbumUpload: 'EnableAlbumUpload',
      enableBeauty: 'EnableBeauty',
      enableTts: 'EnableTts',
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
      enableAlbumUpload: 'string',
      enableBeauty: 'string',
      enableTts: 'string',
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

