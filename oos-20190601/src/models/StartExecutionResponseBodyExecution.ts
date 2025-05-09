// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartExecutionResponseBodyExecutionCurrentTasks } from "./StartExecutionResponseBodyExecutionCurrentTasks";


export class StartExecutionResponseBodyExecution extends $dara.Model {
  /**
   * @remarks
   * The number of executions.
   * 
   * @example
   * 1
   */
  counters?: { [key: string]: any };
  /**
   * @remarks
   * The time when the execution was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about in-progress tasks.
   */
  currentTasks?: StartExecutionResponseBodyExecutionCurrentTasks[];
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * test execution.
   */
  description?: string;
  /**
   * @remarks
   * The time when the execution stopped.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDate?: string;
  /**
   * @remarks
   * The account ID of the user who started the execution of the template.
   * 
   * @example
   * root(13092080xx12344)
   */
  executedBy?: string;
  /**
   * @remarks
   * The GUID of the execution.
   * 
   * @example
   * exec-xxxyyy
   */
  executionId?: string;
  /**
   * @remarks
   * Indicates whether the execution is a parent execution.
   * 
   * @example
   * false
   */
  isParent?: boolean;
  /**
   * @remarks
   * The loop mode.
   * 
   * @example
   * Automatic
   */
  loopMode?: string;
  /**
   * @remarks
   * The execution mode.
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The output of the execution.
   * 
   * @example
   * { "InstanceId":"i-xxx" }
   */
  outputs?: string;
  /**
   * @remarks
   * The input parameters of the execution.
   * 
   * @example
   * { "Status":"Running" }
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The role that started the execution of the template.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security check mode.
   * 
   * @example
   * Skip
   */
  safetyCheck?: string;
  /**
   * @remarks
   * The time when the execution was started.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The status information of the execution.
   * 
   * @example
   * ""
   */
  statusMessage?: string;
  /**
   * @remarks
   * The tags of the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-1bd341007f
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the execution was last updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      description: 'Description',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      loopMode: 'LoopMode',
      mode: 'Mode',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': StartExecutionResponseBodyExecutionCurrentTasks },
      description: 'string',
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      loopMode: 'string',
      mode: 'string',
      outputs: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.counters) {
      $dara.Model.validateMap(this.counters);
    }
    if(Array.isArray(this.currentTasks)) {
      $dara.Model.validateArray(this.currentTasks);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

