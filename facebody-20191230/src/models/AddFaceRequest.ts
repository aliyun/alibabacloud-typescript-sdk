// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceRequest extends $dara.Model {
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
  extraData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/demo/1.png
   */
  imageUrl?: string;
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
      extraData: 'ExtraData',
      imageUrl: 'ImageUrl',
      qualityScoreThreshold: 'QualityScoreThreshold',
      similarityScoreThresholdBetweenEntity: 'SimilarityScoreThresholdBetweenEntity',
      similarityScoreThresholdInEntity: 'SimilarityScoreThresholdInEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      entityId: 'string',
      extraData: 'string',
      imageUrl: 'string',
      qualityScoreThreshold: 'number',
      similarityScoreThresholdBetweenEntity: 'number',
      similarityScoreThresholdInEntity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

