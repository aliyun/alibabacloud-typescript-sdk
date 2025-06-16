// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeRequest extends $dara.Model {
  appQualityCheck?: string;
  authorize?: string;
  callbackToken?: string;
  callbackUrl?: string;
  /**
   * @example
   * *
   */
  crop?: string;
  dateOfBirth?: string;
  dateOfExpiry?: string;
  docPageConfig?: string[];
  docScanMode?: string;
  /**
   * @example
   * 01000000
   */
  docType?: string;
  docVideo?: string;
  documentNumber?: string;
  experienceCode?: string;
  facePictureBase64?: string;
  /**
   * @example
   * ***
   */
  facePictureUrl?: string;
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
   * http*****
   */
  returnUrl?: string;
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
  useNFC?: string;
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authorize: 'Authorize',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      crop: 'Crop',
      dateOfBirth: 'DateOfBirth',
      dateOfExpiry: 'DateOfExpiry',
      docPageConfig: 'DocPageConfig',
      docScanMode: 'DocScanMode',
      docType: 'DocType',
      docVideo: 'DocVideo',
      documentNumber: 'DocumentNumber',
      experienceCode: 'ExperienceCode',
      facePictureBase64: 'FacePictureBase64',
      facePictureUrl: 'FacePictureUrl',
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
      returnUrl: 'ReturnUrl',
      sceneCode: 'SceneCode',
      securityLevel: 'SecurityLevel',
      showAlbumIcon: 'ShowAlbumIcon',
      showGuidePage: 'ShowGuidePage',
      showOcrResult: 'ShowOcrResult',
      styleConfig: 'StyleConfig',
      useNFC: 'UseNFC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authorize: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      crop: 'string',
      dateOfBirth: 'string',
      dateOfExpiry: 'string',
      docPageConfig: { 'type': 'array', 'itemType': 'string' },
      docScanMode: 'string',
      docType: 'string',
      docVideo: 'string',
      documentNumber: 'string',
      experienceCode: 'string',
      facePictureBase64: 'string',
      facePictureUrl: 'string',
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
      returnUrl: 'string',
      sceneCode: 'string',
      securityLevel: 'string',
      showAlbumIcon: 'string',
      showGuidePage: 'string',
      showOcrResult: 'string',
      styleConfig: 'string',
      useNFC: 'string',
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

