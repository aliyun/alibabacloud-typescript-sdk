// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeImageFaceRequestMergeInfos extends $dara.Model {
  /**
   * @example
   * http://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/ref/ref.jpg
   */
  imageURL?: string;
  /**
   * @example
   * 6cd509ea-54fa-4730-8e9d-c94cadcda048_0
   */
  templateFaceID?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      templateFaceID: 'TemplateFaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      templateFaceID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeImageFaceRequest extends $dara.Model {
  /**
   * @example
   * False
   */
  addWatermark?: boolean;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/MergeImageFace/MergeImageFace-1.png
   */
  imageURL?: string;
  mergeInfos?: MergeImageFaceRequestMergeInfos[];
  /**
   * @example
   * v1
   */
  modelVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6cd509ea-54fa-4730-8e9d-c94cadcda048
   */
  templateId?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      imageURL: 'ImageURL',
      mergeInfos: 'MergeInfos',
      modelVersion: 'ModelVersion',
      templateId: 'TemplateId',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      imageURL: 'string',
      mergeInfos: { 'type': 'array', 'itemType': MergeImageFaceRequestMergeInfos },
      modelVersion: 'string',
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

