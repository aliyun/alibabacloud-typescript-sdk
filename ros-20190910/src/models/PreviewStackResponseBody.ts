// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewStackResponseBodyStackLogTerraformLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the Terraform command that is run. Valid values:
   * 
   * *   apply
   * *   plan
   * *   destroy
   * *   version
   * 
   * For more information about Terraform commands, see [Basic CLI Features](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content of the output stream that is returned after the command is run.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * *   stdout: standard output stream
   * *   stderr: standard error stream
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

export class PreviewStackResponseBodyStackLog extends $dara.Model {
  /**
   * @remarks
   * The Terraform logs. This parameter is returned only if the stack is a Terraform stack.
   * 
   * > This parameter contains the logs of previewing the stack.
   */
  terraformLogs?: PreviewStackResponseBodyStackLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackLogTerraformLogs },
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

export class PreviewStackResponseBodyStackParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ALIYUN::AccountId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 151266687691****
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

export class PreviewStackResponseBodyStackResources extends $dara.Model {
  /**
   * @remarks
   * The resource type of an Alibaba Cloud service.
   * 
   * @example
   * ACS::ECS::Instance
   */
  acsResourceType?: string;
  /**
   * @remarks
   * The action that is performed on the resource. Valid values:
   * 
   * *   Add
   * *   Modify
   * *   Remove
   * *   None
   * 
   * @example
   * Add
   */
  action?: string;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * This parameter is returned only if Action is set to Modify or Remove.
   * 
   * @example
   * i-a1b2c3***
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The resource properties.
   * 
   * @example
   * {   "DiskMappings": [     {       "Category": "cloud_ssd",       "Size": "20"     }   ],   "SystemDisk_Category": "cloud_ssd",   "InstanceChargeType": "PostPaid",   "AutoRenew": "False",   "WillReplace": true,   "ImageId": "centos_7",   "InstanceType": "ecs.g6.large",   "AllocatePublicIP": true,   "AutoRenewPeriod": 1,   "IoOptimized": "optimized",   "ZoneId": "cn-beijing-g",   "VSwitchId": "",   "SecurityGroupId": "",   "Period": 1,   "InternetChargeType": "PayByTraffic",   "SystemDiskCategory": "cloud_efficiency",   "InternetMaxBandwidthOut": 1,   "VpcId": "",   "InternetMaxBandwidthIn": 200,   "PeriodUnit": "Month" }
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether a replacement update is performed on the template. Valid values:
   * 
   * *   True: A replacement update is performed on the template.
   * *   False: A change is made on the template.
   * *   Conditional: A replacement update may be performed on the template. You can check whether a replacement update is performed when the template is in use.
   * 
   * > This parameter is returned only if Action is set to Modify.
   * 
   * @example
   * False
   */
  replacement?: string;
  /**
   * @remarks
   * The resources on which the stack depends.
   */
  requiredBy?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the nested stack. The data structure of the value is the same as the data structure of the entire response.
   * 
   * @example
   * {}
   */
  stack?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      acsResourceType: 'AcsResourceType',
      action: 'Action',
      description: 'Description',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      properties: 'Properties',
      replacement: 'Replacement',
      requiredBy: 'RequiredBy',
      resourceType: 'ResourceType',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsResourceType: 'string',
      action: 'string',
      description: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replacement: 'string',
      requiredBy: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      stack: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.requiredBy)) {
      $dara.Model.validateArray(this.requiredBy);
    }
    if(this.stack) {
      $dara.Model.validateMap(this.stack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStack extends $dara.Model {
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * One ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether rollback is disabled for the resources when the stack fails to be created.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The log that is generated when the stack is run.
   */
  log?: PreviewStackResponseBodyStackLog;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: PreviewStackResponseBodyStackParameters[];
  /**
   * @remarks
   * The region where the stack resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resources in the stack.
   */
  resources?: PreviewStackResponseBodyStackResources[];
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body.
   * 
   * @example
   * {   "Statement": [     {       "Action": "Update:*",       "Resource": "*",       "Effect": "Allow",       "Principal": "*"     },     {       "Action": "Update:*",       "Resource": "LogicalResourceId/apple1",       "Effect": "Deny",       "Principal": "*"     }   ] }
   */
  stackPolicyBody?: { [key: string]: any };
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * One ECS instance.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The timeout period for creating the stack.
   * 
   * Unit: minutes.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      disableRollback: 'DisableRollback',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resources: 'Resources',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      templateDescription: 'TemplateDescription',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableRollback: 'boolean',
      log: PreviewStackResponseBodyStackLog,
      parameters: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackParameters },
      regionId: 'string',
      resources: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackResources },
      stackName: 'string',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateDescription: 'string',
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(this.stackPolicyBody) {
      $dara.Model.validateMap(this.stackPolicyBody);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the stack that is previewed.
   */
  stack?: PreviewStackResponseBodyStack;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stack: PreviewStackResponseBodyStack,
    };
  }

  validate() {
    if(this.stack && typeof (this.stack as any).validate === 'function') {
      (this.stack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

