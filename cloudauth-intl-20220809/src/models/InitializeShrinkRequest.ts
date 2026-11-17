// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * <warning>This feature is not supported by the **Web SDK**. To use this feature, refer to the App SDK integration guide.</warning>
   * 
   * Specifies whether to enable strict face quality detection. Valid values:
   * - Y: Enable. This is the default value.
   * - N: Disable.
   * 
   * @example
   * N
   */
  appQualityCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable authoritative identity verification. This parameter is currently applicable only to second-generation ID cards in the Chinese mainland and is used for IDV products.
   * 
   * @example
   * Y
   */
  authorize?: string;
  /**
   * @remarks
   * The automatic document page classification configuration. This parameter takes effect only when DocType is set to a country or region code. You can specify the pages to be captured based on the specific document type code. For documents that are not configured, only the front page is captured.
   * 
   * @example
   * {"BRA01001":"01","BRA01002":"01,02"}
   */
  autoDocPageConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic registration.
   * 
   * @example
   * 0
   */
  autoRegistration?: string;
  /**
   * @remarks
   * The security token used for anti-replay and anti-tampering verification. If this parameter is passed, the CallbackToken field is displayed in the callback URL.
   * 
   * @example
   * 7ca5c68d869344ea8eeb30cdfd544544-6358700
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for authentication result notifications. The default callback request method is GET, and the callback URL must start with https. After the authentication is completed, the platform calls back this URL and automatically adds the transactionId, passed, and subcode fields.
   * 
   * @example
   * https://www.aliyun.com?callbackToken=1000004826&transactionId=shaxxxx&passed=Y&subCode=200
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the adaptive color-changing window border. Valid values:
   * - **Y**: Enable.
   * - **N**: Disable.
   * 
   * @example
   * N
   */
  chameleonFrameEnable?: string;
  /**
   * @remarks
   * Specifies whether to crop the image. This parameter is applicable to IDV products.
   * 
   * @example
   * N
   */
  crop?: string;
  /**
   * @remarks
   * The date of birth on the document, in the format of YYMMDD (6 digits).
   * 
   * This parameter is required when **MRTDInput** is set to **2**.
   * 
   * @example
   * -
   */
  dateOfBirth?: string;
  /**
   * @remarks
   * The expiration date on the document, in the format of YYMMDD (6 digits).
   * 
   * This parameter is required when **MRTDInput** is set to **2**.
   * 
   * @example
   * -
   */
  dateOfExpiry?: string;
  /**
   * @remarks
   * The real name of the user.
   * 
   * @example
   * John Doe
   */
  docName?: string;
  /**
   * @remarks
   * The document number of the user.
   * 
   * @example
   * 411xxxxxxxxxxx0001
   */
  docNo?: string;
  /**
   * @remarks
   * The custom configuration passed by the customer to specify whether to capture more pages.
   */
  docPageConfigShrink?: string;
  /**
   * @remarks
   * The photo capture mode for document collection. Valid values:
   * 
   * - manual: Manual capture.
   * - auto: Automatic capture. This is the default value.
   * 
   * @example
   * manual
   */
  docScanMode?: string;
  /**
   * @remarks
   * The type of the identity document.
   * >For the eKYC_PRO and ID_OCR_MAX solutions, see the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/certificate-code-table?spm=a2c63.p38356.help-menu-445633.d_2_8_2_0.279147abwKAWbr
   * 
   * >For the ID_OCR, eKYC, and eYKC_MIN solutions, see the identity document type list in the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/gnhekqy05ni51m4c?spm=a2c63.p38356.help-menu-445633.d_2_3_1_0_0_0.6243244777KoZ7
   * 
   * @example
   * 00000001
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to store a video for evidence. Valid values:
   * 
   * - N: Not required. This is the default value.
   * 
   * - Y: A video of the user\\"s face scanning process (a 1 to 2-second video file) is captured during the authentication process and returned through the query API.
   * 
   * > Because video files are large, the system discards video files when the network is unstable to prioritize the transmission of images required for authentication.
   * 
   * @example
   * N
   */
  docVideo?: string;
  /**
   * @remarks
   * The document number.
   * 
   * This parameter is required when **MRTDInput** is set to **2**.
   * 
   * @example
   * -
   */
  documentNumber?: string;
  /**
   * @remarks
   * Specifies whether the recognition result page is editable during the document OCR recognition phase. Valid values:
   * 
   * - **0**: Not editable.
   * 
   * - **1**: Editable. This is the default value.
   * 
   * @example
   * 0
   */
  editOcrResult?: string;
  /**
   * @remarks
   * The Indonesian email address. This field takes effect only when Authorize is set to T.
   * 
   * > 
   * > - This field is required only when the Indonesian data source is enabled.
   * 
   * @example
   * evxxx@imigxxxxx.go.id
   */
  email?: string;
  /**
   * @remarks
   * The experience code.
   * 
   * @example
   * 9be7b7d0180041219e5ab03ac6dab5fb
   */
  experienceCode?: string;
  /**
   * @remarks
   * Specifies whether to return additional face attribute information. Valid values:
   * - N: Do not return. This is the default value.
   * - Y: Return. The result is located in Result.ExtFaceInfo.FaceAttributeInfo.
   * 
   * @example
   * N
   */
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The face databases to be compared.
   * 
   * @example
   * 0e0c34a77f
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * The Base64-encoded string of the photo. If you choose to pass the face photo by using the FacePictureBase64 parameter, check the photo size and do not pass an oversized photo.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * The URL of the face photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * ***
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * The face database for registration.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * The threshold for face verification.
   * 
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * The quality of the face image. This parameter is applicable to IDV products.
   * 
   * @example
   * Y
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * Specifies whether to enable document anti-spoofing detection. This parameter is applicable to IDV products.
   * 
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @remarks
   * The custom threshold mode for OCR quality detection. Valid values:
   * - **0**: Standard mode.
   * - **1**: Strict mode.
   * - **2**: Loose mode.
   * - **3**: Quality detection disabled. This is the default value.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The forced centering configuration. Specifies whether to intercept when an off-center face is detected on the client. Valid values:
   * 
   * - Y: Intercept. The client prompts the user to scan their face again.
   * - N: Do not intercept. This is the default value. The largest face in the scanning screen is sent to the server for security detection.
   * 
   * @example
   * Y
   */
  isForceFaceCentered?: string;
  /**
   * @remarks
   * The language configuration. This parameter is applicable to IDV products.
   * 
   * @example
   * en
   */
  languageConfig?: string;
  /**
   * @remarks
   * The input source of the MRTD verification parameter. This parameter is required to decrypt information when NFC reads the document chip information. Valid values:
   * 
   * - **0**: User input.
   * 
   * - **1**: OCR reading.
   * 
   * - **2**: API input.
   * 
   * @example
   * 0
   */
  MRTDInput?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, used for subsequent troubleshooting. It supports a combination of letters and digits, with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a mobile phone number or email address. It is highly recommended to desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The MetaInfo environment parameter, which must be obtained through the client SDK.
   * 
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0 (Macintosh
   */
  metaInfo?: string;
  /**
   * @remarks
   * The Indonesian phone number. The format must be verified, starting with +62 followed by 9 to 11 digits. This field takes effect only when Authorize is set to T.
   * 
   * > 
   * > - This field is required only when the Indonesian data source is enabled.
   * 
   * @example
   * +6281293671234
   */
  mobile?: string;
  /**
   * @remarks
   * The type of liveness detection to be performed. Valid values:
   * 
   * - **LIVENESS**: Blink liveness detection. This is the default value.
   * 
   * - **PHOTINUS_LIVENESS**: Dual detection of blink liveness and photinus liveness.
   * 
   * > 
   * > - For supported SDK versions, see [SDK release notes](https://www.alibabacloud.com/help/zh/ekyc/latest/sdk-publishing-record?spm=a2c63.p38356.0.i99).
   * > - Dual detection of photinus liveness is not supported on the PC client.
   * 
   * @example
   * PHOTINUS_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to intercept when multiple faces are detected on the client. Valid values:
   * 
   * - Y: Intercept. The client prompts the user to scan their face again.
   * - N: Do not intercept. This is the default value. The largest face in the scanning screen is sent to the server for security detection.
   * 
   * @example
   * Y
   */
  needMultiFaceCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR. This parameter is applicable to IDV products.
   * 
   * @example
   * Y
   */
  ocr?: string;
  /**
   * @remarks
   * Specifies whether to return additional standardized format fields for OCR recognition. Valid values:
   * 
   * - 0: No. This is the default value.
   * 
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The configuration of the pages to be captured. Separate multiple pages with commas (,). Valid values:
   * - **01**: The portrait side of the identity document.
   * 
   * - **01,02**: The portrait side and the back side of the identity document.
   * 
   * > When this value is set to 01,02, only Chinese ID cards and Vietnamese ID cards are supported.
   * 
   * @example
   * 01
   */
  pages?: string;
  /**
   * @remarks
   * Specifies whether to allow degraded processing when compatibility issues occur during mobile H5 authentication. Valid values:
   * 
   * - **url**: Degradation supported. This is the default value. The page displays the authentication URL, and the user can copy the URL to open it or switch browsers to continue the authentication flow.
   * 
   * - **keep**: Degradation not supported. The error cause is directly returned, and the authentication flow ends.
   * 
   * 
   * > 
   * > - This switch is not supported on the PC client.
   * > - If the business application scenario is to complete authentication in a web page embedded in an app, we recommend that you set this parameter to keep to disable URL degradation.
   * 
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @remarks
   * The product solution to be integrated.
   * >For more information, see the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/product-introduction?spm=a2c63.p38356.0.i1
   * 
   * @example
   * eKYC
   */
  productCode?: string;
  /**
   * @remarks
   * The sequence of document and face verification. Valid values:
   * 
   * - DOC_FACE: Document first, then face. This is the default value.
   * - FACE_DOC: Face first, then document.
   * 
   * Note: This parameter is required only when ProductCode is set to KYC_GLOBAL.
   * 
   * @example
   * DOC_FACE
   */
  productFlow?: string;
  /**
   * @remarks
   * The number of duplicate faces returned.
   * 
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @remarks
   * The client-side callback URL.
   * 
   * @example
   * http*****
   */
  returnUrl?: string;
  /**
   * @remarks
   * Specifies whether to save the face photo.
   * 
   * @example
   * 0
   */
  saveFacePicture?: string;
  /**
   * @remarks
   * The scene code. This parameter is applicable to IDV products.
   * 
   * @example
   * 123****123
   */
  sceneCode?: string;
  /**
   * @remarks
   * The pattern that represents different security levels of the authentication flow. Valid values:
   * 
   * - 01: Normal pattern. This is the default value.
   * - 02: safe mode. This is a relatively strict pattern and is active in high-risk scenarios. This parameter is applicable to IDV products.
   * 
   * @example
   * 01
   */
  securityLevel?: string;
  /**
   * @remarks
   * Specifies whether to display the album upload entry during the document OCR recognition phase. Valid values:
   * 
   * - **1**: Display. This is the default value.
   * 
   * - **0**: Do not display.
   * 
   * @example
   * 1
   */
  showAlbumIcon?: string;
  /**
   * @remarks
   * Specifies whether to display the guide page. Valid values:
   * 
   * - **1**: Display. This is the default value.
   * 
   * - **0**: Do not display.
   * 
   * @example
   * 1
   */
  showGuidePage?: string;
  /**
   * @remarks
   * Specifies whether to display the recognition result page during the document OCR recognition phase. Valid values:
   * 
   * - **1**: Display. This is the default value.
   * 
   * - **0**: Do not display.
   * 
   * @example
   * 1
   */
  showOcrResult?: string;
  /**
   * @remarks
   * The custom UI configuration. Convert your custom UI configuration into a JSON string based on the configuration template and pass it through this parameter. For more information, see [Customize IDV UI styles](https://www.alibabacloud.com/help/zh/ekyc/latest/idv-kyc-custom-skin?spm=a2c63.p38356.0.i60).
   * 
   * @example
   * {
   *   "guidepage:": {****}, 
   *   "ocrPage": {****},
   *   "ocrResultPage": [****],
   *   "facePage": {****},
   * }
   */
  styleConfig?: string;
  /**
   * @remarks
   * The Base64-encoded string of the portrait photo.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * The URL of the portrait photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://www.xxxxx.com/1.jpg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * The custom action pool configuration for liveness detection. This parameter is required when Model is set to TEMPLATE. Configuration rules: Separate multiple action codes with commas (,). Best Practices: Include at least one frontal face action (such as blinking), and the total number of actions should not exceed 3. Action code lookup table:
   * 
   * - Blink: 01
   * - Open Mouth: 02
   * - Shake Head Left: 03
   * - Shake Head Right: 04
   * - Move Farther: 05
   * - Move Closer: 06
   * - Photinus: 07
   * 
   * @example
   * 01,02,07
   */
  templateConfig?: string;
  /**
   * @remarks
   * **[Deprecated]** The random mode is no longer recommended, and this field is deprecated.
   * 
   * @example
   * 2
   */
  templateRanCount?: string;
  /**
   * @remarks
   * The execution sequence of liveness detection actions in TemplateConfig. This parameter is required when Model is set to TEMPLATE. Valid values:
   * 
   * - Seq: Execute from left to right in the sequence configured in TemplateConfig.
   * 
   * @example
   * Seq
   */
  templateType?: string;
  /**
   * @remarks
   * Specifies whether to use the current face to overwrite the existing face when MerchantUserId already exists during automatic registration. Valid values:
   * - Y: Overwrite.
   * - N: Do not overwrite and return that the UserId already exists.
   * 
   * @example
   * N
   */
  updateFaceIfUserExists?: string;
  /**
   * @remarks
   * Specifies whether to enable NFC verification when **DocType** is set to 01000000 (global passport). Valid values:
   * - **Y**: Enable.
   * - **N**: Disable.
   * 
   * @example
   * N
   */
  useNFC?: string;
  /**
   * @remarks
   * The type of verification.
   * 
   * @example
   * 0
   */
  verifyModel?: string;
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authorize: 'Authorize',
      autoDocPageConfig: 'AutoDocPageConfig',
      autoRegistration: 'AutoRegistration',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      chameleonFrameEnable: 'ChameleonFrameEnable',
      crop: 'Crop',
      dateOfBirth: 'DateOfBirth',
      dateOfExpiry: 'DateOfExpiry',
      docName: 'DocName',
      docNo: 'DocNo',
      docPageConfigShrink: 'DocPageConfig',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      docVideo: 'DocVideo',
      documentNumber: 'DocumentNumber',
      editOcrResult: 'EditOcrResult',
      email: 'Email',
      experienceCode: 'ExperienceCode',
      faceAttributeCheck: 'FaceAttributeCheck',
      faceGroupCodes: 'FaceGroupCodes',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      faceRegisterGroupCode: 'FaceRegisterGroupCode',
      faceVerifyThreshold: 'FaceVerifyThreshold',
      idFaceQuality: 'IdFaceQuality',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      isForceFaceCentered: 'IsForceFaceCentered',
      languageConfig: 'LanguageConfig',
      MRTDInput: 'MRTDInput',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      model: 'Model',
      needMultiFaceCheck: 'NeedMultiFaceCheck',
      ocr: 'Ocr',
      ocrValueStandard: 'OcrValueStandard',
      pages: 'Pages',
      procedurePriority: 'ProcedurePriority',
      productCode: 'ProductCode',
      productFlow: 'ProductFlow',
      returnFaces: 'ReturnFaces',
      returnUrl: 'ReturnUrl',
      saveFacePicture: 'SaveFacePicture',
      sceneCode: 'SceneCode',
      securityLevel: 'SecurityLevel',
      showAlbumIcon: 'ShowAlbumIcon',
      showGuidePage: 'ShowGuidePage',
      showOcrResult: 'ShowOcrResult',
      styleConfig: 'StyleConfig',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureUrl: 'TargetFacePictureUrl',
      templateConfig: 'TemplateConfig',
      templateRanCount: 'TemplateRanCount',
      templateType: 'TemplateType',
      updateFaceIfUserExists: 'UpdateFaceIfUserExists',
      useNFC: 'UseNFC',
      verifyModel: 'VerifyModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authorize: 'string',
      autoDocPageConfig: 'string',
      autoRegistration: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      chameleonFrameEnable: 'string',
      crop: 'string',
      dateOfBirth: 'string',
      dateOfExpiry: 'string',
      docName: 'string',
      docNo: 'string',
      docPageConfigShrink: 'string',
      docScanMode: 'string',
      docType: 'string',
      docVideo: 'string',
      documentNumber: 'string',
      editOcrResult: 'string',
      email: 'string',
      experienceCode: 'string',
      faceAttributeCheck: 'string',
      faceGroupCodes: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      faceRegisterGroupCode: 'string',
      faceVerifyThreshold: 'string',
      idFaceQuality: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      isForceFaceCentered: 'string',
      languageConfig: 'string',
      MRTDInput: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      metaInfo: 'string',
      mobile: 'string',
      model: 'string',
      needMultiFaceCheck: 'string',
      ocr: 'string',
      ocrValueStandard: 'string',
      pages: 'string',
      procedurePriority: 'string',
      productCode: 'string',
      productFlow: 'string',
      returnFaces: 'string',
      returnUrl: 'string',
      saveFacePicture: 'string',
      sceneCode: 'string',
      securityLevel: 'string',
      showAlbumIcon: 'string',
      showGuidePage: 'string',
      showOcrResult: 'string',
      styleConfig: 'string',
      targetFacePicture: 'string',
      targetFacePictureUrl: 'string',
      templateConfig: 'string',
      templateRanCount: 'string',
      templateType: 'string',
      updateFaceIfUserExists: 'string',
      useNFC: 'string',
      verifyModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

