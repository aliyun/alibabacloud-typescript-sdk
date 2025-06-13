// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerHealthStatusResponseBodyListenerHealthStatus } from "./GetListenerHealthStatusResponseBodyListenerHealthStatus";
import { GetListenerHealthStatusResponseBodyRuleHealthStatus } from "./GetListenerHealthStatusResponseBodyRuleHealthStatus";


export class GetListenerHealthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The health check status of the server groups associated with the listener.
   */
  listenerHealthStatus?: GetListenerHealthStatusResponseBodyListenerHealthStatus[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The health check status of the forwarding rules.
   */
  ruleHealthStatus?: GetListenerHealthStatusResponseBodyRuleHealthStatus[];
  static names(): { [key: string]: string } {
    return {
      listenerHealthStatus: 'ListenerHealthStatus',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      ruleHealthStatus: 'RuleHealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatus },
      nextToken: 'string',
      requestId: 'string',
      ruleHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatus },
    };
  }

  validate() {
    if(Array.isArray(this.listenerHealthStatus)) {
      $dara.Model.validateArray(this.listenerHealthStatus);
    }
    if(Array.isArray(this.ruleHealthStatus)) {
      $dara.Model.validateArray(this.ruleHealthStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

