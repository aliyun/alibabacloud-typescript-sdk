// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectFaceResponseBodyDataQualities extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  blurList?: number[];
  /**
   * @remarks
   * 1
   */
  fnfList?: number[];
  /**
   * @remarks
   * 1
   */
  glassList?: number[];
  /**
   * @remarks
   * 1
   */
  illuList?: number[];
  /**
   * @remarks
   * 1
   */
  maskList?: number[];
  /**
   * @remarks
   * 1
   */
  noiseList?: number[];
  /**
   * @remarks
   * 1
   */
  poseList?: number[];
  /**
   * @remarks
   * 1
   */
  scoreList?: number[];
  static names(): { [key: string]: string } {
    return {
      blurList: 'BlurList',
      fnfList: 'FnfList',
      glassList: 'GlassList',
      illuList: 'IlluList',
      maskList: 'MaskList',
      noiseList: 'NoiseList',
      poseList: 'PoseList',
      scoreList: 'ScoreList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurList: { 'type': 'array', 'itemType': 'number' },
      fnfList: { 'type': 'array', 'itemType': 'number' },
      glassList: { 'type': 'array', 'itemType': 'number' },
      illuList: { 'type': 'array', 'itemType': 'number' },
      maskList: { 'type': 'array', 'itemType': 'number' },
      noiseList: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      scoreList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.blurList)) {
      $dara.Model.validateArray(this.blurList);
    }
    if(Array.isArray(this.fnfList)) {
      $dara.Model.validateArray(this.fnfList);
    }
    if(Array.isArray(this.glassList)) {
      $dara.Model.validateArray(this.glassList);
    }
    if(Array.isArray(this.illuList)) {
      $dara.Model.validateArray(this.illuList);
    }
    if(Array.isArray(this.maskList)) {
      $dara.Model.validateArray(this.maskList);
    }
    if(Array.isArray(this.noiseList)) {
      $dara.Model.validateArray(this.noiseList);
    }
    if(Array.isArray(this.poseList)) {
      $dara.Model.validateArray(this.poseList);
    }
    if(Array.isArray(this.scoreList)) {
      $dara.Model.validateArray(this.scoreList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  faceCount?: number;
  /**
   * @remarks
   * 1
   */
  faceProbabilityList?: number[];
  /**
   * @remarks
   * 1
   */
  faceRectangles?: number[];
  /**
   * @example
   * 105
   */
  landmarkCount?: number;
  landmarkScore?: number[];
  /**
   * @remarks
   * 1
   */
  landmarks?: number[];
  /**
   * @remarks
   * 1
   */
  poseList?: number[];
  /**
   * @remarks
   * 1
   */
  pupils?: number[];
  qualities?: DetectFaceResponseBodyDataQualities;
  static names(): { [key: string]: string } {
    return {
      faceCount: 'FaceCount',
      faceProbabilityList: 'FaceProbabilityList',
      faceRectangles: 'FaceRectangles',
      landmarkCount: 'LandmarkCount',
      landmarkScore: 'LandmarkScore',
      landmarks: 'Landmarks',
      poseList: 'PoseList',
      pupils: 'Pupils',
      qualities: 'Qualities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceCount: 'number',
      faceProbabilityList: { 'type': 'array', 'itemType': 'number' },
      faceRectangles: { 'type': 'array', 'itemType': 'number' },
      landmarkCount: 'number',
      landmarkScore: { 'type': 'array', 'itemType': 'number' },
      landmarks: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      pupils: { 'type': 'array', 'itemType': 'number' },
      qualities: DetectFaceResponseBodyDataQualities,
    };
  }

  validate() {
    if(Array.isArray(this.faceProbabilityList)) {
      $dara.Model.validateArray(this.faceProbabilityList);
    }
    if(Array.isArray(this.faceRectangles)) {
      $dara.Model.validateArray(this.faceRectangles);
    }
    if(Array.isArray(this.landmarkScore)) {
      $dara.Model.validateArray(this.landmarkScore);
    }
    if(Array.isArray(this.landmarks)) {
      $dara.Model.validateArray(this.landmarks);
    }
    if(Array.isArray(this.poseList)) {
      $dara.Model.validateArray(this.poseList);
    }
    if(Array.isArray(this.pupils)) {
      $dara.Model.validateArray(this.pupils);
    }
    if(this.qualities && typeof (this.qualities as any).validate === 'function') {
      (this.qualities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBody extends $dara.Model {
  data?: DetectFaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectFaceResponseBodyData,
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

