// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserApplicationsResponseBodyApplications } from "./ListUserApplicationsResponseBodyApplications";


export class ListUserApplicationsResponseBody extends $dara.Model {
  applications?: ListUserApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 20
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
      applications: { 'type': 'array', 'itemType': ListUserApplicationsResponseBodyApplications },
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

