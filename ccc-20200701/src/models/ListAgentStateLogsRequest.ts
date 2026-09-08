// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStateLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * End UNIX timestamp. The default value is the current time. The time difference between EndTime and StartTime must not exceed 7 days. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1620273600000
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Start UNIX timestamp. The default value is the start time of the current day. The earliest allowed value is 180 days before the current date. The format is a Unix timestamp in milliseconds.
   * 
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

