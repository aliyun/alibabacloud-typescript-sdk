// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeV2Request extends $dara.Model {
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
   * Specifies whether to enable authoritative identity verification. This feature currently applies only to second-generation ID cards in the Chinese mainland. This parameter is applicable to IDV products.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * The automatic document page classification configuration. This parameter takes effect only when DocType is set to a country or region code. You can specify the pages to collect based on the specific document type code. For documents that are not configured, only the front side is collected.
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
   * The security token used for anti-replay and anti-tampering verification. If you specify this parameter, the CallbackToken field is displayed in the callback URL.
   * 
   * @example
   * 7ca5c68d869344ea8eeb30cdfd544544-6358700
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for authentication result notifications. The default callback request method is GET, and the callback URL must start with https. After the authentication is completed, the platform calls this URL and automatically appends the transactionId, passed, and subcode fields.
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
   * The date of birth on the document, in the YYMMDD format (6 digits). This parameter is required when **MRTDInput** is set to **2**.
   * 
   * @example
   * 900101
   */
  dateOfBirth?: string;
  /**
   * @remarks
   * The expiration date on the document, in the YYMMDD format (6 digits). This parameter is required when **MRTDInput** is set to **2**.
   * 
   * @example
   * 301231
   */
  dateOfExpiry?: string;
  /**
   * @remarks
   * The real name of the user.
   * 
   * @example
   * Zhang**
   */
  docName?: string;
  /**
   * @remarks
   * The document number of the user.
   * 
   * @example
   * 410***************
   */
  docNo?: string;
  /**
   * @remarks
   * The custom configuration passed by the customer to specify whether to collect more pages.
   */
  docPageConfig?: string[];
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
   * The document type. 
   * > For the eKYC_PRO and ID_OCR_MAX editions, see the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/certificate-code-table?spm=a2c63.p38356.help-menu-445633.d_2_8_2_0.279147abwKAWbr
   * 
   * > For the ID_OCR, eKYC, and eYKC_MIN editions, see the document type list in the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/gnhekqy05ni51m4c?spm=a2c63.p38356.help-menu-445633.d_2_3_1_0_0_0.6243244777KoZ7
   * 
   * @example
   * 00000001
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to store a video as evidence. Valid values:
   * 
   * - N: No. This is the default value.
   * 
   * - Y: Yes. During the authentication process, a video of the user\\"s face scanning process (a 1- to 2-second video file) is collected and returned through the query operation.
   * 
   * > Because video files are large, the system discards the video file when the network is unstable to prioritize the transmission of images required for authentication.
   * 
   * @example
   * N
   */
  docVideo?: string;
  /**
   * @remarks
   * The document number. This parameter is required when **MRTDInput** is set to **2**.
   * 
   * @example
   * -
   */
  documentNumber?: string;
  /**
   * @remarks
   * Specifies whether the recognition result page is editable during the document OCR stage. Valid values:
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
   * > Note
   * > This field is required only when the Indonesian data source is enabled.
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
   * Specifies whether to return additional face attribute information. Valid values: N: Do not return. This is the default value. Y: Return. The result is located in Result.ExtFaceInfo.FaceAttributeInfo.
   * 
   * @example
   * N
   */
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The face databases for comparison.
   * 
   * @example
   * 0e0c34a77f
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * The Base64-encoded string of the photo. If you choose to pass the face photo by using FacePictureBase64, check the photo size and do not pass an excessively large photo.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * The file stream of the face photo.
   * 
   * @example
   * InputStream
   */
  facePictureFile?: string;
  /**
   * @remarks
   * The URL of the face photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
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
   * 
   * - 0: System default.
   * - 1: Strict mode.
   * - 2: Loose mode.
   * - 3: Disable quality detection. This is the default value.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The forced centering configuration. Specifies whether to intercept the request when an off-center face is detected on the terminal. Valid values:
   * 
   * - Y: Intercept. The client prompts the user to scan their face again.
   * - N: Do not intercept. This is the default value. The system extracts the largest face from the face scanning screen and sends it to the server for security detection.
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
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. It supports a combination of letters and digits, with a maximum length of 32 characters. Make sure that the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Your custom user ID or another identifier that can identify a specific user, such as a mobile phone number or an email address. We strongly recommend that you desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The Metainfo environment parameter, which must be obtained by using the client SDK.
   * 
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0\\"}
   */
  metaInfo?: string;
  /**
   * @remarks
   * The Indonesian phone number. The format must be verified. It must start with +62 followed by 9 to 11 digits. This field takes effect only when Authorize is set to T.
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
   * The type of liveness detection to perform. Valid values:
   * 
   * - **LIVENESS**: Liveness detection based on blinking. This is the default value.
   * 
   * - **PHOTINUS_LIVENESS**: Dual liveness detection based on blinking and photinus.
   * 
   * > 
   * > - For supported SDK versions, see [SDK release notes](https://www.alibabacloud.com/help/zh/ekyc/latest/sdk-publishing-record?spm=a2c63.p38356.0.i99).
   * > - Dual liveness detection based on photinus is not supported on PCs.
   * 
   * @example
   * PHOTINUS_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to intercept the request when multiple faces are detected on the terminal. Valid values:
   * 
   * - Y: Intercept. The client prompts the user to scan their face again.
   * - N: Do not intercept. This is the default value. The system extracts the largest face from the face scanning screen and sends it to the server for security detection.
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
   * Specifies whether to return additional standardized OCR recognition fields. Valid values:
   * 
   * - 0: No. This is the default value.
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The configuration of the pages to collect. Separate multiple pages with commas (,). Valid values:
   * - **01**: The portrait side of the document.
   * 
   * - **01,02**: The portrait and back sides of the document.
   * 
   * > If you set this parameter to 01,02, only Chinese ID cards and Vietnamese ID cards are supported.
   * 
   * @example
   * 01
   */
  pages?: string;
  /**
   * @remarks
   * Specifies whether to allow degraded processing when compatibility issues occur during mobile H5 authentication. Valid values:
   * 
   * - **url**: Allow degradation. This is the default value. The page displays the authentication URL, and the user can copy the URL to open it or switch browsers to continue the authentication.
   * 
   * - **keep**: Do not allow degradation. The system directly returns the error cause and ends the authentication process.
   * 
   * 
   * > 
   * > - This switch is not supported on PCs.
   * > - If the business scenario involves completing authentication in an embedded web page within an app, we recommend that you set this parameter to keep to disable URL degradation.
   * 
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @remarks
   * The product edition to integrate. 
   * 
   * > Note: For more information, see the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/product-introduction?spm=a2c63.p38356.0.i1
   * 
   * @example
   * eKYC
   */
  productCode?: string;
  /**
   * @remarks
   * The sequence of document and face verification. Valid values:
   * 
   * - DOC_FACE: Document verification followed by face verification. This is the default value.
   * - FACE_DOC: Face verification followed by document verification.
   * 
   * > Note: This parameter is required only when ProductCode is set to KYC_GLOBAL.
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
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The pattern that represents different security levels of the authentication flow. Valid values:
   * 
   * - 01: Normal pattern. This is the default value.
   * - 02: safe mode. This is a relatively strict pattern that is active in high-risk scenarios. This parameter is applicable to IDV products.
   * 
   * @example
   * 01
   */
  securityLevel?: string;
  /**
   * @remarks
   * Specifies whether to display the album upload entry during the document OCR stage. Valid values:
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
   * Specifies whether to display the recognition result page during the document OCR stage. Valid values:
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
   * The custom UI configuration. Convert your custom UI configuration into a JSON string based on the configuration template, and pass it through this operation. For more information, see [Customize IDV UI styles](https://www.alibabacloud.com/help/zh/ekyc/latest/idv-kyc-custom-skin?spm=a2c63.p38356.0.i60).
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
   * The file stream of the base face image.
   * 
   * @example
   * InputStream
   */
  targetFacePictureFile?: string;
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
   * The custom action pool configuration for liveness detection. This parameter is required when Model is set to TEMPLATE.
   * Configuration rules: Separate multiple action codes with commas (,). Best Practices: We recommend that you include at least one frontal face action (such as blinking) and keep the total number of actions to a maximum of 3.
   * Action code lookup table:
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
   * **[Deprecated]** The random mode is no longer recommended. This field is deprecated.
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
   * Specifies whether to overwrite the existing face with the current face if MerchantUserId already exists during automatic registration. Valid values: Y: Overwrite. N: Do not overwrite and return a message indicating that the UserId already exists.
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
      docPageConfig: 'DocPageConfig',
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
      facePictureFile: 'FacePictureFile',
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
      targetFacePictureFile: 'TargetFacePictureFile',
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
      docPageConfig: { 'type': 'array', 'itemType': 'string' },
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
      facePictureFile: 'string',
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
      targetFacePictureFile: 'string',
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
    if(Array.isArray(this.docPageConfig)) {
      $dara.Model.validateArray(this.docPageConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

