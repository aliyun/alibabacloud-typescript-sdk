// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicySetAttachedGatewaysRequest extends $dara.Model {
  gatewayType?: string;
  maxResults?: number;
  nextToken?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'GatewayType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policySetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

