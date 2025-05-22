// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateParameterConstraintsShrinkRequestParameters } from "./GetTemplateParameterConstraintsShrinkRequestParameters";


export class GetTemplateParameterConstraintsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of parameter N in the template.
   */
  parameters?: GetTemplateParameterConstraintsShrinkRequestParameters[];
  /**
   * @remarks
   * The parameters whose values you want to query.
   */
  parametersKeyFilterShrink?: string;
  /**
   * @remarks
   * The order in which associated parameters are arranged.
   * 
   * >  By default, the order of the associated parameters specified in the `Metadata` section of the template is used.
   */
  parametersOrderShrink?: string;
  /**
   * @remarks
   * The region ID of the template.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure that contains the template body.
   * 
   * The template body must be 1 to 524,288 bytes in length. If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * {"Parameters":{"ZoneInfo":{"Type": "String"},"InstanceType": {"Type": "String"}},"ROSTemplateFormatVersion": "2015-09-01","Resources":{"ECS":{"Properties":{"ZoneId":{"Ref": "ZoneInfo"},"InstanceType": {"Ref": "InstanceType"}},"Type": "ALIYUN::ECS::Instance"}}}
   */
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * >  This parameter takes effect only if the TemplateId parameter is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      parametersKeyFilterShrink: 'ParametersKeyFilter',
      parametersOrderShrink: 'ParametersOrder',
      regionId: 'RegionId',
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
      parameters: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsShrinkRequestParameters },
      parametersKeyFilterShrink: 'string',
      parametersOrderShrink: 'string',
      regionId: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
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

