// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateEstimateCostRequestParameters } from "./GetTemplateEstimateCostRequestParameters";


export class GetTemplateEstimateCostRequest extends $dara.Model {
  /**
   * @remarks
   * The name of parameter N. If you do not specify the name and value of a parameter, ROS uses the default name and value that are specified in the template.
   * 
   * Maximum value of N: 200.
   * 
   * Examples:
   * 
   * *   Parameters.1.ParameterKey: `Name`
   * *   Parameters.2.ParameterKey: `Netmode`
   * 
   * >  The Parameters parameter is optional. If you want to specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the scenario. The default value is the same as the value of the RegionId parameter.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   */
  parameters?: GetTemplateEstimateCostRequestParameters[];
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is used to query the estimated price in a configuration change scenario.
   * 
   * Assume that the specified stack contains only one Elastic Compute Service (ECS) instance and the instance type is ecs.s6-c1m2.large. You downgrade the instance type to ecs.s6-c1m1.small and specify a new ApsaraDB RDS instance in the template that is used for the price inquiry. The queried result is the sum of the downgrade refund of the ECS instance and the price of the new ApsaraDB RDS instance.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The value of parameter N.
   * 
   * Maximum value of N: 200.
   * 
   * Examples:
   * 
   * *   Parameters.1.ParameterValue: `DemoEip`
   * *   Parameters.2.ParameterValue: `public`
   * 
   * >  The Parameters parameter is optional. If you want to specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The region ID of the scenario. The default value is the same as the value of the RegionId parameter.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  templateScratchRegionId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests.
   * 
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * For more information about how to query the IDs of scenarios, see [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html).
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateEstimateCostRequestParameters },
      regionId: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

