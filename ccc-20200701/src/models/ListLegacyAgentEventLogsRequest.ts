// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyAgentEventLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by agent ID. This parameter is optional and defaults to empty. An empty value indicates no filtering.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * End time, in Unix timestamp format, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1658026440011
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
   * Page number, ranging from 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Start Time, in Unix timestamp format, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1657853640015
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

