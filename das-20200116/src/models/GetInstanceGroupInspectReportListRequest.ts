// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportListRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. By default, the default Agent is used. You can also specify the Agent that was generated after DAS Agent was activated or that was manually created.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The end timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1655427625000
   */
  endTime?: number;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * null
   */
  groupId?: string;
  reportType?: string;
  /**
   * @remarks
   * The start timestamp.
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

