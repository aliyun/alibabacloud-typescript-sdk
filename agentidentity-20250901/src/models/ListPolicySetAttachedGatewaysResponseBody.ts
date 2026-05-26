// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicySetAttachedGatewaysResponseBodyAttachedGateways extends $dara.Model {
  /**
   * @example
   * default-policy-set
   */
  attachedPolicySetName?: string;
  /**
   * @example
   * 2026-05-08T06:19:17Z
   */
  attachedTime?: string;
  /**
   * @example
   * ENFORCE
   */
  enforcementMode?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:gateway/my-gateway
   */
  gatewayArn?: string;
  gatewayType?: string;
  static names(): { [key: string]: string } {
    return {
      attachedPolicySetName: 'AttachedPolicySetName',
      attachedTime: 'AttachedTime',
      enforcementMode: 'EnforcementMode',
      gatewayArn: 'GatewayArn',
      gatewayType: 'GatewayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedPolicySetName: 'string',
      attachedTime: 'string',
      enforcementMode: 'string',
      gatewayArn: 'string',
      gatewayType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicySetAttachedGatewaysResponseBody extends $dara.Model {
  attachedGateways?: ListPolicySetAttachedGatewaysResponseBodyAttachedGateways[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachedGateways: 'AttachedGateways',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedGateways: { 'type': 'array', 'itemType': ListPolicySetAttachedGatewaysResponseBodyAttachedGateways },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attachedGateways)) {
      $dara.Model.validateArray(this.attachedGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

