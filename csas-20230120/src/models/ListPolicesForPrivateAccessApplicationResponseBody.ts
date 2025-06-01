// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicesForPrivateAccessApplicationResponseBodyApplications } from "./ListPolicesForPrivateAccessApplicationResponseBodyApplications";


export class ListPolicesForPrivateAccessApplicationResponseBody extends $dara.Model {
  applications?: ListPolicesForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
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
      applications: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplications },
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

