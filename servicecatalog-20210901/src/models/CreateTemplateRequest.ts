// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequestTerraformVariables extends $dara.Model {
  /**
   * @remarks
   * The description of the variable.
   * 
   * For more information about the format of variable descriptions, see [Methods and suggestions for Terraform code development](https://help.aliyun.com/document_detail/322216.html).
   * 
   * @example
   * { "Label": { "en": "Instance Type" }, "AllowedValues": [ "ecs.s6-c1m1.small", "ecs.s6-c1m2.large", "ecs.s6-c1m2.xlarge" ] }
   */
  description?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * instance_type
   */
  variableName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      variableName: 'VariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      variableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the template.
   * 
   * For more information about the template syntax, see [Structure of Terraform templates](https://help.aliyun.com/document_detail/184397.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "ROSTemplateFormatVersion": "2015-09-01",
   *   "Transform": "Aliyun::Terraform-v1.1",
   *   "Workspace": {
   *     "main.tf": "variable  \\"name\\" {  default = \\"auto_provisioning_group\\"}"
   *   },
   *   "Outputs": {}
   * }
   */
  templateBody?: string;
  /**
   * @remarks
   * The type of the product template. Valid values:
   * 
   * *   RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
   * *   RosStandardTemplate: the standard ROS template.
   * 
   * This parameter is required.
   * 
   * @example
   * RosTerraformTemplate
   */
  templateType?: string;
  /**
   * @remarks
   * The variable settings of the Terraform template. You can configure the variables in a structured manner. Service Catalog applies the variable settings to the template.
   * 
   * >  The variables must be defined in the Terraform template.
   */
  terraformVariables?: CreateTemplateRequestTerraformVariables[];
  static names(): { [key: string]: string } {
    return {
      templateBody: 'TemplateBody',
      templateType: 'TemplateType',
      terraformVariables: 'TerraformVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateBody: 'string',
      templateType: 'string',
      terraformVariables: { 'type': 'array', 'itemType': CreateTemplateRequestTerraformVariables },
    };
  }

  validate() {
    if(Array.isArray(this.terraformVariables)) {
      $dara.Model.validateArray(this.terraformVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

