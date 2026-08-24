// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent that the user purchased.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the automated operations report.
   * 
   * This parameter is required.
   * 
   * @example
   * 13f52040-5a6e-42c3-bb84-051f5d6d****
   */
  reportId?: string;
  /**
   * @remarks
   * The type of the report.
   * 
   * @example
   * daily
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      reportId: 'ReportId',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      reportId: 'string',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

