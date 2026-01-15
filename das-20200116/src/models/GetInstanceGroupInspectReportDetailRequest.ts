// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportDetailRequest extends $dara.Model {
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13f52040-5a6e-42c3-bb84-051f5d6d****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

