// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRedirectRulesResponseBodyConfigs } from "./ListRedirectRulesResponseBodyConfigs";


export class ListRedirectRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of redirect configurations.
   */
  configs?: ListRedirectRulesResponseBodyConfigs[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListRedirectRulesResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
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

