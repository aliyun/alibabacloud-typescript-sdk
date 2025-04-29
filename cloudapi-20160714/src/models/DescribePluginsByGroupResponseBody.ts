// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginsByGroupResponseBodyPlugins } from "./DescribePluginsByGroupResponseBodyPlugins";


export class DescribePluginsByGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination parameter: current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returns information about the plugins
   */
  plugins?: DescribePluginsByGroupResponseBodyPlugins;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5F5574BA-F22B-563D-841E-C817964F517F
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of results returned
   * 
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plugins: 'Plugins',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      plugins: DescribePluginsByGroupResponseBodyPlugins,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.plugins && typeof (this.plugins as any).validate === 'function') {
      (this.plugins as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

