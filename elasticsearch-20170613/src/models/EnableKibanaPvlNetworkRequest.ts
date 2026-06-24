// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableKibanaPvlNetworkRequestVSwitchIdsZone extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp194pz9iezj6h1n5****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
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
   * The endpoint name.
   * 
   * @example
   * es-cn-27a3mul6l000xxx-kibana-endpoint
   */
  endpointName?: string;
  /**
   * @remarks
   * The security groups.
   * 
   * This parameter is required.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The vSwitch and zone information.
   */
  vSwitchIdsZone?: EnableKibanaPvlNetworkRequestVSwitchIdsZone[];
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * vpc-bp19ip2ocyv24w0e2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * xxxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      endpointName: 'endpointName',
      securityGroups: 'securityGroups',
      vSwitchIdsZone: 'vSwitchIdsZone',
      vpcId: 'vpcId',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointName: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitchIdsZone: { 'type': 'array', 'itemType': EnableKibanaPvlNetworkRequestVSwitchIdsZone },
      vpcId: 'string',
      clientToken: 'string',
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

