// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGuestApplicationsResponseBodyApplications } from "./DescribeGuestApplicationsResponseBodyApplications";


export class DescribeGuestApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications.
   */
  applications?: DescribeGuestApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 272CF39E-B5DE-5BE3-A09B-B43F1026****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': DescribeGuestApplicationsResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

