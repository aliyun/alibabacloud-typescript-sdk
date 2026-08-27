// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeSetResponseBodyLogTerraformLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the Terraform command that was executed. Valid values:
   * 
   * - apply
   * 
   * - plan
   * 
   * - destroy
   * 
   * - version
   * 
   * For more information about the commands, see [Command](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content that the command wrote to the specified stream.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * - `stdout`: standard output
   * 
   * - `stderr`: standard error
   * 
   * @example
   * stdout
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyLog extends $dara.Model {
  /**
   * @remarks
   * The Terraform output logs. This parameter is returned only for change sets of Terraform-based stacks.
   * 
   * > This parameter is unavailable while a change set is being created because the logs are generated only after the creation is complete.
   */
  terraformLogs?: GetChangeSetResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': GetChangeSetResponseBodyLogTerraformLogs },
    };
  }

  validate() {
    if(Array.isArray(this.terraformLogs)) {
      $dara.Model.validateArray(this.terraformLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ALIYUN::Region
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * cn-hangzhou
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * @example
   * 4c11658d-bd47-4dd0-ba64-727edc62****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The name of the change set.
   * 
   * @example
   * ChangeSet_template
   */
  changeSetName?: string;
  /**
   * @remarks
   * The type of the change set.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The changes in the change set.
   * 
   * @example
   * See examples.
   */
  changes?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the change set was created. The time is in UTC and uses the `YYYY-MM-DDThh:mm:ss` format.
   * 
   * @example
   * 2021-12-01T02:20:56
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the change set.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether to disable rollback when a stack creation or update fails.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The execution status of the change set.
   * 
   * @example
   * AVAILABLE
   */
  executionStatus?: string;
  /**
   * @remarks
   * Logs for the change set.
   */
  log?: GetChangeSetResponseBodyLog;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: GetChangeSetResponseBodyParameters[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3766EE04-76DD-50F9-9C23-3AF136CD5708
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.<br>For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html).<br>
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the stack to which the change set belongs.
   * 
   * @example
   * a486fc19-ebb7-4ce9-a70b-554a7c3d****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack to which the change set belongs.
   * 
   * @example
   * stack_2021-10-13
   */
  stackName?: string;
  /**
   * @remarks
   * The status of the change set.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason for the change set\\"s abnormal status.
   * 
   * @example
   * too many changes.
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the change set.
   */
  tags?: GetChangeSetResponseBodyTags[];
  /**
   * @remarks
   * The template body of the change set.
   * 
   * > This parameter is returned only when `ShowTemplate` is set to `true`.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The timeout period for creating or updating the stack.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      changes: 'Changes',
      createTime: 'CreateTime',
      description: 'Description',
      disableRollback: 'DisableRollback',
      executionStatus: 'ExecutionStatus',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: 'string',
      changeSetType: 'string',
      changes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      createTime: 'string',
      description: 'string',
      disableRollback: 'boolean',
      executionStatus: 'string',
      log: GetChangeSetResponseBodyLog,
      parameters: { 'type': 'array', 'itemType': GetChangeSetResponseBodyParameters },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': GetChangeSetResponseBodyTags },
      templateBody: 'string',
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changes)) {
      $dara.Model.validateArray(this.changes);
    }
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

