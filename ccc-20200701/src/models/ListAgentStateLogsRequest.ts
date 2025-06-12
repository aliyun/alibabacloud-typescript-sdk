// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStateLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @example
   * 1620273600000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1620230400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

