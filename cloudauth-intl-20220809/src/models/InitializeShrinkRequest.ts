// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * <warning>This feature is currently not supported by **Web SDK**. Please refer to the App SDK integration if needed.</warning>
   * 
   * Whether to enable strict face quality detection:
   * - Y: Enable (default)
   * - N: Disable
   * 
   * @example
   * N
   */
  appQualityCheck?: string;
  /**
   * @remarks
   * Whether to enable authoritative identity verification, currently applicable only to the second-generation ID card in mainland China. (IDV product input parameter)
   * 
   * @example
   * Y
   */
  authorize?: string;
  /**
   * @remarks
   * Whether to enable automatic registration
   * 
   * @example
   * 0
   */
  autoRegistration?: string;
  /**
   * @remarks
   * Security Token, used for preventing duplication and tampering. If this parameter is passed, the CallbackToken field will be displayed in the callback address.
   * 
   * @example
   * 7ca5c68d869344ea8eeb30cdfd544544-6358700
   */
  callbackToken?: string;
  /**
   * @remarks
   * Callback notification address for authentication results. The default callback request method is GET, and the callback address must start with https. After completing the authentication, the platform will call back this address and automatically add the transactionId, passed, and subcode fields.
   * 
   * @example
   * https://www.aliyun.com?callbackToken=1000004826&transactionId=shaxxxx&passed=Y&subCode=200
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Whether to enable adaptive color-changing window border
   * - **Y**: Enable
   * - **N**: Disable
   * 
   * @example
   * N
   */
  chameleonFrameEnable?: string;
  /**
   * @remarks
   * Whether to crop. (IDV product input parameter)
   * 
   * @example
   * N
   */
  crop?: string;
  /**
   * @remarks
   * Date of birth on the document
   * 
   * **MRTDInput = 2** is required.
   * 
   * @example
   * -
   */
  dateOfBirth?: string;
  /**
   * @remarks
   * Expiration date on the document
   * 
   * **MRTDInput = 2** is required.
   * 
   * @example
   * -
   */
  dateOfExpiry?: string;
  /**
   * @remarks
   * User\\"s real name.
   * 
   * @example
   * 张三
   */
  docName?: string;
  /**
   * @remarks
   * User\\"s document number.
   * 
   * @example
   * 411xxxxxxxxxxx0001
   */
  docNo?: string;
  /**
   * @remarks
   * Customer-defined input to specify whether to collect more pages
   */
  docPageConfigShrink?: string;
  /**
   * @remarks
   * Document capture mode.
   * 
   * - manual: Manual capture.
   * - auto: Automatic capture (default)
   * 
   * @example
   * manual
   */
  docScanMode?: string;
  /**
   * @remarks
   * Document type, uniquely identified by an 8-digit combination.
   * Note: This parameter is required only when ProductCode is KYC_GLOBAL, OCR_GLOBAL, or IDR_GLOBAL.
   * 
   * @example
   * ​01560000
   */
  docType?: string;
  /**
   * @remarks
   * Whether to require a video for evidence.
   * 
   * - N: Not required (default).
   * 
   * - Y: During the authentication process, a 1~2 second video of the user\\"s face will be captured and returned via the query interface.
   * 
   * > Due to the large size of the video file, the system may discard it when the network is unstable, prioritizing the transmission of necessary images for authentication.
   * 
   * @example
   * N
   */
  docVideo?: string;
  /**
   * @remarks
   * Document number
   * 
   * **MRTDInput = 2** is required.
   * 
   * @example
   * -
   */
  documentNumber?: string;
  /**
   * @remarks
   * In the document OCR recognition step, whether the recognition result page is editable:
   * 
   * - **0**: Not editable
   * 
   * - **1** (default): Editable
   * 
   * @example
   * 0
   */
  editOcrResult?: string;
  email?: string;
  /**
   * @remarks
   * Experience code
   * 
   * @example
   * 9be7b7d0180041219e5ab03ac6dab5fb
   */
  experienceCode?: string;
  /**
   * @remarks
   * Face library to be compared
   * 
   * @example
   * 0e0c34a77f
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * Base64 encoded face image. If you choose to pass the face image via FacePictureBase64, please check the image size and do not upload images larger than 1 MB.
   * When productCode is FV_GLOBAL, choose one of the parameters between FacePictureBase64 and FacePictureUrl to pass in.
   * 
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @remarks
   * Face image URL. A publicly accessible HTTP or HTTPS link. When productCode is FV_GLOBAL, choose one of the parameters between FacePictureUrl and FacePictureBase to pass in.
   * 
   * @example
   * ***
   */
  facePictureUrl?: string;
  /**
   * @remarks
   * Face library for registration.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * Face verification threshold
   * 
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @remarks
   * Face image quality. (IDV product input parameter)
   * 
   * @example
   * Y
   */
  idFaceQuality?: string;
  /**
   * @remarks
   * Whether to enable certificate anti-counterfeiting detection. (IDV product input parameter)
   * 
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @remarks
   * Custom OCR quality detection threshold mode:
   * - **0**: Standard mode
   * - **1**: Strict mode
   * - **2**: Lenient mode
   * - **3** (default): Disable quality detection
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * Language configuration. (IDV product input parameter)
   * 
   * @example
   * en
   */
  languageConfig?: string;
  /**
   * @remarks
   * Source of MRTD verification parameters. This parameter is required to decrypt information when reading the document chip via NFC.
   * 
   * - **0**: User input
   * 
   * - **1**: OCR read
   * 
   * - **2**: Passed through the API
   * 
   * @example
   * 0
   */
  MRTDInput?: string;
  /**
   * @remarks
   * A unique business identifier defined by the merchant, used for subsequent troubleshooting. It supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure its uniqueness.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Your custom user ID or other identifiers that can recognize specific users, such as phone numbers or email addresses. It is strongly recommended to pre-desensitize the value of this field, for example, by hashing it.
   * 
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Metainfo environment parameter, which needs to be obtained through the client SDK.
   * 
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0 (Macintosh
   */
  metaInfo?: string;
  mobile?: string;
  /**
   * @remarks
   * The type of liveness detection to be performed:
   * 
   * - **LIVENESS** (default): Blinking action liveness detection.
   * 
   * - **PHOTINUS_LIVENESS**: Blinking action liveness + photinus liveness dual detection.
   * 
   * > 
   * > - For supported SDK versions, see [SDK Publishing Record](https://www.alibabacloud.com/help/zh/ekyc/latest/sdk-publishing-record?spm=a2c63.p38356.0.i99).
   * > - PC does not support photinus liveness dual detection.
   * 
   * @example
   * PHOTINUS_LIVENESS
   */
  model?: string;
  /**
   * @remarks
   * Whether to enable OCR. (IDV product input parameter)
   * 
   * @example
   * Y
   */
  ocr?: string;
  /**
   * @remarks
   * Page configuration for collection, multiple pages are connected using commas. The value range is as follows:
   * - **01**: Front side of the document
   * 
   * - **01,02**: Front and back sides of the document
   * 
   * > When this value is 01,02, currently only Chinese and Vietnamese IDs are supported.
   * 
   * @example
   * 01
   */
  pages?: string;
  /**
   * @remarks
   * When compatibility issues occur with H5-based mobile authentication, whether to allow a fallback handling method.
   * 
   * - **url** (default): Support fallback. The page displays the authentication URL, which users can copy and open in another browser to continue the authentication process.
   * 
   * - **keep**: Do not support fallback. Directly return the error reason and end the authentication process.
   * 
   * 
   * > 
   * > - This switch is not supported on PC.
   * > - If the business scenario involves completing authentication through an embedded web page in an app, it is recommended to set this parameter to `keep` to disallow URL fallback.
   * 
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @remarks
   * The product solution to be integrated. The values are as follows:
   * 
   * - KYC_GLOBAL (eKYC product solution)
   * - FV_GLOBAL (Live Face Verification)
   * - FL_GLOBAL (Liveness Detection)
   * - IDR_GLOBAL (Single Document Verification)
   * - OCR_GLOBAL (Single Document OCR)
   * 
   * @example
   * KYC_GLOBAL
   */
  productCode?: string;
  /**
   * @remarks
   * Supports card and face sequential arrangement:
   * 
   * - DOC_FACE (default)
   * - FACE_DOC
   * 
   * Note: This parameter is required only when ProductCode is KYC_GLOBAL.
   * 
   * @example
   * DOC_FACE
   */
  productFlow?: string;
  /**
   * @remarks
   * Number of duplicate faces returned
   * 
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @remarks
   * Client-side callback address.
   * 
   * @example
   * http*****
   */
  returnUrl?: string;
  /**
   * @remarks
   * Whether to save the face image
   * 
   * @example
   * 0
   */
  saveFacePicture?: string;
  /**
   * @remarks
   * Scene code. (IDV product input parameter)
   * 
   * @example
   * 123****123
   */
  sceneCode?: string;
  /**
   * @remarks
   * Represents different security levels in the authentication process. The available values are as follows:
   * 
   * 01: Normal mode (default).
   * 02: Secure mode, a relatively strict mode, suitable for high-risk scenarios. (IDV product input parameter)
   * 
   * @example
   * 01
   */
  securityLevel?: string;
  /**
   * @remarks
   * In the document OCR recognition step, whether to display the album upload entry:
   * 
   * - **1**: Display (default)
   * 
   * - **0**: Do not display
   * 
   * @example
   * 1
   */
  showAlbumIcon?: string;
  /**
   * @remarks
   * Switch to control whether to display the guide page:
   * 
   * - **1**: Display (default)
   * 
   * - **0**: Do not display
   * 
   * @example
   * 1
   */
  showGuidePage?: string;
  /**
   * @remarks
   * In the document OCR recognition step, whether to display the recognition result page:
   * 
   * - **1**: Display (default)
   * 
   * - **0**: Do not display
   * 
   * @example
   * 1
   */
  showOcrResult?: string;
  /**
   * @remarks
   * Custom UI configuration. Based on the configuration template, convert your custom UI configuration into a JSON string and pass it through this interface. For more information, see [IDV UI Customization](https://www.alibabacloud.com/help/zh/ekyc/latest/idv-kyc-custom-skin?spm=a2c63.p38356.0.i60).
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
   * Base64 encoding of the portrait photo.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * Portrait image URL, accessible via public HTTP or HTTPS link.
   * 
   * @example
   * https://www.xxxxx.com/1.jpg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * When **DocType**=01000000 (global passport), you can choose whether to enable NFC verification.
   * - **Y** (enable)
   * - **N** (disable)
   * 
   * @example
   * N
   */
  useNFC?: string;
  /**
   * @remarks
   * Type of verification
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

