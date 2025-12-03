// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineResponseBodyPipelinePipelineConfigSourcesData extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * 1
   */
  cloneDepth?: number;
  /**
   * @remarks
   * Credential Id
   * 
   * @example
   * 222
   */
  credentialId?: number;
  /**
   * @remarks
   * Credential Label
   * 
   * @example
   * 企业公钥
   */
  credentialLabel?: string;
  /**
   * @remarks
   * Credential Type
   * 
   * @example
   * region-ssh
   */
  credentialType?: string;
  events?: string[];
  /**
   * @example
   * false
   */
  isBranchMode?: boolean;
  /**
   * @example
   * true
   */
  isCloneDepth?: boolean;
  /**
   * @example
   * false
   */
  isSubmodule?: boolean;
  /**
   * @example
   * true
   */
  isTrigger?: boolean;
  /**
   * @example
   * cdup/ss
   */
  label?: string;
  /**
   * @example
   * asasasas
   */
  namespace?: string;
  /**
   * @example
   * https://codeup.aliyun.com/test.git
   */
  repo?: string;
  /**
   * @example
   * 12
   */
  serviceConnectionId?: number;
  /**
   * @example
   * .*
   */
  triggerFilter?: string;
  /**
   * @example
   * https://flow.aliyun/webhook/asassasa
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      cloneDepth: 'cloneDepth',
      credentialId: 'credentialId',
      credentialLabel: 'credentialLabel',
      credentialType: 'credentialType',
      events: 'events',
      isBranchMode: 'isBranchMode',
      isCloneDepth: 'isCloneDepth',
      isSubmodule: 'isSubmodule',
      isTrigger: 'isTrigger',
      label: 'label',
      namespace: 'namespace',
      repo: 'repo',
      serviceConnectionId: 'serviceConnectionId',
      triggerFilter: 'triggerFilter',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      cloneDepth: 'number',
      credentialId: 'number',
      credentialLabel: 'string',
      credentialType: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      isBranchMode: 'boolean',
      isCloneDepth: 'boolean',
      isSubmodule: 'boolean',
      isTrigger: 'boolean',
      label: 'string',
      namespace: 'string',
      repo: 'string',
      serviceConnectionId: 'number',
      triggerFilter: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelinePipelineConfigSources extends $dara.Model {
  data?: GetPipelineResponseBodyPipelinePipelineConfigSourcesData;
  /**
   * @example
   * xxsxsxs
   */
  sign?: string;
  /**
   * @example
   * Codeup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      sign: 'sign',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPipelineResponseBodyPipelinePipelineConfigSourcesData,
      sign: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelinePipelineConfig extends $dara.Model {
  /**
   * @example
   * schema: tb pipeline:   - name: 执行命令     stages:       - driven: AUTO         jobs:           - displayName: 执行命令             task: execution-component-production@10             identifier: \"10_1626147407245\"             templateType: task             templateSign: \"\"             templateBatchUpdate: \"N\"             extraInfo: \"\"             params:               version1: pre-jdk1.62               steps:                 - name: 执行命令                   stepType: exec-shell                   stepIdentifier: \"10_1626147407245__11_1626147407249\"                   command: |                     # input your command here                     echo hello,world!                   ARTIFACTS: \"\"                   JSONEncoding: true                   freeInTaskGroupModeFields:                     - ARTIFACTS                   source: 132504-sss_ddd_3mvJ               ENGINE_PIPELINE_NAME: \"${INPUTS.ENGINE_PIPELINE_NAME}\"               ENGINE_PIPELINE_ID: \"${INPUTS.ENGINE_PIPELINE_ID}\"               ENGINE_PIPELINE_INST_ID: \"${INPUTS.ENGINE_PIPELINE_INST_ID}\"               ENGINE_PIPELINE_INST_NUMBER: \"${INPUTS.ENGINE_PIPELINE_INST_NUMBER}\"               buildNodeGroup: K8S-4             plugins: []             output: []             freeInTaskGroupModeFields: []
   */
  flow?: string;
  /**
   * @example
   * {}
   */
  settings?: string;
  sources?: GetPipelineResponseBodyPipelinePipelineConfigSources[];
  static names(): { [key: string]: string } {
    return {
      flow: 'flow',
      settings: 'settings',
      sources: 'sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      settings: 'string',
      sources: { 'type': 'array', 'itemType': GetPipelineResponseBodyPipelinePipelineConfigSources },
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBodyPipelineTagList extends $dara.Model {
  /**
   * @example
   * 22
   */
  id?: number;
  /**
   * @example
   * 标签1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

export class GetPipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 112222122
   */
  creatorAccountId?: string;
  /**
   * @example
   * 0
   */
  envId?: number;
  /**
   * @example
   * 日常环境
   */
  envName?: string;
  /**
   * @example
   * 1111
   */
  groupId?: number;
  /**
   * @example
   * 112222122
   */
  modifierAccountId?: string;
  /**
   * @example
   * 流水线
   */
  name?: string;
  pipelineConfig?: GetPipelineResponseBodyPipelinePipelineConfig;
  tagList?: GetPipelineResponseBodyPipelineTagList[];
  /**
   * @example
   * 1586863220000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      envId: 'envId',
      envName: 'envName',
      groupId: 'groupId',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      pipelineConfig: 'pipelineConfig',
      tagList: 'tagList',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorAccountId: 'string',
      envId: 'number',
      envName: 'string',
      groupId: 'number',
      modifierAccountId: 'string',
      name: 'string',
      pipelineConfig: GetPipelineResponseBodyPipelinePipelineConfig,
      tagList: { 'type': 'array', 'itemType': GetPipelineResponseBodyPipelineTagList },
      updateTime: 'number',
    };
  }

  validate() {
    if(this.pipelineConfig && typeof (this.pipelineConfig as any).validate === 'function') {
      (this.pipelineConfig as any).validate();
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  pipeline?: GetPipelineResponseBodyPipeline;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      pipeline: 'pipeline',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      pipeline: GetPipelineResponseBodyPipeline,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

