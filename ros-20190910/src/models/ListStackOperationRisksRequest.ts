// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackOperationRisksRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of the operation of which you want to detect risks. Valid values:
   * 
   * *   DeleteStack: detects high risks that may arise in resources when you delete a stack.
   * *   CreateStack: detects the missing permissions when you fail to create a stack.
   * 
   * @example
   * DeleteStack
   */
  operationType?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * *   If you specify a RAM role, ROS creates stacks based on the permissions that are granted to the RAM role and uses the credentials of the RAM role to call the API operations of Alibaba Cloud services.
   * *   If you do not specify a RAM role, ROS creates stacks based on the permissions of your Alibaba Cloud account.
   * 
   * The name of the RAM role can be up to 64 bytes in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
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
   * Specifies whether to retain all resources in the stack. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * > This parameter takes effect only if you set OperationType to DeleteStack.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources to retain.
   * 
   * > This parameter takes effect only if you set OperationType to DeleteStack.
   * 
   * @example
   * WebServer
   */
  retainResources?: string[];
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * > You must specify one of TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo and oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify RegionId in the URL, the region ID of the stack is used.
   * 
   * > You must specify one of TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template.
   * 
   * > This parameter takes effect only if you specify TemplateId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      operationType: 'OperationType',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      retainAllResources: 'RetainAllResources',
      retainResources: 'RetainResources',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      operationType: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.retainResources)) {
      $dara.Model.validateArray(this.retainResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

