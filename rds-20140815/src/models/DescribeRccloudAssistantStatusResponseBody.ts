// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet } from "./DescribeRccloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet";


export class DescribeRCCloudAssistantStatusResponseBody extends $dara.Model {
  instanceCloudAssistantStatusSet?: DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 0688F1D2-CDA8-5617-A43C-ADAC61D80D43
   */
  requestId?: string;
  /**
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
      instanceCloudAssistantStatusSet: { 'type': 'array', 'itemType': DescribeRCCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet },
      nextToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceCloudAssistantStatusSet)) {
      $dara.Model.validateArray(this.instanceCloudAssistantStatusSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

