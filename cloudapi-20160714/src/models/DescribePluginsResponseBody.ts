// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginsResponseBodyPlugins } from "./DescribePluginsResponseBodyPlugins";


export class DescribePluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned information about the plug-in. It is an array consisting of PluginAttribute data.
   */
  plugins?: DescribePluginsResponseBodyPlugins;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46373DC4-19F1-4DC8-8C31-1107289BB5E0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
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
      plugins: DescribePluginsResponseBodyPlugins,
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

