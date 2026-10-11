// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyGatewaysResponseBodyEgressProxyGatewaysTags extends $dara.Model {
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

export class ListEgressProxyGatewaysResponseBodyEgressProxyGateways extends $dara.Model {
  /**
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  defaultEgressProxyIpPoolId?: string;
  /**
   * @example
   * created by epg
   */
  description?: string;
  /**
   * @example
   * epc-uf609a6a8fdf9f4****
   */
  egressProxyConfigurationId?: string;
  /**
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyGatewayName?: string;
  /**
   * @example
   * rg-acfmypqurk****
   */
  resourceGroupId?: string;
  /**
   * @example
   * Provisioning
   */
  status?: string;
  tags?: ListEgressProxyGatewaysResponseBodyEgressProxyGatewaysTags[];
  /**
   * @example
   * vpc-m5e03az9xwn6siqft****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultEgressProxyIpPoolId: 'DefaultEgressProxyIpPoolId',
      description: 'Description',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyGatewayId: 'EgressProxyGatewayId',
      egressProxyGatewayName: 'EgressProxyGatewayName',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultEgressProxyIpPoolId: 'string',
      description: 'string',
      egressProxyConfigurationId: 'string',
      egressProxyGatewayId: 'string',
      egressProxyGatewayName: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListEgressProxyGatewaysResponseBodyEgressProxyGatewaysTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEgressProxyGatewaysResponseBody extends $dara.Model {
  egressProxyGateways?: ListEgressProxyGatewaysResponseBodyEgressProxyGateways[];
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
   * 01A05AB6-3B8A-561C-8CC6-D061498BDEBC
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyGateways: 'EgressProxyGateways',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyGateways: { 'type': 'array', 'itemType': ListEgressProxyGatewaysResponseBodyEgressProxyGateways },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyGateways)) {
      $dara.Model.validateArray(this.egressProxyGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

