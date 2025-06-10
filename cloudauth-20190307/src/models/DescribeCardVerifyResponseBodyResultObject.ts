// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  cardInfo?: string;
  faceDetail?: string;
  ocrCardInfo?: string;
  /**
   * @example
   * {
   *     "certUrl": "https://cn-shanghai-aliyun-nmeta.cn-shanghai.oss.aliyuncs.com/verify/xxxxxxx/xxxxxxxxxx_ocridface_dbf2_normal.jpeg",
   *     "certNationalUrl": "https://cn-shanghai-aliyun-nmeta.cn-shanghai.oss.aliyuncs.com/verify/xxxxxxxxxx/xxxxxxxxxxx_ocridback_e8a3_normal.jpeg"
   * }
   */
  pictureInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      cardInfo: 'CardInfo',
      faceDetail: 'FaceDetail',
      ocrCardInfo: 'OcrCardInfo',
      pictureInfo: 'PictureInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      cardInfo: 'string',
      faceDetail: 'string',
      ocrCardInfo: 'string',
      pictureInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

