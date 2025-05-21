// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
  /**
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @example
   * java.lang.String
   */
  mappingType?: string;
  static names(): { [key: string]: string } {
    return {
      extractKey: 'extractKey',
      extractKeySpec: 'extractKeySpec',
      mappingType: 'mappingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractKey: 'string',
      extractKeySpec: 'string',
      mappingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

