// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHttpRequestHeaderModificationRulesResponseBodyConfigs } from "./ListHttpRequestHeaderModificationRulesResponseBodyConfigs";


export class ListHttpRequestHeaderModificationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of HTTP request header modification configurations.
   */
  configs?: ListHttpRequestHeaderModificationRulesResponseBodyConfigs[];
  /**
   * @remarks
   * Page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default **500**, with a range of **1~500**.
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
   * 35C66C7B-671H-4297-9187-2C4477247A78
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
      configs: { 'type': 'array', 'itemType': ListHttpRequestHeaderModificationRulesResponseBodyConfigs },
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

