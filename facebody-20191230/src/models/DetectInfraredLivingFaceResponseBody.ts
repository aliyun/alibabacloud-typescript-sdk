// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectInfraredLivingFaceResponseBodyDataElementsResultsRect extends $dara.Model {
  /**
   * @example
   * 20
   */
  height?: number;
  /**
   * @example
   * 60
   */
  left?: number;
  /**
   * @example
   * 50
   */
  top?: number;
  /**
   * @example
   * 30
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

export class DetectInfraredLivingFaceResponseBodyDataElementsResults extends $dara.Model {
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
   * 83.3848
   */
  rate?: number;
  rect?: DetectInfraredLivingFaceResponseBodyDataElementsResultsRect;
  /**
   * @example
   * review
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      messageTips: 'MessageTips',
      rate: 'Rate',
      rect: 'Rect',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      messageTips: 'string',
      rate: 'number',
      rect: DetectInfraredLivingFaceResponseBodyDataElementsResultsRect,
      suggestion: 'string',
    };
  }

  validate() {
    if(this.rect && typeof (this.rect as any).validate === 'function') {
      (this.rect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectInfraredLivingFaceResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 1
   */
  faceNumber?: number;
  /**
   * @example
   * http://viapi-demo.oss-cn-shanghai.aliyuncs.com/viapi-demo/images/SegmentCommonImage/segmentimage-src-hu.jpeg
   */
  imageURL?: string;
  results?: DetectInfraredLivingFaceResponseBodyDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      faceNumber: 'FaceNumber',
      imageURL: 'ImageURL',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceNumber: 'number',
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': DetectInfraredLivingFaceResponseBodyDataElementsResults },
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

export class DetectInfraredLivingFaceResponseBodyData extends $dara.Model {
  elements?: DetectInfraredLivingFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectInfraredLivingFaceResponseBodyDataElements },
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

export class DetectInfraredLivingFaceResponseBody extends $dara.Model {
  data?: DetectInfraredLivingFaceResponseBodyData;
  /**
   * @example
   * 68DF6EC7-3B1D-11EE-9FA7-1122F1AE92DD
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
      data: DetectInfraredLivingFaceResponseBodyData,
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

