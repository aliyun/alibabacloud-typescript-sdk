// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHttpsBasicConfigurationsResponseBodyConfigs } from "./ListHttpsBasicConfigurationsResponseBodyConfigs";


export class ListHttpsBasicConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response body configuration.
   */
  configs?: ListHttpsBasicConfigurationsResponseBodyConfigs[];
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
   * 10
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
   * Total number of records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 2
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
      configs: { 'type': 'array', 'itemType': ListHttpsBasicConfigurationsResponseBodyConfigs },
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

