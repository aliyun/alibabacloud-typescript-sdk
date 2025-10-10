// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAScriptsResponseBodyAScripts extends $dara.Model {
  /**
   * @remarks
   * The AScript rule ID.
   * 
   * @example
   * as-aznwocxofkakf7****
   */
  AScriptId?: string;
  /**
   * @remarks
   * The name of the AScript rule.
   * 
   * @example
   * test
   */
  AScriptName?: string;
  /**
   * @remarks
   * The status of the AScript rule. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Configuring**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  AScriptStatus?: string;
  /**
   * @remarks
   * Indicates whether the AScript rule is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-t0w1m9r6suiwmc****
   */
  listenerId?: string;
  /**
   * @remarks
   * The Application Load Balancer (ALB) instance ID.
   * 
   * @example
   * alb-vv9rg2ub31tyec****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The content of the AScript rule.
   * 
   * @example
   * {test}
   */
  scriptContent?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptId: 'AScriptId',
      AScriptName: 'AScriptName',
      AScriptStatus: 'AScriptStatus',
      enabled: 'Enabled',
      listenerId: 'ListenerId',
      loadBalancerId: 'LoadBalancerId',
      scriptContent: 'ScriptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptId: 'string',
      AScriptName: 'string',
      AScriptStatus: 'string',
      enabled: 'boolean',
      listenerId: 'string',
      loadBalancerId: 'string',
      scriptContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AScript rules.
   */
  AScripts?: ListAScriptsResponseBodyAScripts[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * This parameter is required.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CA81429-F160-593A-8AB5-A2A9617845B9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > This parameter is optional. By default, this parameter is not returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      AScripts: 'AScripts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScripts: { 'type': 'array', 'itemType': ListAScriptsResponseBodyAScripts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.AScripts)) {
      $dara.Model.validateArray(this.AScripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

