// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableKibanaPvlNetworkRequestVSwitchIdsZone extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-xxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'vswitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableKibanaPvlNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * es-cn-27a3mul6l000xxx-kibana-endpoint
   */
  endpointName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIdsZone?: EnableKibanaPvlNetworkRequestVSwitchIdsZone[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointName: 'endpointName',
      securityGroups: 'securityGroups',
      vSwitchIdsZone: 'vSwitchIdsZone',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointName: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitchIdsZone: { 'type': 'array', 'itemType': EnableKibanaPvlNetworkRequestVSwitchIdsZone },
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

