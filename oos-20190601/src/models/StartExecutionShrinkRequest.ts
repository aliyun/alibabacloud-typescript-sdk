// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartExecutionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * 123e56767-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The loop mode. Valid values:
   * 
   * *   Automatic: does not suspend the execution of the template. This is the default value.
   * *   FirstBatchPause: suspends the execution of the template after the first batch is complete.
   * *   EveryBatchPause: suspends the execution of the template after each batch is complete.
   * 
   * @example
   * Automatic
   */
  loopMode?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Automatic: automatically starts the execution of the template. This is the default value.
   * *   FailurePause: suspends the execution of the template upon a failure.
   * *   Debug: manually starts the execution of the template.
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The JSON string that consists of a set of parameters. Default value: {}.
   * 
   * @example
   * {"Status":"Running"}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The ID of the region in which the execution resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The security check mode. Valid values:
   * 
   * *   Skip: specifies that you are aware of the risks. The system performs all actions in the execution without manual confirmation, regardless of the risk level. This parameter is valid only if the `Mode` parameter is set to Automatic.
   * *   ConfirmEveryHighRiskAction: requires you to confirm each high-risk action. This is the default value. You can call the **NotifyExecution** operation to confirm or cancel an action.
   * 
   * @example
   * Skip
   */
  safetyCheck?: string;
  /**
   * @remarks
   * The tags for the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The content of the template in the JSON or YAML format. This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * {   "Description": "Example template, describe instances in some status",   "FormatVersion": "OOS-2019-06-01",   "Parameters": {},   "Tasks": [     {       "Name": "describeInstances",       "Action": "ACS::ExecuteAPI",       "Description": "desc-en",       "Properties": {         "Service": "ECS",         "API": "DescribeInstances",         "Parameters": {           "Status": "Running"         }       }     }   ] }
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * vmeixme
   */
  templateName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template. The access control list (ACL) of the object must be public-read. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * http://oos-template.cn-hangzhou.oss.aliyun-inc.com/oos-test-template.json
   */
  templateURL?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the system uses the latest version.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      loopMode: 'LoopMode',
      mode: 'Mode',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      tagsShrink: 'Tags',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      loopMode: 'string',
      mode: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      tagsShrink: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

