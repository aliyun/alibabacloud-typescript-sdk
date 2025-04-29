// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet } from "./DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet";


export class DescribeCloudAssistantStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the installation status of Cloud Assistant on the instances.
   */
  instanceCloudAssistantStatusSet?: DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceCloudAssistantStatusSet: 'InstanceCloudAssistantStatusSet',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCloudAssistantStatusSet: DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceCloudAssistantStatusSet && typeof (this.instanceCloudAssistantStatusSet as any).validate === 'function') {
      (this.instanceCloudAssistantStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

