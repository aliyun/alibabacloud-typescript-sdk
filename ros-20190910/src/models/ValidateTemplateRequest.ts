// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates the value, which must be unique.
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
   * The region ID of the stack template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent list of Alibaba Cloud regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The structure of the template body. The template body can be 1 to 524,288 bytes in length.<br>If the template body is long, use a POST request and place the parameter in the request body. This prevents a request failure caused by an excessively long URL.<br>You can specify either TemplateBody or TemplateURL, but not both.<br><br>
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The location of the file that contains the template body. The URL must point to a template that is located on an HTTP web server or in an Alibaba Cloud OSS bucket, such as oss\\://ros/template/demo or oss\\://ros/template/demo?RegionId=cn-hangzhou. The template can be up to 524,288 bytes in size.
   * 
   * > If you do not specify the region of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * You can specify either TemplateBody or TemplateURL, but not both.<br>The URL can be up to 1,024 bytes in length.<br>
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The list of options for the update information. The list can contain up to two options.
   */
  updateInfoOptions?: string[];
  /**
   * @remarks
   * Specifies whether to enable additional validation for the template. Valid values:
   * 
   * - None (default): No additional validation is enabled.
   * 
   * - EnableTerraformValidation: For a Terraform template, the `terraform validate` command of the Terraform command-line interface (CLI) is used to enable additional validation.
   * 
   * - EnableFastTerraformValidation: For a Terraform template, a command that is similar to the `terraform validate` command of the Terraform CLI is used to enable additional validation.
   * 
   * > Compared with EnableTerraformValidation, EnableFastTerraformValidation is faster but less comprehensive.
   * 
   * @example
   * None
   */
  validationOption?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
      updateInfoOptions: 'UpdateInfoOptions',
      validationOption: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      templateBody: 'string',
      templateURL: 'string',
      updateInfoOptions: { 'type': 'array', 'itemType': 'string' },
      validationOption: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.updateInfoOptions)) {
      $dara.Model.validateArray(this.updateInfoOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

