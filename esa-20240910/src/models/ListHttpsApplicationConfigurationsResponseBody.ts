// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHttpsApplicationConfigurationsResponseBodyConfigs } from "./ListHttpsApplicationConfigurationsResponseBodyConfigs";


export class ListHttpsApplicationConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response body configurations.
   */
  configs?: ListHttpsApplicationConfigurationsResponseBodyConfigs[];
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
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 16
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
      configs: { 'type': 'array', 'itemType': ListHttpsApplicationConfigurationsResponseBodyConfigs },
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

