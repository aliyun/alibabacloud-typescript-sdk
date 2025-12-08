// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVideoLivingFaceResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 0.84644949436187744
   */
  faceConfidence?: number;
  /**
   * @example
   * 0.72464925050735474
   */
  liveConfidence?: number;
  rect?: number[];
  static names(): { [key: string]: string } {
    return {
      faceConfidence: 'FaceConfidence',
      liveConfidence: 'LiveConfidence',
      rect: 'Rect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceConfidence: 'number',
      liveConfidence: 'number',
      rect: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.rect)) {
      $dara.Model.validateArray(this.rect);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoLivingFaceResponseBodyData extends $dara.Model {
  elements?: DetectVideoLivingFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVideoLivingFaceResponseBodyDataElements },
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

export class DetectVideoLivingFaceResponseBody extends $dara.Model {
  data?: DetectVideoLivingFaceResponseBodyData;
  /**
   * @example
   * 8E92F28B-F889-48CB-9FCC-3207CFA2215E
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
      data: DetectVideoLivingFaceResponseBodyData,
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

