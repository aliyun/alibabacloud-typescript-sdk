// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewStackRequestParameters } from "./PreviewStackRequestParameters";


export class PreviewStackRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can be up to 64 characters in length, and can contain letters, digits, underscores (_), and hyphens (-).\\
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to disable rollback for the resources when the stack fails to be created. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * Specifies whether to query the parameters that you want to use in compliance precheck.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  enablePreConfig?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent operations that can be performed on resources. This parameter takes effect only for Terraform stacks.
   * 
   * By default, this parameter is empty. You can set this parameter to an integer that is greater than or equal to 0.
   * 
   * > If you set this parameter to an integer greater than 0, the integer is used. If you set this parameter to 0 or leave this parameter empty, the default value of Terraform is used. In most cases, the default value of Terraform is 10.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: PreviewStackRequestParameters[];
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID. You can use this parameter to preview a stack that you want to update.
   * 
   * 
   * 
   * > -  You must and can specify only one of StackName and StackId.
   * > - In the scenario in which you preview a stack that you want to create or update, you cannot preview the resources in its nested stacks.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name. You can use this parameter to preview the stack that you want to create. The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * > You must and can specify only one of StackName and StackId.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The stack policy body must be 1 to 16,384 bytes in length.
   * 
   * > You can specify only one of StackPolicyBody and StackPolicyURL.
   * 
   * @example
   * {"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the stack policy. The URL must point to a policy that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The policy file can be up to 16,384 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You can specify only one of StackPolicyBody and StackPolicyURL.
   * 
   * The URL can be up to 1,350 bytes in length.
   * 
   * @example
   * oss://ros-stack-policy/demo
   */
  stackPolicyURL?: string;
  taintResources?: string[];
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * For more information about how to query the scenario ID, see [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html).
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The region ID of the scenario. The default value is the same as the value of RegionId.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  templateScratchRegionId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an OSS bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The timeout period for creating the stack.
   * 
   * Unit: minutes.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disableRollback: 'DisableRollback',
      enablePreConfig: 'EnablePreConfig',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      regionId: 'RegionId',
      stackId: 'StackId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
      taintResources: 'TaintResources',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disableRollback: 'boolean',
      enablePreConfig: 'boolean',
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': PreviewStackRequestParameters },
      regionId: 'string',
      stackId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
      taintResources: { 'type': 'array', 'itemType': 'string' },
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.taintResources)) {
      $dara.Model.validateArray(this.taintResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

