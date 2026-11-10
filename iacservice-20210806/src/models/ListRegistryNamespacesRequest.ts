// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryNamespacesRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported for workspace names.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page for a paging query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * hg7nXVngyM6tQtvCagmtY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The workspace type. Valid values:
   * - system: public workspace
   * - self: custom workspace
   * - shared: shared workspace
   * - community: community workspace
   * By default, all types are returned.
   * 
   * @example
   * self
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

