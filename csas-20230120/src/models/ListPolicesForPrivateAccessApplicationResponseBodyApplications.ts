// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies } from "./ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies";


export class ListPolicesForPrivateAccessApplicationResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
  policies?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      policies: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

