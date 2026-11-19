// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * ag.abcxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * txt_check_pro_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The application version number.
   * 
   * @example
   * 1785898163
   */
  appVersion?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. This parameter is required. If it is not provided, the service returns a 400 error.
   * 
   * @example
   * agent_text
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      appVersion: 'number',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

