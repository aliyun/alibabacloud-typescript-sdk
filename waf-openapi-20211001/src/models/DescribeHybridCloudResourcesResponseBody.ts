// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudResourcesResponseBodyDomains } from "./DescribeHybridCloudResourcesResponseBodyDomains";


export class DescribeHybridCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   */
  domains?: DescribeHybridCloudResourcesResponseBodyDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98D2AA9A-5959-5CCD-83E3-B6606232A2BE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

