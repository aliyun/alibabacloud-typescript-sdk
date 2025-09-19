// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeRequest extends $dara.Model {
  appQualityCheck?: string;
  authorize?: string;
  /**
   * @example
   * 0
   */
  autoRegistration?: string;
  callbackToken?: string;
  callbackUrl?: string;
  chameleonFrameEnable?: string;
  /**
   * @example
   * *
   */
  crop?: string;
  dateOfBirth?: string;
  dateOfExpiry?: string;
  docName?: string;
  docNo?: string;
  docPageConfig?: string[];
  docScanMode?: string;
  /**
   * @example
   * 01000000
   */
  docType?: string;
  docVideo?: string;
  documentNumber?: string;
  editOcrResult?: string;
  experienceCode?: string;
  /**
   * @example
   * 0e0c34a77f
   */
  faceGroupCodes?: string;
  facePictureBase64?: string;
  /**
   * @example
   * ***
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
   * *
   */
  idFaceQuality?: string;
  /**
   * @example
   * Y
   */
  idSpoof?: string;
  idThreshold?: string;
  languageConfig?: string;
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
   * {\\"bioMetaInfo\\":\\"4.1.0:2916352,0\\",\\"deviceType\\":\\"web\\",\\"ua\\":\\"Mozilla/5.0 (Macintosh
   */
  metaInfo?: string;
  model?: string;
  /**
   * @remarks
   * OCR。
   * 
   * @example
   * *
   */
  ocr?: string;
  /**
   * @example
   * 1
   */
  pages?: string;
  procedurePriority?: string;
  /**
   * @example
   * eKYC
   */
  productCode?: string;
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
   * PAY**
   */
  sceneCode?: string;
  securityLevel?: string;
  showAlbumIcon?: string;
  showGuidePage?: string;
  showOcrResult?: string;
  styleConfig?: string;
  /**
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @example
   * https://www.xxxxx.com/1.jpg
   */
  targetFacePictureUrl?: string;
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
      docPageConfig: { 'type': 'array', 'itemType': 'string' },
      docScanMode: 'string',
      docType: 'string',
      docVideo: 'string',
      documentNumber: 'string',
      editOcrResult: 'string',
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
    if(Array.isArray(this.docPageConfig)) {
      $dara.Model.validateArray(this.docPageConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

