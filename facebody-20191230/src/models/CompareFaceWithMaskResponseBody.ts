// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceWithMaskResponseBodyData extends $dara.Model {
  confidence?: number;
  isMaskA?: number;
  isMaskB?: number;
  landmarksAList?: number[];
  landmarksBList?: number[];
  /**
   * @example
   * imageB quality score less threshold
   */
  messageTips?: string;
  qualityScoreA?: number;
  qualityScoreB?: number;
  rectAList?: number[];
  rectBList?: number[];
  thresholds?: number[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      isMaskA: 'IsMaskA',
      isMaskB: 'IsMaskB',
      landmarksAList: 'LandmarksAList',
      landmarksBList: 'LandmarksBList',
      messageTips: 'MessageTips',
      qualityScoreA: 'QualityScoreA',
      qualityScoreB: 'QualityScoreB',
      rectAList: 'RectAList',
      rectBList: 'RectBList',
      thresholds: 'Thresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      isMaskA: 'number',
      isMaskB: 'number',
      landmarksAList: { 'type': 'array', 'itemType': 'number' },
      landmarksBList: { 'type': 'array', 'itemType': 'number' },
      messageTips: 'string',
      qualityScoreA: 'number',
      qualityScoreB: 'number',
      rectAList: { 'type': 'array', 'itemType': 'number' },
      rectBList: { 'type': 'array', 'itemType': 'number' },
      thresholds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.landmarksAList)) {
      $dara.Model.validateArray(this.landmarksAList);
    }
    if(Array.isArray(this.landmarksBList)) {
      $dara.Model.validateArray(this.landmarksBList);
    }
    if(Array.isArray(this.rectAList)) {
      $dara.Model.validateArray(this.rectAList);
    }
    if(Array.isArray(this.rectBList)) {
      $dara.Model.validateArray(this.rectBList);
    }
    if(Array.isArray(this.thresholds)) {
      $dara.Model.validateArray(this.thresholds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceWithMaskResponseBody extends $dara.Model {
  data?: CompareFaceWithMaskResponseBodyData;
  /**
   * @example
   * C6499918-E932-41B3-96F5-A18F50D262DD
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
      data: CompareFaceWithMaskResponseBodyData,
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

