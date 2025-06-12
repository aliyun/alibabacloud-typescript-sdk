// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentReportRequest extends $dara.Model {
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
   * 1532707199000
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
   * Hourly
   */
  interval?: string;
  mediaType?: string;
  /**
   * @example
   * 1532448000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      mediaType: 'MediaType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
      mediaType: 'string',
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

