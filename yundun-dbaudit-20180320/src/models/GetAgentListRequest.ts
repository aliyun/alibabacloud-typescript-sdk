// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentListRequest extends $dara.Model {
  /**
   * @example
   * 192.168.XX.XX
   */
  agentIp?: string;
  /**
   * @example
   * Windows
   */
  agentOs?: string;
  /**
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentIp: 'AgentIp',
      agentOs: 'AgentOs',
      agentStatus: 'AgentStatus',
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIp: 'string',
      agentOs: 'string',
      agentStatus: 'number',
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

