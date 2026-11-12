// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTemplateApplyResultsResponseBodyDataInstanceApplyResults extends $dara.Model {
  /**
   * @remarks
   * The simple application server instance ID.
   * 
   * @example
   * 33774babccc84003a2b1ad47e8001233
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of applying the firewall template to a specific instance. Valid values:
   * 
   * - Running: The firewall template is being applied.
   * - Failed: The firewall template failed to be applied.
   * - Success: The firewall template was applied.
   * - PartFailed: The firewall template was partially applied. Some rules failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateApplyResultsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the firewall template application task was executed, in the format of EEE MMM dd HH:mm:ss zzz yyyy.
   * 
   * @example
   * Tue May 14 11:53:07 CST 2024
   */
  createTime?: string;
  /**
   * @remarks
   * The total number of instances to which the firewall template failed to be applied.
   * 
   * @example
   * 0
   */
  failedCount?: string;
  /**
   * @remarks
   * The firewall template ID.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The results of applying the firewall template to instances.
   */
  instanceApplyResults?: DescribeFirewallTemplateApplyResultsResponseBodyDataInstanceApplyResults[];
  /**
   * @remarks
   * The status of applying the firewall template to all instances. Valid values:
   * 
   * - Running: The firewall template is being applied.
   * - Failed: The firewall template failed to be applied to all instances.
   * - Success: The firewall template was applied.
   * - PartFailed: The firewall template was partially applied. Some instances failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template application task.
   * 
   * @example
   * aft-ikgt0bynitvs3****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of instances to which the firewall template is applied.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      failedCount: 'FailedCount',
      firewallTemplateId: 'FirewallTemplateId',
      instanceApplyResults: 'InstanceApplyResults',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      failedCount: 'string',
      firewallTemplateId: 'string',
      instanceApplyResults: { 'type': 'array', 'itemType': DescribeFirewallTemplateApplyResultsResponseBodyDataInstanceApplyResults },
      status: 'string',
      taskId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceApplyResults)) {
      $dara.Model.validateArray(this.instanceApplyResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateApplyResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of firewall rules.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The returned results.
   */
  data?: DescribeFirewallTemplateApplyResultsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
      data: { 'type': 'array', 'itemType': DescribeFirewallTemplateApplyResultsResponseBodyData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

