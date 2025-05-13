// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListKibanaPvlNetworkResponseBodyResultVSwitchIdsZone } from "./ListKibanaPvlNetworkResponseBodyResultVswitchIdsZone";


export class ListKibanaPvlNetworkResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2024-03-07T06:26:28Z
   */
  createTime?: string;
  /**
   * @example
   * ep-bp1tah7zbrwmkjef****
   */
  endpointId?: string;
  /**
   * @example
   * es-cn-xxdjfia****-kibana
   */
  endpointName?: string;
  /**
   * @example
   * Connected
   */
  endpointStatus?: string;
  /**
   * @example
   * es-cn-27a3mul6l***-kibana-internal
   */
  pvlId?: string;
  securityGroups?: string[];
  vSwitchIdsZone?: ListKibanaPvlNetworkResponseBodyResultVSwitchIdsZone[];
  /**
   * @example
   * vpc-bp16k1dvzxtma*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      endpointId: 'endpointId',
      endpointName: 'endpointName',
      endpointStatus: 'endpointStatus',
      pvlId: 'pvlId',
      securityGroups: 'securityGroups',
      vSwitchIdsZone: 'vSwitchIdsZone',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      pvlId: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitchIdsZone: { 'type': 'array', 'itemType': ListKibanaPvlNetworkResponseBodyResultVSwitchIdsZone },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.vSwitchIdsZone)) {
      $dara.Model.validateArray(this.vSwitchIdsZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

