// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * > If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * You can specify one of TemplateBody and TemplateURL, but not both of them. The URL can be up to 1,024 bytes in length.\\
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The options that are used to control the generation of information about the stack update. You can specify up to two options.
   */
  updateInfoOptions?: string[];
  /**
   * @remarks
   * Specifies whether to enable additional validation for the template. Valid values:
   * 
   * *   None (default): does not enable additional validation.
   * *   EnableTerraformValidation: runs the `terraform validate` command in the Terraform CLI to enable additional validation for a Terraform template.
   * *   EnableFastTerraformValidation: runs a command that is similar to the `terraform validate` command in the Terraform CLI to enable additional validation for a Terraform template.
   * 
   * > Compared with the EnableTerraformValidation method, the EnableFastTerraformValidation method validates a template at a faster speed but a lower integrity level.
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

