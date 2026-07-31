// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryModelGroupModelsRequest extends $dara.Model {
  /**
   * @remarks
   * Searches by model name or identifier.
   * 
   * @example
   * qwen
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of results.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * This field is not used.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

