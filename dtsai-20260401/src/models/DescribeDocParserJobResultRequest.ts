// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocParserJobResultRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name.
   */
  agentName?: string;
  /**
   * @remarks
   * The document parsing task ID, obtained by calling CreateDocParserJob.
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
  /**
   * @remarks
   * The result type.
   */
  resultType?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      jobId: 'JobId',
      regionId: 'RegionId',
      resultType: 'ResultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      jobId: 'string',
      regionId: 'string',
      resultType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

