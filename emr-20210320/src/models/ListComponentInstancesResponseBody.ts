// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComponentInstancesResponseBodyComponentInstances } from "./ListComponentInstancesResponseBodyComponentInstances";


export class ListComponentInstancesResponseBody extends $dara.Model {
  componentInstances?: ListComponentInstancesResponseBodyComponentInstances[];
  /**
   * @remarks
   * 本次请求所返回的最大记录条数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 返回读取到的数据位置，空代表数据已经读取完毕。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * 本次请求条件下的数据总量。
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      componentInstances: 'ComponentInstances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentInstances: { 'type': 'array', 'itemType': ListComponentInstancesResponseBodyComponentInstances },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.componentInstances)) {
      $dara.Model.validateArray(this.componentInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

