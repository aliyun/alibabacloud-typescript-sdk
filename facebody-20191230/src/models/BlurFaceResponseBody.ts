// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlurFaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_FaceBlur/2020-8-5/invi_FaceBlur_015966077063461060948_IBdDsq.jpg?Expires=1596609506&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=x8n3jq1X91Sq7BKWE4vRHSu6g9****
   */
  imageURL?: string;
  maskURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      maskURL: 'MaskURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      maskURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlurFaceResponseBody extends $dara.Model {
  data?: BlurFaceResponseBodyData;
  /**
   * @example
   * 4C6080B0-64C4-488E-BBA6-245749CA11AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BlurFaceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

