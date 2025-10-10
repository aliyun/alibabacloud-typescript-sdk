// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * product
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

export class ListRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The direction to which the forwarding rule is applied. Valid values:
   * 
   * *   **Request** (default): The forwarding rule is applied to the client requests received by ALB.
   * *   **Response**: The forwarding rule is applied to the responses returned by backend servers.
   * 
   * > You cannot set this parameter to Response if you use basic ALB instances.
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * The listener IDs.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The Application Load Balancer (ALB) instance IDs.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Valid values: **1 to 100**.
   * 
   * Default value: **20**. If you do not specify this parameter, the default value is used.
   * 
   * > This parameter is optional.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The starting point of the current query. If you do not specify this parameter, the query starts from the beginning.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The forwarding rules.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The tag.
   */
  tag?: ListRulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listenerIds: 'ListenerIds',
      loadBalancerIds: 'LoadBalancerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ruleIds: 'RuleIds',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListRulesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.listenerIds)) {
      $dara.Model.validateArray(this.listenerIds);
    }
    if(Array.isArray(this.loadBalancerIds)) {
      $dara.Model.validateArray(this.loadBalancerIds);
    }
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
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

