// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLifecycleHooksResponseBodyLifecycleHooks } from "./DescribeLifecycleHooksResponseBodyLifecycleHooks";


export class DescribeLifecycleHooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the lifecycle hooks.
   */
  lifecycleHooks?: DescribeLifecycleHooksResponseBodyLifecycleHooks[];
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
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of lifecycle hooks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecycleHooks: 'LifecycleHooks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHooks: { 'type': 'array', 'itemType': DescribeLifecycleHooksResponseBodyLifecycleHooks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycleHooks)) {
      $dara.Model.validateArray(this.lifecycleHooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

