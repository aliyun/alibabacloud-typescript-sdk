// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudResourcesResponseBodyCloudResources } from "./DescribeCloudResourcesResponseBodyCloudResources";


export class DescribeCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud service resources that are added to WAF.
   */
  cloudResources?: DescribeCloudResourcesResponseBodyCloudResources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C327F81A-CCE2-5B21-817C-F93E29C5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud service resources returned.
   * 
   * @example
   * 121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudResources: 'CloudResources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResources: { 'type': 'array', 'itemType': DescribeCloudResourcesResponseBodyCloudResources },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudResources)) {
      $dara.Model.validateArray(this.cloudResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

