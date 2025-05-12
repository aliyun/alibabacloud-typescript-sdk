// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclPolicyResponseBodyInternetAclPolicyList } from "./ListAclPolicyResponseBodyInternetAclPolicyList";
import { ListAclPolicyResponseBodyIntranetVpcAclPolicyList } from "./ListAclPolicyResponseBodyIntranetVpcAclPolicyList";


export class ListAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The access control policies of the private gateway over the Internet.
   */
  internetAclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyList[];
  /**
   * @remarks
   * The access control policies of the private gateway over the internal network.
   */
  intranetVpcAclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      internetAclPolicyList: 'InternetAclPolicyList',
      intranetVpcAclPolicyList: 'IntranetVpcAclPolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      internetAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyList },
      intranetVpcAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.internetAclPolicyList)) {
      $dara.Model.validateArray(this.internetAclPolicyList);
    }
    if(Array.isArray(this.intranetVpcAclPolicyList)) {
      $dara.Model.validateArray(this.intranetVpcAclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

