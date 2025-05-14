// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTicketsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 223468****
   */
  caseId?: number;
  /**
   * @example
   * 2
   */
  caseStatus?: number;
  /**
   * @example
   * 1223
   */
  caseType?: number;
  /**
   * @example
   * 02acfefd3fa14049826ac1a89e1xxxxx
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 123456
   */
  dealId?: number;
  extraShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 29506
   */
  srType?: number;
  /**
   * @example
   * 3
   */
  taskStatus?: number;
  /**
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

