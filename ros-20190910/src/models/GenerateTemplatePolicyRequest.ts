// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTemplatePolicyRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter. If you do not specify the name and value of a parameter defined in the template, Resource Orchestration Service (ROS) uses the default value specified in the template.  
   * Maximum value of N: 200.
   * Example values:
   * 
   * - Parameters.1.ParameterKey: `Name`.
   * 
   * - Parameters.2.ParameterKey: `Netmode`.
   * 
   * 
   * > Parameters is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * Domain
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter defined in the template. Maximum value of N: 200.  
   * 
   * > Parameters is optional. If you specify Parameters, Parameters.N.ParameterValue is required.
   * 
   * @example
   * PostPaid
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

export class GenerateTemplatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The options that control how the template access policy is generated. This parameter is of the LIST type. You can specify whether to resolve template parameters and the permission scope of the generated policy: 
   * **ResolveParameters** indicates that the policy is generated after conditions and resources are resolved based on the specified Parameters or parameter default values.
   * 
   * **IgnoreParameters** indicates that the policy is generated without resolving parameters, using the legacy logic.
   * 
   * **MandatoryPolicy** indicates that only the minimum permissions required for template execution are generated.
   * 
   * **FullPolicy** indicates that a full access policy is generated.
   * 
   * ResolveParameters and IgnoreParameters are mutually exclusive. MandatoryPolicy and FullPolicy are mutually exclusive. MandatoryPolicy must be used together with ResolveParameters.
   * 
   * If this parameter is not specified, ResolveParameters + FullPolicy is used by default when Parameters is specified. Otherwise, IgnoreParameters + FullPolicy is used by default.
   */
  generateOptions?: string[];
  /**
   * @remarks
   * The operation types for which policy information is generated.
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The input parameters. The input parameters define the parameters that must be specified when you create a stack by using this template. These parameters specify the details of each stack creation, such as the username, password, and environment-specific ECS instance types.
   */
  parameters?: GenerateTemplatePolicyRequestParameters[];
  /**
   * @remarks
   * The structure of the template body. The length is 1 to 524,288 bytes.
   * If the length is large, we recommend that you use the HTTP POST method and include the parameter in the request body to avoid request failures caused by an excessively long URL.  
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. Shared templates and private templates are supported.  
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on a web server (HTTP or HTTPS) or in an OSS bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=ap-southeast-1. The maximum size of the template is 524,288 bytes.
   * 
   * > If the OSS region is not specified, the region specified by the RegionId parameter is used by default.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * Maximum length: 1,024 bytes.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The template version. This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      generateOptions: 'GenerateOptions',
      operationTypes: 'OperationTypes',
      parameters: 'Parameters',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': GenerateTemplatePolicyRequestParameters },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.generateOptions)) {
      $dara.Model.validateArray(this.generateOptions);
    }
    if(Array.isArray(this.operationTypes)) {
      $dara.Model.validateArray(this.operationTypes);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

