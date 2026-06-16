// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class InitializeV2AdvanceRequest extends $dara.Model {
  /**
   * @example
   * N
   */
  appQualityCheck?: string;
  /**
   * @example
   * T
   */
  authorize?: string;
  /**
   * @example
   * 0
   */
  autoRegistration?: string;
  /**
   * @example
   * 7ca5c68d869344ea8eeb30cdfd544544-6358700
   */
  callbackToken?: string;
  /**
   * @example
   * https://www.aliyun.com?callbackToken=1000004826&transactionId=shaxxxx&passed=Y&subCode=200
   */
  callbackUrl?: string;
  /**
   * @example
   * N
   */
  chameleonFrameEnable?: string;
  /**
   * @example
   * N
   */
  crop?: string;
  /**
   * @example
   * -
   */
  dateOfBirth?: string;
  /**
   * @example
   * -
   */
  dateOfExpiry?: string;
  /**
   * @example
   * 张**
   */
  docName?: string;
  /**
   * @example
   * 410***************
   */
  docNo?: string;
  /**
   * @example
   * OCR_ID_BACK
   */
  docPageConfig?: string[];
  /**
   * @example
   * manual
   */
  docScanMode?: string;
  /**
   * @example
   * 00000001
   */
  docType?: string;
  /**
   * @example
   * N
   */
  docVideo?: string;
  /**
   * @example
   * -
   */
  documentNumber?: string;
  /**
   * @example
   * 0
   */
  editOcrResult?: string;
  /**
   * @example
   * evxxx@imigxxxxx.go.id
   */
  email?: string;
  /**
   * @example
   * 9be7b7d0180041219e5ab03ac6dab5fb
   */
  experienceCode?: string;
  /**
   * @example
   * 0e0c34a77f
   */
  faceGroupCodes?: string;
  /**
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @example
   * InputStream
   */
  facePictureFileObject?: Readable;
  /**
   * @example
   * https://digital-face-prod8.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  facePictureUrl?: string;
  /**
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @example
   * 0.5
   */
  faceVerifyThreshold?: string;
  /**
   * @example
   * Y
   */
  idFaceQuality?: string;
  /**
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @example
   * en
   */
  languageConfig?: string;
  /**
   * @example
   * 0
   */
  MRTDInput?: string;
  /**
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 1221****6543
   */
  merchantUserId?: string;
  /**
   * @example
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0\\"}
   */
  metaInfo?: string;
  /**
   * @example
   * +6281293671234
   */
  mobile?: string;
  /**
   * @example
   * PHOTINUS_LIVENESS
   */
  model?: string;
  /**
   * @example
   * Y
   */
  ocr?: string;
  /**
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @example
   * 01
   */
  pages?: string;
  /**
   * @example
   * url
   */
  procedurePriority?: string;
  /**
   * @example
   * eKYC
   */
  productCode?: string;
  /**
   * @example
   * DOC_FACE
   */
  productFlow?: string;
  /**
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @example
   * http*****
   */
  returnUrl?: string;
  /**
   * @example
   * 0
   */
  saveFacePicture?: string;
  /**
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @example
   * 01
   */
  securityLevel?: string;
  /**
   * @example
   * 1
   */
  showAlbumIcon?: string;
  /**
   * @example
   * 1
   */
  showGuidePage?: string;
  /**
   * @example
   * 1
   */
  showOcrResult?: string;
  /**
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
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @example
   * InputStream
   */
  targetFacePictureFileObject?: Readable;
  /**
   * @example
   * https://www.xxxxx.com/1.jpg
   */
  targetFacePictureUrl?: string;
  /**
   * @example
   * 01,02,07
   */
  templateConfig?: string;
  /**
   * @example
   * 2
   */
  templateRanCount?: string;
  /**
   * @example
   * Seq
   */
  templateType?: string;
  /**
   * @example
   * N
   */
  useNFC?: string;
  /**
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
      docPageConfig: 'DocPageConfig',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      docVideo: 'DocVideo',
      documentNumber: 'DocumentNumber',
      editOcrResult: 'EditOcrResult',
      email: 'Email',
      experienceCode: 'ExperienceCode',
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
      docPageConfig: { 'type': 'array', 'itemType': 'string' },
      docScanMode: 'string',
      docType: 'string',
      docVideo: 'string',
      documentNumber: 'string',
      editOcrResult: 'string',
      email: 'string',
      experienceCode: 'string',
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

