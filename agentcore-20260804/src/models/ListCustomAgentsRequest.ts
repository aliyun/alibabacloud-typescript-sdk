// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. If this parameter is omitted or set to 0, the default value 20 is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The opaque token used to query the next page. Omit this parameter in the first request. For subsequent requests, use the nextToken returned in the previous response as is and keep the same workspace. Do not construct this token.
   * 
   * @example
   * djE6YWdlbnRjb3JlLmFnZW50Lmxpc3QuY3VzdG9tOjIw
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

