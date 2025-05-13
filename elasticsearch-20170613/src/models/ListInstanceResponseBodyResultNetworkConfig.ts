// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceResponseBodyResultNetworkConfigWhiteIpGroupList } from "./ListInstanceResponseBodyResultNetworkConfigWhiteIpGroupList";


export class ListInstanceResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * *   cloud_ssd: standard SSD
   * *   cloud_efficiency: ultra disk
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * vpc-abc
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies whether to use disk encryption. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * cn-hangzhou-e
   */
  vsArea?: string;
  /**
   * @remarks
   * The performance level of the ESSD. This parameter is required when the diskType parameter is set to cloud_essd. Valid values: PL1, PL2, and PL3.
   * 
   * @example
   * vsw-def
   */
  vswitchId?: string;
  whiteIpGroupList?: ListInstanceResponseBodyResultNetworkConfigWhiteIpGroupList[];
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
      whiteIpGroupList: { 'type': 'array', 'itemType': ListInstanceResponseBodyResultNetworkConfigWhiteIpGroupList },
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

