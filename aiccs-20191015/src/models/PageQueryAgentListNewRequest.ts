// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryAgentListNewRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * 12345
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * Intelligent Customer Service Assistant
   */
  agentName?: string;
  /**
   * @remarks
   * Specifies whether to return only candidate agents that are configurable for inbound calls.
   * 
   * @example
   * true
   */
  inboundConfigurableOnly?: boolean;
  /**
   * @remarks
   * Specifies whether the agent is available for outbound calls. A value of True indicates that the current deployment branch of the agent has a published version and is available for outbound calls.
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The page number. This parameter is deprecated. Use PageNo instead.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The service direction.
   * 
   * @example
   * Sample value
   */
  serviceDirection?: string;
  /**
   * @remarks
   * The source template ID.
   * 
   * @example
   * 23
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      inboundConfigurableOnly: 'InboundConfigurableOnly',
      isAvailable: 'IsAvailable',
      pageIndex: 'PageIndex',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      serviceDirection: 'ServiceDirection',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      inboundConfigurableOnly: 'boolean',
      isAvailable: 'boolean',
      pageIndex: 'number',
      pageNo: 'number',
      pageSize: 'number',
      serviceDirection: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

