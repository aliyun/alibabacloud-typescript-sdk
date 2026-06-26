// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicySetAttachedGatewaysResponseBodyAttachedGateways extends $dara.Model {
  attachedPolicySetName?: string;
  attachedTime?: string;
  enforcementMode?: string;
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

