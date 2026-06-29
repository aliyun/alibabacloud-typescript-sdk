// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskAssginConfig } from "./TaskAssginConfig";
import { DatasetProxyConfig } from "./DatasetProxyConfig";
import { TaskTemplateConfig } from "./TaskTemplateConfig";
import { CreateTaskDetailVoteInfo } from "./CreateTaskDetailVoteInfo";
import { SimpleUser } from "./SimpleUser";


/**
 */
export class CreateTaskDetailAdmins extends $dara.Model {
  /**
   * @remarks
   * List of administrators.
   */
  users?: SimpleUser[];
  static names(): { [key: string]: string } {
    return {
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': SimpleUser },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskDetailTaskWorkflow extends $dara.Model {
  /**
   * @remarks
   * Node name. Valid values:
   * - MARK: Annotate.
   * - CHECK: Check.
   * - SAMPLING: Validate.
   * 
   * @example
   * MARK
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskDetail extends $dara.Model {
  /**
   * @remarks
   * Administrators; defaults to the Creator.
   */
  admins?: CreateTaskDetailAdmins;
  /**
   * @remarks
   * Indicates whether appending new data is supported. Valid values:
   * - true: Supported
   * - false: Not supported
   * 
   * @example
   * true
   */
  allowAppendData?: boolean;
  /**
   * @remarks
   * Job assignment mechanism.
   * 
   * This parameter is required.
   */
  assignConfig?: TaskAssginConfig;
  /**
   * @remarks
   * List of dataset configurations.
   * 
   * This parameter is required.
   */
  datasetProxyRelations?: DatasetProxyConfig[];
  /**
   * @remarks
   * Additional configuration. JSON format.
   * 
   * @example
   * {  "TaskCaptionType": "DOC_LINK"}
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * List of job labels.
   */
  tags?: string[];
  /**
   * @remarks
   * Job name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试任务202208101424
   */
  taskName?: string;
  /**
   * @remarks
   * Template Configuration.
   */
  taskTemplateConfig?: TaskTemplateConfig;
  /**
   * @remarks
   * List of pipelines.
   * 
   * This parameter is required.
   */
  taskWorkflow?: CreateTaskDetailTaskWorkflow[];
  /**
   * @remarks
   * Template ID. For more information, see [ListTemplates](https://help.aliyun.com/document_detail/454654.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 152936***8342353920
   */
  templateId?: string;
  /**
   * @remarks
   * Unique identifier (UUID), controlled by the business side.
   * 
   * This parameter is required.
   * 
   * @example
   * 16623***80757311
   */
  UUID?: string;
  /**
   * @remarks
   * Vote configuration
   */
  voteConfigs?: { [key: string]: CreateTaskDetailVoteInfo };
  static names(): { [key: string]: string } {
    return {
      admins: 'Admins',
      allowAppendData: 'AllowAppendData',
      assignConfig: 'AssignConfig',
      datasetProxyRelations: 'DatasetProxyRelations',
      exif: 'Exif',
      tags: 'Tags',
      taskName: 'TaskName',
      taskTemplateConfig: 'TaskTemplateConfig',
      taskWorkflow: 'TaskWorkflow',
      templateId: 'TemplateId',
      UUID: 'UUID',
      voteConfigs: 'VoteConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admins: CreateTaskDetailAdmins,
      allowAppendData: 'boolean',
      assignConfig: TaskAssginConfig,
      datasetProxyRelations: { 'type': 'array', 'itemType': DatasetProxyConfig },
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'array', 'itemType': 'string' },
      taskName: 'string',
      taskTemplateConfig: TaskTemplateConfig,
      taskWorkflow: { 'type': 'array', 'itemType': CreateTaskDetailTaskWorkflow },
      templateId: 'string',
      UUID: 'string',
      voteConfigs: { 'type': 'map', 'keyType': 'string', 'valueType': CreateTaskDetailVoteInfo },
    };
  }

  validate() {
    if(this.admins && typeof (this.admins as any).validate === 'function') {
      (this.admins as any).validate();
    }
    if(this.assignConfig && typeof (this.assignConfig as any).validate === 'function') {
      (this.assignConfig as any).validate();
    }
    if(Array.isArray(this.datasetProxyRelations)) {
      $dara.Model.validateArray(this.datasetProxyRelations);
    }
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.taskTemplateConfig && typeof (this.taskTemplateConfig as any).validate === 'function') {
      (this.taskTemplateConfig as any).validate();
    }
    if(Array.isArray(this.taskWorkflow)) {
      $dara.Model.validateArray(this.taskWorkflow);
    }
    if(this.voteConfigs) {
      $dara.Model.validateMap(this.voteConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

