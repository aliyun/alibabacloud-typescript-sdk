// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserPrivateAccessPoliciesResponseBodyPolices } from "./ListUserPrivateAccessPoliciesResponseBodyPolices";


export class ListUserPrivateAccessPoliciesResponseBody extends $dara.Model {
  polices?: ListUserPrivateAccessPoliciesResponseBodyPolices[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9D852F87-AFB5-51B8-AACD-F7D0EFB8277D
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListUserPrivateAccessPoliciesResponseBodyPolices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

