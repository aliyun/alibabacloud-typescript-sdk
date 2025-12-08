// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectLivingFaceResponseBodyDataElementsResultsFrames extends $dara.Model {
  /**
   * @example
   * 84.83
   */
  rate?: number;
  /**
   * @example
   * http://aligreen-shanghai.oss-cn-shanghai.aliyuncs.com/prod/hammal/26210da42/28118541_TB1urBOQFXXXXbMXFXXXXXXXXXX-1442-257.png?Expires=1582703593&OSSAccessKeyId=H4sp5QfNbuDg****&Signature=%2B8iUkb5YjomYR8ujV2c8wMAavs****&x-oss-process=image%2Fcrop%2Cx_0%2Cw_288%2Fauto-orient%2C0
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElementsResultsRect extends $dara.Model {
  /**
   * @example
   * 60
   */
  height?: number;
  /**
   * @example
   * 20
   */
  left?: number;
  /**
   * @example
   * 30
   */
  top?: number;
  /**
   * @example
   * 50
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElementsResults extends $dara.Model {
  frames?: DetectLivingFaceResponseBodyDataElementsResultsFrames[];
  /**
   * @example
   * liveness
   */
  label?: string;
  /**
   * @example
   * blurred, occluded or large angle face, please check.
   */
  messageTips?: string;
  /**
   * @example
   * 76.22
   */
  rate?: number;
  rect?: DetectLivingFaceResponseBodyDataElementsResultsRect;
  /**
   * @example
   * review
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      label: 'Label',
      messageTips: 'MessageTips',
      rate: 'Rate',
      rect: 'Rect',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElementsResultsFrames },
      label: 'string',
      messageTips: 'string',
      rate: 'number',
      rect: DetectLivingFaceResponseBodyDataElementsResultsRect,
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    if(this.rect && typeof (this.rect as any).validate === 'function') {
      (this.rect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 1
   */
  faceNumber?: number;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectLivingFace/DetectLivingFace4.jpg
   */
  imageURL?: string;
  results?: DetectLivingFaceResponseBodyDataElementsResults[];
  /**
   * @example
   * img1owc8WGskNm78OEAPJTZal-1****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      faceNumber: 'FaceNumber',
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceNumber: 'number',
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElementsResults },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLivingFaceResponseBodyData extends $dara.Model {
  elements?: DetectLivingFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectLivingFaceResponseBodyDataElements },
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

export class DetectLivingFaceResponseBody extends $dara.Model {
  data?: DetectLivingFaceResponseBodyData;
  /**
   * @example
   * 2EEA0396-BD84-5729-B8BD-D60776FCEF2B
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
      data: DetectLivingFaceResponseBodyData,
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

