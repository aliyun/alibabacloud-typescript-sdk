// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class AddFaceAdvanceRequest extends $dara.Model {
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
  imageUrlObject?: Readable;
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
      imageUrlObject: 'ImageUrl',
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
      imageUrlObject: 'Readable',
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

