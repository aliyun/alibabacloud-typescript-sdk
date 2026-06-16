// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * <warning>This feature is **not supported by the Web SDK**. To use this feature, integrate the App SDK.</warning>
   * 
   * Specifies whether to enable strict face quality detection:
   * - Y: enabled (default)
   * - N: disabled.
   * 
   * @example
   * N
   */
  appQualityCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable authoritative identity verification. Currently, this applies only to second-generation ID cards in the Chinese mainland. This is an input parameter for the IDV product.
   * 
   * @example
   * Y
   */
  authorize?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-registration.
   * 
   * @example
   * 0
   */
  autoRegistration?: string;
  /**
   * @remarks
   * The security token used for anti-replay and anti-tampering verification. If this parameter is specified, the CallbackToken field is included in the callback URL.
   * 
   * @example
   * 7ca5c68d869344ea8eeb30cdfd544544-6358700
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for the authentication result. The callback request method is GET by default. The callback URL must start with https. After the authentication is complete, the platform calls back this URL and automatically appends the transactionId, passed, and subcode fields.
   * 
   * @example
   * https://www.aliyun.com?callbackToken=1000004826&transactionId=shaxxxx&passed=Y&subCode=200
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the adaptive color-changing window frame.
   * - **Y**: enabled
   * - **N**: disabled.
   * 
   * @example
   * N
   */
  chameleonFrameEnable?: string;
  /**
   * @remarks
   * Specifies whether to enable cropping. This is an input parameter for the IDV product.
   * 
   * @example
   * N
   */
  crop?: string;
  /**
   * @remarks
   * The date of birth on the document.
   * 
   * Required when **MRTDInput = 2**.
   * 
   * @example
   * -
   */
  dateOfBirth?: string;
  /**
   * @remarks
   * The expiration date on the document.
   * 
   * Required when **MRTDInput** = 2.
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
   * 张三
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
   * The custom configuration for whether to capture additional pages.
   */
  docPageConfigShrink?: string;
  /**
   * @remarks
   * The document capture photo mode.
   * 
   * - manual: manual photo capture.
   * - auto: automatic photo capture (default).
   * 
   * @example
   * manual
   */
  docScanMode?: string;
  /**
   * @remarks
   * The document type.
   * >For the eKYC_PRO and ID_OCR_MAX solutions, see the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/certificate-code-table?spm=a2c63.p38356.help-menu-445633.d_2_8_2_0.279147abwKAWbr
   * 
   * >For the ID_OCR, eKYC, and eKYC_MIN solutions, see the document type list in the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/gnhekqy05ni51m4c?spm=a2c63.p38356.help-menu-445633.d_2_3_1_0_0_0.6243244777KoZ7.
   * 
   * @example
   * 00000001
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to save an evidence video.
   * 
   * - N: not required (default).
   * 
   * - Y: a face verification video (1 to 2 seconds) is captured during the authentication process and returned through the query API.
   * 
   * > Because video files are large, the system discards the video file when the network is unstable to prioritize the transmission of images required for authentication.
   * 
   * @example
   * N
   */
  docVideo?: string;
  /**
   * @remarks
   * The document number.
   * 
   * Required when **MRTDInput = 2**.
   * 
   * @example
   * -
   */
  documentNumber?: string;
  /**
   * @remarks
   * Specifies whether the recognition result page is editable during the document OCR recognition step:
   * 
   * - **0**: not editable
   * 
   * - **1** (default): editable.
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
   * The face libraries for comparison.
   * 
   * @example
   * 0e0c34a77f
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * The Base64-encoded face photo. If you use FacePictureBase64 to pass in the face photo, check the photo size and do not pass in an excessively large photo.
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
   * The face registration library.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * The face verification threshold.
   * 
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * The face image quality. This is an input parameter for the IDV product.
   * 
   * @example
   * Y
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * Specifies whether to enable document anti-spoofing detection. This is an input parameter for the IDV product.
   * 
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @remarks
   * The custom OCR quality detection threshold mode:
   * - **0**: standard mode
   * - **1**: strict mode
   * - **2**: loose mode
   * - **3** (default): quality detection disabled.
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * The language configuration. This is an input parameter for the IDV product.
   * 
   * @example
   * en
   */
  languageConfig?: string;
  /**
   * @remarks
   * The input source for MRTD verification parameters. This parameter is required for decrypting information when reading document chip data via NFC.
   * 
   * - **0**: user input
   * 
   * - **1**: OCR reading
   * 
   * - **2**: API input.
   * 
   * @example
   * 0
   */
  MRTDInput?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID used for subsequent troubleshooting. The value can contain letters and digits with a maximum length of 32 characters. Make sure the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Your custom user ID or another identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize this field value in advance, such as by hashing the value.
   * 
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The MetaInfo environment parameter. Obtain this value by using the client SDK.
   * 
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0 (Macintosh
   */
  metaInfo?: string;
  /**
   * @remarks
   * The Indonesian phone number. The format must start with +62 followed by 9 to 11 digits. This field takes effect only when Authorize is set to T.
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
   * The type of liveness detection:
   * 
   * - **LIVENESS** (default): blink action liveness detection.
   * 
   * - **PHOTINUS_LIVENESS**: blink action liveness + colorful liveness dual detection.
   * 
   * > 
   * > - For supported SDK versions, see [SDK release notes](https://www.alibabacloud.com/help/zh/ekyc/latest/sdk-publishing-record?spm=a2c63.p38356.0.i99).
   * > - Colorful liveness dual detection is not supported on PC.
   * 
   * @example
   * PHOTINUS_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR. This is an input parameter for the IDV product.
   * 
   * @example
   * Y
   */
  ocr?: string;
  /**
   * @remarks
   * Specifies whether to return additional OCR recognition standardized format fields:
   * 
   * 0: no (default)
   * 
   * 1: yes.
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The capture page configuration. Use commas (,) to connect multiple pages. Valid values:
   * - **01**: portrait side of the document
   * 
   * - **01,02**: portrait side and back side of the document
   * 
   * > When this value is set to 01,02, only Chinese ID cards and Vietnamese ID cards are supported.
   * 
   * @example
   * 01
   */
  pages?: string;
  /**
   * @remarks
   * Specifies whether to allow a degraded processing method when compatibility issues occur during mobile H5 authentication.
   * 
   * - **url (default)**: degradation supported. The page displays the authentication URL, and the user can copy the URL or switch browsers to continue authentication.
   * 
   * - **keep**: degradation not supported. The error reason is returned directly and the authentication flow ends.
   * 
   * 
   * > 
   * > - This switch is not supported on PC.
   * > - If the business scenario involves completing authentication within an in-app embedded web page, set this parameter to keep to disallow URL degradation.
   * 
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @remarks
   * The product solution to use.
   * >For more information, see the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/product-introduction?spm=a2c63.p38356.0.i1.
   * 
   * @example
   * eKYC
   */
  productCode?: string;
  /**
   * @remarks
   * The order of document and face capture:
   * 
   * - DOC_FACE (default)
   * - FACE_DOC
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
   * Specifies whether to save the face picture.
   * 
   * @example
   * 0
   */
  saveFacePicture?: string;
  /**
   * @remarks
   * The scene code. This is an input parameter for the IDV product.
   * 
   * @example
   * 123****123
   */
  sceneCode?: string;
  /**
   * @remarks
   * The pattern that represents different security levels of the authentication flow. Valid values:
   * 
   * 01: normal pattern (default).
   * 02: safe mode, a relatively strict pattern that is active for high-risk scenarios. This is an input parameter for the IDV product.
   * 
   * @example
   * 01
   */
  securityLevel?: string;
  /**
   * @remarks
   * Specifies whether to display the album upload entry during the document OCR recognition step:
   * 
   * - **1**: display (default)
   * 
   * - **0**: do not display.
   * 
   * @example
   * 1
   */
  showAlbumIcon?: string;
  /**
   * @remarks
   * Specifies whether to display the guide page:
   * 
   * - **1**: display (default)
   * 
   * - **0**: do not display.
   * 
   * @example
   * 1
   */
  showGuidePage?: string;
  /**
   * @remarks
   * Specifies whether to display the recognition result page during the document OCR recognition step:
   * 
   * - **1**: display (default)
   * 
   * - **0**: do not display.
   * 
   * @example
   * 1
   */
  showOcrResult?: string;
  /**
   * @remarks
   * The custom UI configuration. Convert your custom UI configuration to a JSON string based on the configuration template and pass it in through this parameter. For more information, see [IDV UI style customization](https://www.alibabacloud.com/help/zh/ekyc/latest/idv-kyc-custom-skin?spm=a2c63.p38356.0.i60).
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
   * The Base64-encoded portrait photo.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * The URL of the portrait image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://www.xxxxx.com/1.jpg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * The custom action pool configuration for liveness detection.
   * This parameter is required when Model is set to TEMPLATE.
   * Configuration rule: separate multiple action codes with commas (,). Best practices: include at least one frontal face action (such as blink) and no more than 3 actions in total.
   * Action lookup table:
   * 
   * - Blink: 01
   * - Open Mouth: 02
   * - Shake Head Left: 03
   * - Shake Head Right: 04
   * - Move Farther: 05
   * - Move Closer: 06
   * - Photinus: 07.
   * 
   * @example
   * 01,02,07
   */
  templateConfig?: string;
  /**
   * @remarks
   * The number of actions randomly selected from TemplateConfig.
   * This parameter takes effect only when TemplateType is set to Ran.
   * 
   * - Validation rules:
   * - The value must be greater than 1. The value must be less than or equal to the total number of actions configured in TemplateConfig. If not specified, the default value equals the total number of actions in TemplateConfig.
   * 
   * @example
   * 2
   */
  templateRanCount?: string;
  /**
   * @remarks
   * The execution order of liveness detection actions in TemplateConfig.
   * This parameter is required when Model is set to TEMPLATE.
   * 
   * - Seq: actions are executed in the order configured in TemplateConfig from left to right.
   * - Ran: actions are executed in random order. When this option is selected, TemplateConfig must contain more than one action.
   * 
   * @example
   * Seq
   */
  templateType?: string;
  /**
   * @remarks
   * Specifies whether to enable NFC verification when **DocType** is set to 01000000 (global passport).
   * - **Y**: enabled
   * - **N**: disabled.
   * 
   * @example
   * N
   */
  useNFC?: string;
  /**
   * @remarks
   * The verification type.
   * 
   * @example
   * 0
   */
  verifyModel?: string;
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authorize: 'Authorize',
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
      faceGroupCodes: 'FaceGroupCodes',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
      faceRegisterGroupCode: 'FaceRegisterGroupCode',
      faceVerifyThreshold: 'FaceVerifyThreshold',
      idFaceQuality: 'IdFaceQuality',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      languageConfig: 'LanguageConfig',
      MRTDInput: 'MRTDInput',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      model: 'Model',
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
      useNFC: 'UseNFC',
      verifyModel: 'VerifyModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authorize: 'string',
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
      faceGroupCodes: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
      faceRegisterGroupCode: 'string',
      faceVerifyThreshold: 'string',
      idFaceQuality: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      languageConfig: 'string',
      MRTDInput: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      metaInfo: 'string',
      mobile: 'string',
      model: 'string',
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

