// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonAgentQuery extends $dara.Model {
  /**
   * @remarks
   * The maximum number of place results to return. Default value: 10.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The natural language question used to retrieve nearby places.
   * 
   * @example
   * High-end hotels within 5 km of Lingyin Temple in Hangzhou
   */
  query?: string;
  /**
   * @remarks
   * The search scenario code. Valid values: hotels (hotel), attractions (attraction), restaurants (restaurant), and entertainment (leisure and entertainment). If you do not specify this parameter, the model identifies the scenario.
   * 
   * @example
   * hotels
   */
  querySceneEnumCode?: string;
  /**
   * @remarks
   * The search result mode. Valid values: single (returns simplified fields) and normal (returns all fields). Default value: normal.
   * 
   * @example
   * normal
   */
  searchModel?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      query: 'query',
      querySceneEnumCode: 'querySceneEnumCode',
      searchModel: 'searchModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      query: 'string',
      querySceneEnumCode: 'string',
      searchModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

