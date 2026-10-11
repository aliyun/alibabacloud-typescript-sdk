// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyIpPoolsRequestTag extends $dara.Model {
  /**
   * @example
   * apitest_msgkey_20260529101130_key_1780020691018
   */
  key?: string;
  /**
   * @example
   * 1770104466
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

export class ListEgressProxyIpPoolsRequest extends $dara.Model {
  egressProxyGatewayIds?: string[];
  egressProxyIpPoolIds?: string[];
  egressProxyIpPoolNames?: string[];
  /**
   * @example
   * 12
   */
  maxResults?: number;
  /**
   * @example
   * a8cfe419acc68a35e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  skip?: number;
  /**
   * @example
   * Active
   */
  status?: string;
  tag?: ListEgressProxyIpPoolsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      egressProxyGatewayIds: 'EgressProxyGatewayIds',
      egressProxyIpPoolIds: 'EgressProxyIpPoolIds',
      egressProxyIpPoolNames: 'EgressProxyIpPoolNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyGatewayIds: { 'type': 'array', 'itemType': 'string' },
      egressProxyIpPoolIds: { 'type': 'array', 'itemType': 'string' },
      egressProxyIpPoolNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListEgressProxyIpPoolsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyGatewayIds)) {
      $dara.Model.validateArray(this.egressProxyGatewayIds);
    }
    if(Array.isArray(this.egressProxyIpPoolIds)) {
      $dara.Model.validateArray(this.egressProxyIpPoolIds);
    }
    if(Array.isArray(this.egressProxyIpPoolNames)) {
      $dara.Model.validateArray(this.egressProxyIpPoolNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

