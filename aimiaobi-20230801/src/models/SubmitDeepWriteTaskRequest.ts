// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDeepWriteTaskRequestAgentOrchestrationDataAnalystAgent extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable retrieval.
   * 
   * @example
   * true
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * DataAnalystAgent
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      enableSearch: 'EnableSearch',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSearch: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeepWriteTaskRequestAgentOrchestrationDataCollectorAgent extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * DataCollectorAgent
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeepWriteTaskRequestAgentOrchestrationReporterAgent extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable citations.
   */
  enableCitation?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * ReporterAgent
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      enableCitation: 'EnableCitation',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCitation: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeepWriteTaskRequestAgentOrchestration extends $dara.Model {
  /**
   * @remarks
   * The data analysis agent.
   */
  dataAnalystAgent?: SubmitDeepWriteTaskRequestAgentOrchestrationDataAnalystAgent;
  /**
   * @remarks
   * The data collection agent.
   */
  dataCollectorAgent?: SubmitDeepWriteTaskRequestAgentOrchestrationDataCollectorAgent;
  /**
   * @remarks
   * The reporter agent.
   */
  reporterAgent?: SubmitDeepWriteTaskRequestAgentOrchestrationReporterAgent;
  static names(): { [key: string]: string } {
    return {
      dataAnalystAgent: 'DataAnalystAgent',
      dataCollectorAgent: 'DataCollectorAgent',
      reporterAgent: 'ReporterAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAnalystAgent: SubmitDeepWriteTaskRequestAgentOrchestrationDataAnalystAgent,
      dataCollectorAgent: SubmitDeepWriteTaskRequestAgentOrchestrationDataCollectorAgent,
      reporterAgent: SubmitDeepWriteTaskRequestAgentOrchestrationReporterAgent,
    };
  }

  validate() {
    if(this.dataAnalystAgent && typeof (this.dataAnalystAgent as any).validate === 'function') {
      (this.dataAnalystAgent as any).validate();
    }
    if(this.dataCollectorAgent && typeof (this.dataCollectorAgent as any).validate === 'function') {
      (this.dataCollectorAgent as any).validate();
    }
    if(this.reporterAgent && typeof (this.reporterAgent as any).validate === 'function') {
      (this.reporterAgent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeepWriteTaskRequestFiles extends $dara.Model {
  /**
   * @remarks
   * A description of the attachment.
   * 
   * @example
   * 附件的说明
   */
  fileDescription?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) address of the attachment.
   * 
   * @example
   * oss://default/aimiaobi-poc/aimiaobi/deep-write-upload/1_1/xxx.txt
   */
  fileKey?: string;
  /**
   * @remarks
   * The name of the attachment.
   * 
   * @example
   * 附件的名称
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileDescription: 'FileDescription',
      fileKey: 'FileKey',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDescription: 'string',
      fileKey: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDeepWriteTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The agent orchestration options.
   */
  agentOrchestration?: SubmitDeepWriteTaskRequestAgentOrchestration;
  /**
   * @remarks
   * A list of attachments.
   */
  files?: SubmitDeepWriteTaskRequestFiles[];
  /**
   * @remarks
   * The user\\"s question.
   * 
   * This parameter is required.
   * 
   * @example
   * 北京2025年新能源汽车发展趋势
   * 
   * **if can be null:**
   * false
   */
  input?: string;
  /**
   * @remarks
   * The instructions.
   * 
   * @example
   * 请根据北京新能源汽车在汽车品牌、新车发布、能源等方面进行分析
   */
  instructions?: string;
  /**
   * @remarks
   * [The workspace ID.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * llm-1setzb9xb8m11vrc
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentOrchestration: 'AgentOrchestration',
      files: 'Files',
      input: 'Input',
      instructions: 'Instructions',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentOrchestration: SubmitDeepWriteTaskRequestAgentOrchestration,
      files: { 'type': 'array', 'itemType': SubmitDeepWriteTaskRequestFiles },
      input: 'string',
      instructions: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.agentOrchestration && typeof (this.agentOrchestration as any).validate === 'function') {
      (this.agentOrchestration as any).validate();
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

