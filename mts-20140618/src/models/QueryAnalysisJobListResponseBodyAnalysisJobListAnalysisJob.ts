// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMnsmessageResult";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList";


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob extends $dara.Model {
  /**
   * @remarks
   * The job configurations.
   */
  analysisConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig;
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2014-01-10T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the template analysis job.
   * 
   * @example
   * 57f6aa3f84824309bcba67231b406****
   */
  id?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  inputFile?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job failed.
   * 
   * @example
   * The resource operated \\"PipelineId\\" cannot be found
   */
  message?: string;
  /**
   * @remarks
   * The transcoding progress.
   * 
   * @example
   * 86
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * bb558c1cc25b45309aab5be44d19****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job in the ApsaraVideo Media Processing (MPS) queue to which the job was submitted.
   * 
   * *   Valid values: **1 to 10**. The value 10 indicates the highest priority.
   * *   Default value: **10**.
   * 
   * @example
   * 8
   */
  priority?: string;
  /**
   * @remarks
   * The job status.
   * 
   * *   **Submitted**: The job was submitted.
   * *   **Analyzing**: The job is in progress.
   * *   **Success**: The job was successful.
   * *   **Fail**: The job failed.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The matched preset templates.
   */
  templateList?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      analysisConfig: 'AnalysisConfig',
      code: 'Code',
      creationTime: 'CreationTime',
      id: 'Id',
      inputFile: 'InputFile',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      state: 'State',
      templateList: 'TemplateList',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig,
      code: 'string',
      creationTime: 'string',
      id: 'string',
      inputFile: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobInputFile,
      MNSMessageResult: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobMNSMessageResult,
      message: 'string',
      percent: 'number',
      pipelineId: 'string',
      priority: 'string',
      state: 'string',
      templateList: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateList,
      userData: 'string',
    };
  }

  validate() {
    if(this.analysisConfig && typeof (this.analysisConfig as any).validate === 'function') {
      (this.analysisConfig as any).validate();
    }
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    if(this.templateList && typeof (this.templateList as any).validate === 'function') {
      (this.templateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

