// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails } from "./DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails";


export class DescribeCloudResourceAccessPortDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the ports of cloud services that are added to WAF.
   */
  accessPortDetails?: DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPortDetails: 'AccessPortDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPortDetails: { 'type': 'array', 'itemType': DescribeCloudResourceAccessPortDetailsResponseBodyAccessPortDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessPortDetails)) {
      $dara.Model.validateArray(this.accessPortDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

