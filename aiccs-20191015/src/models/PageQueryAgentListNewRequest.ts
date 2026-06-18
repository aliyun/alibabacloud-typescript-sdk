// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryAgentListNewRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
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
   * 智能客服助手
   */
  agentName?: string;
  /**
   * @remarks
   * Indicates whether the agent is available for outbound calls. The value is `true` if the agent\\"s current deployment branch has a published version.
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The page index. This parameter is deprecated. Use `PageNo` instead.
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
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      isAvailable: 'IsAvailable',
      pageIndex: 'PageIndex',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      isAvailable: 'boolean',
      pageIndex: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

