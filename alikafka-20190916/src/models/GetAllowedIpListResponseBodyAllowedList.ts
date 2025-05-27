// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAllowedIpListResponseBodyAllowedListInternetList } from "./GetAllowedIpListResponseBodyAllowedListInternetList";
import { GetAllowedIpListResponseBodyAllowedListVpcList } from "./GetAllowedIpListResponseBodyAllowedListVpcList";


export class GetAllowedIpListResponseBodyAllowedList extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the instance. Valid values:
   * 
   * *   **4**: allows access from the Internet and a virtual private cloud (VPC).
   * *   **5**: allows access from a VPC.
   * 
   * >  Only integrators need to concern themselves with the value of this parameter.
   * 
   * @example
   * 4
   */
  deployType?: number;
  /**
   * @remarks
   * The whitelist for access from the Internet.
   */
  internetList?: GetAllowedIpListResponseBodyAllowedListInternetList[];
  /**
   * @remarks
   * The whitelist for access from a virtual private cloud (VPC).
   */
  vpcList?: GetAllowedIpListResponseBodyAllowedListVpcList[];
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      internetList: 'InternetList',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      internetList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListInternetList },
      vpcList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListVpcList },
    };
  }

  validate() {
    if(Array.isArray(this.internetList)) {
      $dara.Model.validateArray(this.internetList);
    }
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

