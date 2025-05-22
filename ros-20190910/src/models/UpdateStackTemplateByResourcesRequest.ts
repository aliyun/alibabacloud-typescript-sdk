// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackTemplateByResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests.
   * 
   * The token can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only preview the corrected template in this request. Default value: false. Valid values:
   * 
   * *   true: returns the content of the corrected template and does not correct the template. After Resource Orchestration Service (ROS) compares the corrected template with the original template, ROS determines whether to execute the correction.
   * *   false: corrects the template to eliminate drift.
   * 
   * >  We recommend that you set the DryRun parameter to true to preview the corrected template. If the template content meets expectations, set the DryRun parameter to false to execute the correction.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The logical ID of resource.
   * 
   * @example
   * Vpc
   */
  logicalResourceId?: string[];
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
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The format of the returned template. Default value: JSON. Valid values:
   * 
   * *   JSON
   * *   YAML
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateFormat: 'TemplateFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
      templateFormat: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logicalResourceId)) {
      $dara.Model.validateArray(this.logicalResourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

