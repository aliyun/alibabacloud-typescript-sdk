// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAndPublishAgentSelectiveRequestApplicationConfigHistoryConfig extends $dara.Model {
  enableAdbRecord?: boolean;
  enableRecord?: boolean;
  instanceId?: string;
  region?: string;
  storeCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableAdbRecord: 'enableAdbRecord',
      enableRecord: 'enableRecord',
      instanceId: 'instanceId',
      region: 'region',
      storeCode: 'storeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAdbRecord: 'boolean',
      enableRecord: 'boolean',
      instanceId: 'string',
      region: 'string',
      storeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestApplicationConfigLongTermMemory extends $dara.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters extends $dara.Model {
  dialogRound?: number;
  enableThinking?: boolean;
  maxTokens?: number;
  temperature?: number;
  static names(): { [key: string]: string } {
    return {
      dialogRound: 'dialogRound',
      enableThinking: 'enable_thinking',
      maxTokens: 'maxTokens',
      temperature: 'temperature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogRound: 'number',
      enableThinking: 'boolean',
      maxTokens: 'number',
      temperature: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig extends $dara.Model {
  answerScope?: string;
  enableCitation?: boolean;
  enableSearch?: boolean;
  enableWebSearch?: boolean;
  fixedReplyDetail?: string;
  knowledgeBaseCodeList?: string[];
  promptStrategy?: string;
  ragRejectType?: string;
  rejectFilterPrompt?: string;
  rejectFilterType?: string;
  retrieveMaxLength?: number;
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      answerScope: 'answerScope',
      enableCitation: 'enableCitation',
      enableSearch: 'enableSearch',
      enableWebSearch: 'enableWebSearch',
      fixedReplyDetail: 'fixedReplyDetail',
      knowledgeBaseCodeList: 'knowledgeBaseCodeList',
      promptStrategy: 'promptStrategy',
      ragRejectType: 'ragRejectType',
      rejectFilterPrompt: 'rejectFilterPrompt',
      rejectFilterType: 'rejectFilterType',
      retrieveMaxLength: 'retrieveMaxLength',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerScope: 'string',
      enableCitation: 'boolean',
      enableSearch: 'boolean',
      enableWebSearch: 'boolean',
      fixedReplyDetail: 'string',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
      promptStrategy: 'string',
      ragRejectType: 'string',
      rejectFilterPrompt: 'string',
      rejectFilterType: 'string',
      retrieveMaxLength: 'number',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseCodeList)) {
      $dara.Model.validateArray(this.knowledgeBaseCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestApplicationConfigSecurity extends $dara.Model {
  processingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      processingStrategy: 'processingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processingStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestApplicationConfigTools extends $dara.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestApplicationConfigWorkFlows extends $dara.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestApplicationConfig extends $dara.Model {
  historyConfig?: UpdateAndPublishAgentSelectiveRequestApplicationConfigHistoryConfig;
  longTermMemory?: UpdateAndPublishAgentSelectiveRequestApplicationConfigLongTermMemory;
  parameters?: UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters;
  ragConfig?: UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig;
  security?: UpdateAndPublishAgentSelectiveRequestApplicationConfigSecurity;
  tools?: UpdateAndPublishAgentSelectiveRequestApplicationConfigTools[];
  workFlows?: UpdateAndPublishAgentSelectiveRequestApplicationConfigWorkFlows[];
  static names(): { [key: string]: string } {
    return {
      historyConfig: 'historyConfig',
      longTermMemory: 'longTermMemory',
      parameters: 'parameters',
      ragConfig: 'ragConfig',
      security: 'security',
      tools: 'tools',
      workFlows: 'workFlows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyConfig: UpdateAndPublishAgentSelectiveRequestApplicationConfigHistoryConfig,
      longTermMemory: UpdateAndPublishAgentSelectiveRequestApplicationConfigLongTermMemory,
      parameters: UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters,
      ragConfig: UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig,
      security: UpdateAndPublishAgentSelectiveRequestApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': UpdateAndPublishAgentSelectiveRequestApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': UpdateAndPublishAgentSelectiveRequestApplicationConfigWorkFlows },
    };
  }

  validate() {
    if(this.historyConfig && typeof (this.historyConfig as any).validate === 'function') {
      (this.historyConfig as any).validate();
    }
    if(this.longTermMemory && typeof (this.longTermMemory as any).validate === 'function') {
      (this.longTermMemory as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.ragConfig && typeof (this.ragConfig as any).validate === 'function') {
      (this.ragConfig as any).validate();
    }
    if(this.security && typeof (this.security as any).validate === 'function') {
      (this.security as any).validate();
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    if(Array.isArray(this.workFlows)) {
      $dara.Model.validateArray(this.workFlows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequestSampleLibrary extends $dara.Model {
  enableSample?: boolean;
  sampleLibraryIdList?: string[];
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableSample: 'enableSample',
      sampleLibraryIdList: 'sampleLibraryIdList',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSample: 'boolean',
      sampleLibraryIdList: { 'type': 'array', 'itemType': 'string' },
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sampleLibraryIdList)) {
      $dara.Model.validateArray(this.sampleLibraryIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentSelectiveRequest extends $dara.Model {
  applicationConfig?: UpdateAndPublishAgentSelectiveRequestApplicationConfig;
  instructions?: string;
  modelId?: string;
  name?: string;
  sampleLibrary?: UpdateAndPublishAgentSelectiveRequestSampleLibrary;
  static names(): { [key: string]: string } {
    return {
      applicationConfig: 'applicationConfig',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
      sampleLibrary: 'sampleLibrary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfig: UpdateAndPublishAgentSelectiveRequestApplicationConfig,
      instructions: 'string',
      modelId: 'string',
      name: 'string',
      sampleLibrary: UpdateAndPublishAgentSelectiveRequestSampleLibrary,
    };
  }

  validate() {
    if(this.applicationConfig && typeof (this.applicationConfig as any).validate === 'function') {
      (this.applicationConfig as any).validate();
    }
    if(this.sampleLibrary && typeof (this.sampleLibrary as any).validate === 'function') {
      (this.sampleLibrary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

