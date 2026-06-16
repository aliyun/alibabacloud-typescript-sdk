// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxV2AdvanceRequest extends $dara.Model {
  /**
   * @example
   * T
   */
  authorize?: string;
  /**
   * @example
   * 01
   */
  docPage?: string;
  /**
   * @example
   * CHN01001
   */
  docType?: string;
  /**
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @example
   * InputStream
   */
  idOcrPictureFileObject?: Readable;
  /**
   * @example
   * https://***********.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @example
   * F
   */
  idSpoof?: string;
  /**
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @example
   * 0
   */
  ocrModel?: string;
  /**
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @example
   * ID_OCR_MAX
   */
  productCode?: string;
  /**
   * @example
   * 1234567890
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      docPage: 'DocPage',
      docType: 'DocType',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureFileObject: 'IdOcrPictureFile',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocrModel: 'OcrModel',
      ocrValueStandard: 'OcrValueStandard',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      docPage: 'string',
      docType: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureFileObject: 'Readable',
      idOcrPictureUrl: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      ocrModel: 'string',
      ocrValueStandard: 'string',
      productCode: 'string',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

