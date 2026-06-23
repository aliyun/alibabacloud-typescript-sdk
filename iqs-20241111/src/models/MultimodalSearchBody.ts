// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultimodalSearchBody extends $dara.Model {
  /**
   * @remarks
   * Additional query parameters, such as blocked sites
   * 
   * @example
   * {
   *     "excludeSites": "www.360doc.com,weibo.com"
   *   }
   */
  advancedParams?: { [key: string]: any };
  engineType?: string;
  /**
   * @remarks
   * Query content
   * 
   * @example
   * 阿里巴巴
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParams: 'advancedParams',
      engineType: 'engineType',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      engineType: 'string',
      query: 'string',
    };
  }

  validate() {
    if(this.advancedParams) {
      $dara.Model.validateMap(this.advancedParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

