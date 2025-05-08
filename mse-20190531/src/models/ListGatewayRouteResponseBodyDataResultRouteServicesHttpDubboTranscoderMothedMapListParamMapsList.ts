// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
  /**
   * @remarks
   * The key extracted from the input parameter.
   * 
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @remarks
   * The position of the input parameter.
   * 
   * > Valid values:
   * 
   * *   `ALL_QUERY_PARAMETER`: request parameter
   * 
   * *   `ALL_HEADER`: request header
   * 
   * *   `ALL_PATH`: request path
   * 
   * *   `ALL_BODY`: request body
   * 
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @remarks
   * The type of the backend service parameter.
   * 
   * @example
   * java.lang.String
   */
  mappingType?: string;
  static names(): { [key: string]: string } {
    return {
      extractKey: 'ExtractKey',
      extractKeySpec: 'ExtractKeySpec',
      mappingType: 'MappingType',
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

