// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGroupInspectReportListRequest extends $dara.Model {
  /**
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1655427625000
   */
  endTime?: number;
  /**
   * @example
   * null
   */
  groupId?: string;
  /**
   * @remarks
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
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      groupId: 'string',
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

