// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateModuleRequest extends $dara.Model {
  /**
   * @remarks
   * The generation source. Valid values:
   * - Resource: Generates a Terraform HCL template based on resource properties.
   * - VariableToCode: Generates a final Terraform HCL template by combining variables with an existing Terraform HCL template.
   * - CodeToVariable: Extracts variable information from a Terraform HCL template.
   * - Module: Generates Terraform Module code based on variables.
   * 
   * @example
   * Resource
   */
  generateSource?: string;
  /**
   * @remarks
   * The collection of parameters, passed in key:value format, such as {"vpc_name":"vpc-test"}.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The syntax. Valid values:
   * - hcl (default).
   * 
   * @example
   * hcl
   */
  syntax?: string;
  /**
   * @remarks
   * The existing Terraform HCL template content.
   * 
   * @example
   * terraform {
   * }
   */
  template?: string;
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.260.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The Terraform resource type.
   * 
   * @example
   * alicloud_vpc
   */
  terraformResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      generateSource: 'generateSource',
      parameters: 'parameters',
      regionId: 'regionId',
      syntax: 'syntax',
      template: 'template',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformResourceType: 'terraformResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateSource: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      syntax: 'string',
      template: 'string',
      terraformProviderVersion: 'string',
      terraformResourceType: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

