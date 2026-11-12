// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned in the previous ListAgentVersions response when you query the next page. Do not specify this parameter for the first query.
   * 
   * @example
   * YWdlbnQtdmVyc2lvbnM6MjA
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

