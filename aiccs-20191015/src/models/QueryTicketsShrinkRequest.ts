// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTicketsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Ticket ID.
   * 
   * @example
   * 223468****
   */
  caseId?: number;
  /**
   * @remarks
   * Ticket status code.
   * 
   * @example
   * 2
   */
  caseStatus?: number;
  /**
   * @remarks
   * Ticket type code (assigned by the system).
   * 
   * @example
   * 1223
   */
  caseType?: number;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * 02acfefd3fa14049826ac1a89e1xxxxx
   */
  channelId?: string;
  /**
   * @remarks
   * Channel Type. Valid values:
   * - **0**: Not filled in
   * - **1**: Hotline
   * - **2**: Online
   * 
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @remarks
   * Current page. Default Value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Assignee ID.
   * 
   * @example
   * 123456
   */
  dealId?: number;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * 无
   */
  extraShrink?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * Log on to the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview) and view the instance ID in **Instance Management**.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Page size. Default Value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 29506
   */
  srType?: number;
  /**
   * @remarks
   * Job status.
   * 
   * @example
   * 3
   */
  taskStatus?: number;
  /**
   * @remarks
   * Touch ID.
   * 
   * @example
   * 15030609
   */
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      caseType: 'CaseType',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      currentPage: 'CurrentPage',
      dealId: 'DealId',
      extraShrink: 'Extra',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      srType: 'SrType',
      taskStatus: 'TaskStatus',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseId: 'number',
      caseStatus: 'number',
      caseType: 'number',
      channelId: 'string',
      channelType: 'number',
      currentPage: 'number',
      dealId: 'number',
      extraShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      srType: 'number',
      taskStatus: 'number',
      touchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

