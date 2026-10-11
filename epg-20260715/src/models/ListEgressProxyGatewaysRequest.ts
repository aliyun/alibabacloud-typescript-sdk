// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyGatewaysRequestTag extends $dara.Model {
  /**
   * @example
   * epg
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEgressProxyGatewaysRequest extends $dara.Model {
  egressProxyConfigurationIds?: string[];
  egressProxyGatewayIds?: string[];
  egressProxyGatewayNames?: string[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I4FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * rg-acfm4jcyx5e****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 0
   */
  skip?: number;
  /**
   * @example
   * Active
   */
  status?: string;
  tag?: ListEgressProxyGatewaysRequestTag[];
  vpcIds?: string[];
  static names(): { [key: string]: string } {
    return {
      egressProxyConfigurationIds: 'EgressProxyConfigurationIds',
      egressProxyGatewayIds: 'EgressProxyGatewayIds',
      egressProxyGatewayNames: 'EgressProxyGatewayNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      skip: 'Skip',
      status: 'Status',
      tag: 'Tag',
      vpcIds: 'VpcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyConfigurationIds: { 'type': 'array', 'itemType': 'string' },
      egressProxyGatewayIds: { 'type': 'array', 'itemType': 'string' },
      egressProxyGatewayNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      skip: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListEgressProxyGatewaysRequestTag },
      vpcIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyConfigurationIds)) {
      $dara.Model.validateArray(this.egressProxyConfigurationIds);
    }
    if(Array.isArray(this.egressProxyGatewayIds)) {
      $dara.Model.validateArray(this.egressProxyGatewayIds);
    }
    if(Array.isArray(this.egressProxyGatewayNames)) {
      $dara.Model.validateArray(this.egressProxyGatewayNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vpcIds)) {
      $dara.Model.validateArray(this.vpcIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

