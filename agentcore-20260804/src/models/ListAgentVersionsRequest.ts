// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to query the next page. Pass the nextToken returned in the previous ListAgentVersions response. Do not pass this parameter for the first query.
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

