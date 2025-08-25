// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeVideoModelFaceRequestMergeInfos extends $dara.Model {
  imageURL?: string;
  templateFaceID?: string;
  templateFaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      templateFaceID: 'TemplateFaceID',
      templateFaceURL: 'TemplateFaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      templateFaceID: 'string',
      templateFaceURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeVideoModelFaceRequest extends $dara.Model {
  addWatermark?: boolean;
  enhance?: boolean;
  /**
   * @example
   * https://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/ref/ref.jpg
   */
  faceImageURL?: string;
  mergeInfos?: MergeVideoModelFaceRequestMergeInfos[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3bf2418c-7adf-4002-a9d6-2f7cf1889c0d
   */
  templateId?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      enhance: 'Enhance',
      faceImageURL: 'FaceImageURL',
      mergeInfos: 'MergeInfos',
      templateId: 'TemplateId',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      enhance: 'boolean',
      faceImageURL: 'string',
      mergeInfos: { 'type': 'array', 'itemType': MergeVideoModelFaceRequestMergeInfos },
      templateId: 'string',
      watermarkType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mergeInfos)) {
      $dara.Model.validateArray(this.mergeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

