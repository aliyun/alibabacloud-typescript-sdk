// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of versions to return per page. Valid values: 1 to 100. Default value: 100. The actual number of returned versions may be less than this value.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. Do not specify this parameter in the first request. To query subsequent pages, pass the nextToken value from the previous response as is, and keep the agent workspace and dataset name unchanged. The example is for demonstration purposes only. Use the actual token returned by the API operation.
   * 
   * @example
   * umaQfI7x758Ns4TgWrj8yA3fYlnk7dJgsfhMrSViRY8=
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

