// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter that is defined in the template.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * ZoneInfo
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter that is defined in the template.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
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

export class GetTemplateParameterConstraintsRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, refer to [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters that are defined in the template.
   */
  parameters?: GetTemplateParameterConstraintsRequestParameters[];
  /**
   * @remarks
   * The list of parameters to be queried.
   */
  parametersKeyFilter?: string[];
  /**
   * @remarks
   * The dependency of the parameters.
   */
  parametersOrder?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * If you specify this parameter, the parameter constraints for an upgrade or downgrade scenario are queried.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure of the template body. The template body must be 1 to 524,288 bytes in length. If the length of the template body exceeds the upper limit, we recommended to use the HTTP POST + Body Param method to pass the parameter in the request body to avoid request failures caused by an excessively long URL.
   * 
   * > You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * {
   *   "ROSTemplateFormatVersion": "2015-09-01",
   *   "Parameters": {
   *     "ZoneInfo": {
   *       "Type": "String"
   *     },
   *     "InstanceType": {
   *       "Type": "String"
   *     }
   *   },
   *   "Resources": {
   *     "ECS": {
   *       "Type": "ALIYUN::ECS::Instance",
   *       "Properties": {
   *         "ZoneId": {
   *           "Ref": "ZoneInfo"
   *         },
   *         "InstanceType": {
   *           "Ref": "InstanceType"
   *         }
   *       }
   *     }
   *   }
   * }
   */
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared templates and private templates.
   * 
   * > You can specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud OSS bucket, such as oss\\://ros/template/demo or oss\\://ros/template/demo?RegionId=cn-hangzhou. The template must be 1 to 524,288 bytes in length. If the OSS region is not specified, the default is the same as the RegionId parameter.
   * 
   * > You can specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * > TemplateVersion is valid only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      parametersKeyFilter: 'ParametersKeyFilter',
      parametersOrder: 'ParametersOrder',
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
      parameters: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsRequestParameters },
      parametersKeyFilter: { 'type': 'array', 'itemType': 'string' },
      parametersOrder: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.parametersKeyFilter)) {
      $dara.Model.validateArray(this.parametersKeyFilter);
    }
    if(Array.isArray(this.parametersOrder)) {
      $dara.Model.validateArray(this.parametersOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

