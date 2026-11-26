// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * The direction of the forwarding rule. Valid values:
   * 
   * - **Request** (default): request type. Performs condition matching and corresponding processing on packets sent from the client to ALB.
   * 
   * - **Response**: response type. Performs condition matching and corresponding processing on packets returned from backend server groups to ALB.
   * 
   * >ALB Basic Edition instances do not support the Response type.
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * The list of listener IDs. You can query up to 20 listeners at a time.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The list of load balancing instance IDs. You can query up to 20 instances at a time.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum number of data records to read in this request.
   * 
   * Valid values: **1 to 100**.
   * 
   * Default value: **20**, which indicates that no value is specified.
   * 
   * > This parameter is optional.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - You do not need to specify this parameter for the first request or if no next query exists.
   * 
   * - If a next query exists, set the value to the **NextToken** value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of forwarding rules. You can query up to 20 forwarding rules at a time.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The tags.
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

