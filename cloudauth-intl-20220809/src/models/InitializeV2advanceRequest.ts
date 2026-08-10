// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class InitializeV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * <warning>This feature is not supported by the **Web SDK**. To use this feature, refer to the App SDK integration.</warning>
   * 
   * Specifies whether to enable strict face quality detection. Valid values:
   * - Y: Enabled. This is the default value.
   * - N: Not enabled.
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
   * T
   */
  authorize?: string;
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
   * The security token used for anti-replay and anti-tampering verification. If this parameter is passed in, the CallbackToken field is displayed in the callback URL.
   * 
   * @example
   * 7ca5c68d869344ea8eeb30cdfd544544-6358700
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for the authentication result notification. The callback request method is GET by default, and the callback URL must start with https. After the authentication is complete, the platform calls back this URL and automatically appends the transactionId, passed, and subcode fields.
   * 
   * @example
   * https://www.aliyun.com?callbackToken=1000004826&transactionId=shaxxxx&passed=Y&subCode=200
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable the adaptive color-changing window frame.
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
   * @example
   * -
   */
  dateOfBirth?: string;
  /**
   * @remarks
   * The expiration date on the document.
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
   * The custom configuration for whether to collect additional pages.
   * 
   * @example
   * OCR_ID_BACK
   */
  docPageConfig?: string[];
  /**
   * @remarks
   * The document capture photo mode.
   * 
   * @example
   * manual
   */
  docScanMode?: string;
  /**
   * @remarks
   * The document type.
   * >For the eKYC_PRO and ID_OCR_MAX solutions, see the official documentation at https://www.alibabacloud.com/help/zh/ekyc/latest/certificate-code-table?spm=a2c63.p38356.help-menu-445633.d_2_8_2_0.279147abwKAWbr
   * 
   * >For the ID_OCR, eKYC, and eKYC_MIN solutions, see the document type list in the official documentation at https://www.alibabacloud.com/help/zh/ekyc/latest/gnhekqy05ni51m4c?spm=a2c63.p38356.help-menu-445633.d_2_3_1_0_0_0.6243244777KoZ7
   * 
   * @example
   * 00000001
   */
  docType?: string;
  /**
   * @remarks
   * Specifies whether to collect a verification video.
   * 
   * - N: No verification video is collected. This is the default value.
   * 
   * - Y: A short video (1 to 2 seconds) of the user\\"s face verification process is collected during authentication and returned through the query operation.
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
   * @example
   * -
   */
  documentNumber?: string;
  /**
   * @remarks
   * Specifies whether the recognition result page is editable during the document OCR recognition step:
   * 
   * @example
   * 0
   */
  editOcrResult?: string;
  /**
   * @remarks
   * The Indonesian email address. This field takes effect only when Authorize is set to T.
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
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The face libraries to compare against.
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
   * The file stream of the face photo.
   * 
   * @example
   * InputStream
   */
  facePictureFileObject?: Readable;
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
   * The source of the MRTD verification parameter input. This parameter is required to decrypt information when reading document chip data via NFC.
   * 
   * - **0**: user input
   * 
   * - **1**: OCR reading
   * 
   * - **2**: API input
   * 
   * @example
   * 0
   */
  MRTDInput?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID used for subsequent troubleshooting. The value supports a combination of letters and numbers with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID, or another identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you hash or otherwise de-identify this value before passing it in.
   * 
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The Metainfo environment parameter, which must be obtained through the client SDK.
   * 
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0\\"}
   */
  metaInfo?: string;
  /**
   * @remarks
   * The Indonesian phone number. The format must start with +62 followed by 9 to 11 digits. This field takes effect only when Authorize is set to T.
   * 
   * @example
   * +6281293671234
   */
  mobile?: string;
  /**
   * @remarks
   * The type of liveness detection to perform.
   * 
   * - **LIVENESS** (default): Blink-based liveness detection.
   * 
   * - **PHOTINUS_LIVENESS**: Dual detection that combines blink-based liveness detection and colorful light liveness detection.
   * 
   * > 
   * > - For supported SDK versions, see [SDK release notes](https://www.alibabacloud.com/help/zh/ekyc/latest/sdk-publishing-record?spm=a2c63.p38356.0.i99).
   * > - Colorful light dual detection is not supported on PCs.
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
   * Specifies whether to additionally return OCR recognition results in a standardized format:
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The configuration for capture pages. Separate multiple pages with commas (,). Valid values:
   * 
   * - **01**: the portrait side of the identity document.
   * 
   * - **01,02**: the portrait side and back side of the identity document.
   * 
   * > When this parameter is set to 01,02, only China identity cards and Vietnam identity cards are supported.
   * 
   * @example
   * 01
   */
  pages?: string;
  /**
   * @remarks
   * Specifies whether to allow a degraded processing method when compatibility issues occur during mobile H5 authentication.
   * 
   * - **url (default)**: Degradation is supported. The page displays the authentication URL, and the user can copy the URL to open it or switch browsers to continue authentication.
   * 
   * - **keep**: Degradation is not supported. The error reason is directly returned, and the authentication process ends.
   * 
   * 
   * > 
   * > - This parameter is not supported on PC.
   * > - If the business scenario involves completing authentication within a webpage embedded in an app, set this parameter to keep to disallow URL degradation.
   * 
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @remarks
   * The product plan to use.
   * 
   * >**Note** For more information, see the official documentation: https://www.alibabacloud.com/help/zh/ekyc/latest/product-introduction?spm=a2c63.p38356.0.i1
   * 
   * @example
   * eKYC
   */
  productCode?: string;
  /**
   * @remarks
   * Specifies the order of document and face verification steps. Valid values:
   * 
   * - DOC_FACE: Document first, then face. This is the default value.
   * - FACE_DOC: Face first, then document.
   * 
   * >**Note**: This parameter is required only when ProductCode is set to KYC_GLOBAL.
   * 
   * @example
   * DOC_FACE
   */
  productFlow?: string;
  /**
   * @remarks
   * The number of duplicate faces to return.
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
   * The scene code. This is an input parameter for the IDV product.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The mode that represents different security levels of the authentication process. Valid values:
   * 
   * - 01: Normal mode (default).
   * - 02: Safe mode. A relatively strict mode that can be used for high-risk scenarios (input parameter for IDV products).
   * 
   * @example
   * 01
   */
  securityLevel?: string;
  /**
   * @remarks
   * Specifies whether to display the album upload entry during the document OCR recognition step:
   * 
   * @example
   * 1
   */
  showAlbumIcon?: string;
  /**
   * @remarks
   * Specifies whether to display the guide page:
   * 
   * @example
   * 1
   */
  showGuidePage?: string;
  /**
   * @remarks
   * Specifies whether to display the recognition result page during the document OCR recognition step:
   * 
   * @example
   * 1
   */
  showOcrResult?: string;
  /**
   * @remarks
   * The custom UI configuration. Convert your custom UI configuration to a JSON string based on the configuration template, and pass it in through this parameter. For more information, see [IDV UI style customization](https://www.alibabacloud.com/help/zh/ekyc/latest/idv-kyc-custom-skin?spm=a2c63.p38356.0.i60).
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
   * The Base64-encoded face photo.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * The file stream of the reference face photo.
   * 
   * @example
   * InputStream
   */
  targetFacePictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the face photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://www.xxxxx.com/1.jpg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * The custom action pool configuration for liveness detection.
   * 
   * @example
   * 01,02,07
   */
  templateConfig?: string;
  /**
   * @remarks
   * The number of actions to randomly select from TemplateConfig.
   * 
   * @example
   * 2
   */
  templateRanCount?: string;
  /**
   * @remarks
   * The execution order of liveness detection actions in TemplateConfig.
   * 
   * @example
   * Seq
   */
  templateType?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the existing face with the current face when the MerchantUserId already exists during automatic registration. Valid values: Y (overwrite) and N (do not overwrite and return a message indicating that the UserId already exists).
   */
  updateFaceIfUserExists?: string;
  /**
   * @remarks
   * When **DocType** is set to 01000000 (global passport), specifies whether to enable NFC verification.
   * - **Y**: Enable NFC verification.
   * - **N**: Disable NFC verification.
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
      facePictureFileObject: 'FacePictureFile',
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
      targetFacePictureFileObject: 'TargetFacePictureFile',
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
      facePictureFileObject: 'Readable',
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
      targetFacePictureFileObject: 'Readable',
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

