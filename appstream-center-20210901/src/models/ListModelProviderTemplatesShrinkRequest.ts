// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderTemplatesShrinkRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * bailian
   */
  providerName?: string;
  providerTemplateIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      modelTemplateId: 'ModelTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerName: 'ProviderName',
      providerTemplateIdsShrink: 'ProviderTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      modelTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      providerName: 'string',
      providerTemplateIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

