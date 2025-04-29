// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginStatusResponseBodyInstancePluginStatusSet } from "./ListPluginStatusResponseBodyInstancePluginStatusSet";


export class ListPluginStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The states of Cloud Assistant plug-ins on the instances.
   */
  instancePluginStatusSet?: ListPluginStatusResponseBodyInstancePluginStatusSet;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instancePluginStatusSet: 'InstancePluginStatusSet',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePluginStatusSet: ListPluginStatusResponseBodyInstancePluginStatusSet,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instancePluginStatusSet && typeof (this.instancePluginStatusSet as any).validate === 'function') {
      (this.instancePluginStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

