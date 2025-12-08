// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFaceRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * test1,test2,test3
   */
  dbNames?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/SearchFace/SearchFace1.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  limit?: number;
  /**
   * @example
   * 5
   */
  maxFaceNum?: number;
  /**
   * @example
   * 50.0
   */
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbNames: 'DbNames',
      imageUrl: 'ImageUrl',
      limit: 'Limit',
      maxFaceNum: 'MaxFaceNum',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbNames: 'string',
      imageUrl: 'string',
      limit: 'number',
      maxFaceNum: 'number',
      qualityScoreThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

