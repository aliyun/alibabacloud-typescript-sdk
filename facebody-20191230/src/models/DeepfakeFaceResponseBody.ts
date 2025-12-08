// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeFaceResponseBodyDataElementsResultsRect extends $dara.Model {
  /**
   * @example
   * 284
   */
  height?: number;
  /**
   * @example
   * 373
   */
  left?: number;
  /**
   * @example
   * 111
   */
  top?: number;
  /**
   * @example
   * 207
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

export class DeepfakeFaceResponseBodyDataElementsResults extends $dara.Model {
  /**
   * @example
   * 36.6455
   */
  confidence?: number;
  /**
   * @example
   * normalface
   */
  label?: string;
  /**
   * @example
   * blurred, occluded or large angle face, please check.
   */
  messageTips?: string;
  rect?: DeepfakeFaceResponseBodyDataElementsResultsRect;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
      messageTips: 'MessageTips',
      rect: 'Rect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      messageTips: 'string',
      rect: DeepfakeFaceResponseBodyDataElementsResultsRect,
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

export class DeepfakeFaceResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 1
   */
  faceNumber?: number;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DeepfakeFace/DeepfakeFace1.jpg
   */
  imageURL?: string;
  results?: DeepfakeFaceResponseBodyDataElementsResults[];
  /**
   * @example
   * 8E6F65D5-62A1-1E5B-BC0B-00508034AC92
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
      results: { 'type': 'array', 'itemType': DeepfakeFaceResponseBodyDataElementsResults },
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

export class DeepfakeFaceResponseBodyData extends $dara.Model {
  elements?: DeepfakeFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DeepfakeFaceResponseBodyDataElements },
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

export class DeepfakeFaceResponseBody extends $dara.Model {
  data?: DeepfakeFaceResponseBodyData;
  /**
   * @example
   * 8E6F65D5-62A1-1E5B-BC0B-00508034AC92
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
      data: DeepfakeFaceResponseBodyData,
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

