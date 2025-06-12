// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStatesResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  agentName?: string;
  /**
   * @example
   * Warm-up
   */
  breakCode?: string;
  /**
   * @example
   * 8030****
   */
  dn?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @example
   * Ready
   */
  state?: string;
  /**
   * @example
   * 10
   */
  stateDuration?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      breakCode: 'BreakCode',
      dn: 'Dn',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outboundScenario: 'OutboundScenario',
      state: 'State',
      stateDuration: 'StateDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      breakCode: 'string',
      dn: 'string',
      instanceId: 'string',
      loginName: 'string',
      outboundScenario: 'boolean',
      state: 'string',
      stateDuration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

