// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services.
   * 
   * >  If you configure only the IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services, the access over the Internet or the network for interconnecting with other Alibaba Cloud services is subject to configurations, and access over a virtual private cloud (VPC) is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP address whitelist for access over a VPC.
   * 
   * >  If you configure only the IP address whitelist for access over a VPC, the access over a VPC is subject to configurations, and the access over the Internet or the network for interconnecting with other Alibaba Cloud services is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

