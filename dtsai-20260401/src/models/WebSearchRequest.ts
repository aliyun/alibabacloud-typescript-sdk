// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Default value: 10. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The search query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * Spring Boot
   */
  query?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      query: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

