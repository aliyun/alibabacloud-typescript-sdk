// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportListRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. The default agent is used by default. Alternatively, you can specify an agent that was generated after DAS Agent was activated or manually created.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The end time of the query, which is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1655427625000
   */
  endTime?: number;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * null
   */
  groupId?: string;
  /**
   * @remarks
   * The type of the inspection report.
   * 
   * @example
   * daily
   */
  reportType?: string;
  /**
   * @remarks
   * The start time of the query, which is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      reportType: 'ReportType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      groupId: 'string',
      reportType: 'string',
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

