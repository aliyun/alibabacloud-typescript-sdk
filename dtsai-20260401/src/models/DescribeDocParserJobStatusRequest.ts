// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocParserJobStatusRequest extends $dara.Model {
  agentName?: string;
  /**
   * @remarks
   * The ID of the document parsing task. You can obtain the ID by calling CreateDocParserJob.
   * 
   * This parameter is required.
   * 
   * @example
   * job_abc123
   */
  jobId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      jobId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

