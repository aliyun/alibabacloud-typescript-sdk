// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyPolicySummary } from "./NotifyPolicySummary";


export class ListNotifyPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. This parameter is empty if no more data is available.
   * 
   * @example
   * eyJjdXJzb3IiOjEwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of notify policies. Each entry is of the NotifyPolicySummary type (lightweight view).
   * 
   * @example
   * [{"uuid":"np-12345678-1234-1234-1234-123456789012","name":"prod-alert","description":"生产环境告警策略","enabled":true,"version":1,"workspace":"default-cms-xxxx-cn-hangzhou","userId":"107640","createTime":"1711792800000","updateTime":"1711792800000"}]
   */
  notifyPolicyList?: NotifyPolicySummary[];
  /**
   * @remarks
   * The request ID. You can use this ID for troubleshooting and ticket submission.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries. The actual total is returned on the first page. A fixed value of -1 is returned on subsequent pages.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      notifyPolicyList: 'notifyPolicyList',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      notifyPolicyList: { 'type': 'array', 'itemType': NotifyPolicySummary },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notifyPolicyList)) {
      $dara.Model.validateArray(this.notifyPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

