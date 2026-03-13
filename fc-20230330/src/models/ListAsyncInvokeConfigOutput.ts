// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncConfig } from "./AsyncConfig";


export class ListAsyncInvokeConfigOutput extends $dara.Model {
  /**
   * @remarks
   * The configurations of the asynchronous invocation.
   */
  configs?: AsyncConfig[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 8bj81uI8n****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': AsyncConfig },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

