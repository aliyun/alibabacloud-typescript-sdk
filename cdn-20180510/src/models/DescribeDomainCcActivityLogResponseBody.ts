// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainCcActivityLogResponseBodyActivityLog extends $dara.Model {
  /**
   * @remarks
   * The action that was triggered.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the rule based on which rate limiting was triggered.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The trigger of rate limiting.
   * 
   * @example
   * Ip
   */
  triggerObject?: string;
  /**
   * @remarks
   * The period of time during which rate limiting remains effective.
   * 
   * @example
   * 300
   */
  ttl?: number;
  /**
   * @remarks
   * The value of the trigger for rate limiting.
   * 
   * @example
   * 1.2.3.4
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      domainName: 'DomainName',
      ruleName: 'RuleName',
      timeStamp: 'TimeStamp',
      triggerObject: 'TriggerObject',
      ttl: 'Ttl',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      domainName: 'string',
      ruleName: 'string',
      timeStamp: 'string',
      triggerObject: 'string',
      ttl: 'number',
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

export class DescribeDomainCcActivityLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of rate limiting logs.
   */
  activityLog?: DescribeDomainCcActivityLogResponseBodyActivityLog[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      activityLog: 'ActivityLog',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityLog: { 'type': 'array', 'itemType': DescribeDomainCcActivityLogResponseBodyActivityLog },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.activityLog)) {
      $dara.Model.validateArray(this.activityLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

