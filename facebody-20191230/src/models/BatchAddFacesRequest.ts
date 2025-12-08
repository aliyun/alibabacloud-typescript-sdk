// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFacesRequestFaces extends $dara.Model {
  extraData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/demo/1.png
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      extraData: 'ExtraData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraData: 'string',
      imageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFacesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * U1
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  faces?: BatchAddFacesRequestFaces[];
  /**
   * @example
   * 50.0
   */
  qualityScoreThreshold?: number;
  /**
   * @example
   * 50.0
   */
  similarityScoreThresholdBetweenEntity?: number;
  /**
   * @example
   * 50.0
   */
  similarityScoreThresholdInEntity?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      entityId: 'EntityId',
      faces: 'Faces',
      qualityScoreThreshold: 'QualityScoreThreshold',
      similarityScoreThresholdBetweenEntity: 'SimilarityScoreThresholdBetweenEntity',
      similarityScoreThresholdInEntity: 'SimilarityScoreThresholdInEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      faces: { 'type': 'array', 'itemType': BatchAddFacesRequestFaces },
      qualityScoreThreshold: 'number',
      similarityScoreThresholdBetweenEntity: 'number',
      similarityScoreThresholdInEntity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faces)) {
      $dara.Model.validateArray(this.faces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

