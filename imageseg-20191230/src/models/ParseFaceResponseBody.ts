// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseFaceResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/fivesensesegmenter/prod/560FA2E7-FDC6-59A5-ABDD-D62A05146734/skin/_18dd_20211231-040658.png?Expires=1640925418&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=2g0M88wZl%2Bn4t4gzQX%2BTIskpWB****
   */
  imageURL?: string;
  /**
   * @example
   * skin
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFaceResponseBodyData extends $dara.Model {
  elements?: ParseFaceResponseBodyDataElements[];
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/ParseFace/ParseFace1.jpg
   */
  originImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      originImageURL: 'OriginImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ParseFaceResponseBodyDataElements },
      originImageURL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFaceResponseBody extends $dara.Model {
  data?: ParseFaceResponseBodyData;
  /**
   * @example
   * D6C24839-91A7-41DA-B31F-98F08EF80CC0
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
      data: ParseFaceResponseBodyData,
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

