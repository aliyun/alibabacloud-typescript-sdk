// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeFaceResponseBodyDataQualities extends $dara.Model {
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

export class RecognizeFaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  ageList?: number[];
  /**
   * @remarks
   * 1
   */
  beautyList?: number[];
  /**
   * @example
   * 1024
   */
  denseFeatureLength?: number;
  /**
   * @remarks
   * 1
   */
  denseFeatures?: string[];
  /**
   * @remarks
   * 1
   */
  expressions?: number[];
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
   * @remarks
   * 1
   */
  genderList?: number[];
  /**
   * @remarks
   * 1
   */
  glasses?: number[];
  /**
   * @remarks
   * 1
   */
  hatList?: number[];
  /**
   * @example
   * 105
   */
  landmarkCount?: number;
  /**
   * @remarks
   * 1
   */
  landmarks?: number[];
  /**
   * @remarks
   * 1
   */
  masks?: number[];
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
  qualities?: RecognizeFaceResponseBodyDataQualities;
  static names(): { [key: string]: string } {
    return {
      ageList: 'AgeList',
      beautyList: 'BeautyList',
      denseFeatureLength: 'DenseFeatureLength',
      denseFeatures: 'DenseFeatures',
      expressions: 'Expressions',
      faceCount: 'FaceCount',
      faceProbabilityList: 'FaceProbabilityList',
      faceRectangles: 'FaceRectangles',
      genderList: 'GenderList',
      glasses: 'Glasses',
      hatList: 'HatList',
      landmarkCount: 'LandmarkCount',
      landmarks: 'Landmarks',
      masks: 'Masks',
      poseList: 'PoseList',
      pupils: 'Pupils',
      qualities: 'Qualities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageList: { 'type': 'array', 'itemType': 'number' },
      beautyList: { 'type': 'array', 'itemType': 'number' },
      denseFeatureLength: 'number',
      denseFeatures: { 'type': 'array', 'itemType': 'string' },
      expressions: { 'type': 'array', 'itemType': 'number' },
      faceCount: 'number',
      faceProbabilityList: { 'type': 'array', 'itemType': 'number' },
      faceRectangles: { 'type': 'array', 'itemType': 'number' },
      genderList: { 'type': 'array', 'itemType': 'number' },
      glasses: { 'type': 'array', 'itemType': 'number' },
      hatList: { 'type': 'array', 'itemType': 'number' },
      landmarkCount: 'number',
      landmarks: { 'type': 'array', 'itemType': 'number' },
      masks: { 'type': 'array', 'itemType': 'number' },
      poseList: { 'type': 'array', 'itemType': 'number' },
      pupils: { 'type': 'array', 'itemType': 'number' },
      qualities: RecognizeFaceResponseBodyDataQualities,
    };
  }

  validate() {
    if(Array.isArray(this.ageList)) {
      $dara.Model.validateArray(this.ageList);
    }
    if(Array.isArray(this.beautyList)) {
      $dara.Model.validateArray(this.beautyList);
    }
    if(Array.isArray(this.denseFeatures)) {
      $dara.Model.validateArray(this.denseFeatures);
    }
    if(Array.isArray(this.expressions)) {
      $dara.Model.validateArray(this.expressions);
    }
    if(Array.isArray(this.faceProbabilityList)) {
      $dara.Model.validateArray(this.faceProbabilityList);
    }
    if(Array.isArray(this.faceRectangles)) {
      $dara.Model.validateArray(this.faceRectangles);
    }
    if(Array.isArray(this.genderList)) {
      $dara.Model.validateArray(this.genderList);
    }
    if(Array.isArray(this.glasses)) {
      $dara.Model.validateArray(this.glasses);
    }
    if(Array.isArray(this.hatList)) {
      $dara.Model.validateArray(this.hatList);
    }
    if(Array.isArray(this.landmarks)) {
      $dara.Model.validateArray(this.landmarks);
    }
    if(Array.isArray(this.masks)) {
      $dara.Model.validateArray(this.masks);
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

export class RecognizeFaceResponseBody extends $dara.Model {
  data?: RecognizeFaceResponseBodyData;
  /**
   * @example
   * 8251C88E-8273-4DBF-94FB-A6BCB268CEA2
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
      data: RecognizeFaceResponseBodyData,
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

