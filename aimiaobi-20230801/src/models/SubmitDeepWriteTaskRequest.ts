// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDeepWriteTaskRequestAgentOrchestrationDataAnalystAgent extends $dara.Model {
  enableSearch?: boolean;
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
  enableCitation?: boolean;
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
  dataAnalystAgent?: SubmitDeepWriteTaskRequestAgentOrchestrationDataAnalystAgent;
  dataCollectorAgent?: SubmitDeepWriteTaskRequestAgentOrchestrationDataCollectorAgent;
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
   * @example
   * 附件的备注
   */
  fileDescription?: string;
  /**
   * @example
   * oss://default/aimiaobi-poc/aimiaobi/deep-write-upload/1_1/xxx.txt
   */
  fileKey?: string;
  /**
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
  agentOrchestration?: SubmitDeepWriteTaskRequestAgentOrchestration;
  files?: SubmitDeepWriteTaskRequestFiles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  input?: string;
  instructions?: string;
  /**
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

