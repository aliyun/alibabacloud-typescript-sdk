// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateHumanAnimeStyleRequest extends $dara.Model {
  /**
   * @example
   * anime
   */
  algoType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/GenerateHumanAnimeStyle/GenerateHumanAnimeStyle8.png
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      algoType: 'AlgoType',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoType: 'string',
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

