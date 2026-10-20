// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodePoolComponentInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Default value: 200.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 5c0a1c0f91c14c6****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'max_results',
      nextToken: 'next_token',
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

