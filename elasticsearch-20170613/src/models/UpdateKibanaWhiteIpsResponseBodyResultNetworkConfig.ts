// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList } from "./UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList";


export class UpdateKibanaWhiteIpsResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelists.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vpc-bp1jy348ibzulk6hn****
   */
  vpcId?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * cn-hangzhou-h
   */
  vsArea?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * vsw-bp1a0mifpletdd1da****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  whiteIpGroupList?: UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
      whiteIpGroupList: { 'type': 'array', 'itemType': UpdateKibanaWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroupList)) {
      $dara.Model.validateArray(this.whiteIpGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

