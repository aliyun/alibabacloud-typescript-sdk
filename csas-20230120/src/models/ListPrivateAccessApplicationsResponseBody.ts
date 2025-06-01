// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrivateAccessApplicationsResponseBodyApplications } from "./ListPrivateAccessApplicationsResponseBodyApplications";


export class ListPrivateAccessApplicationsResponseBody extends $dara.Model {
  applications?: ListPrivateAccessApplicationsResponseBodyApplications[];
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
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

