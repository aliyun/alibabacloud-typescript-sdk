// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the template.
   * 
   * > Tags is an optional parameter. If you specify Tags, you must specify \\`Tags.N.Key\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the template.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
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
   * The description of the template. The description can be up to 256 characters in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the template.
   */
  tags?: CreateTemplateRequestTags[];
  /**
   * @remarks
   * The structure of the template body. The template body must be 1 to 524,288 bytes in length. If the template body is large, specify the parameter in the request body to prevent request failures caused by an excessively long URL.
   * 
   * > You can specify only one of the \\`TemplateBody\\`, \\`TemplateURL\\`, and \\`TemplateId\\` parameters.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The name of the template. The name can be up to 255 characters in length. It must start with a digit, letter, or Chinese character. It can contain digits, letters, Chinese characters, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on a web server (HTTP or HTTPS) or in an Alibaba Cloud Object Storage Service (OSS) bucket, such as oss\\://ros/stack-policy/demo or oss\\://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body must be 1 to 1,024 bytes in length. If you do not specify the region of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * > You must specify only one of the \\`TemplateBody\\` and \\`TemplateURL\\` parameters.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The validation options.
   * 
   * By default, no options are enabled and strict validation is performed.
   */
  validationOptions?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      validationOptions: 'ValidationOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateTemplateRequestTags },
      templateBody: 'string',
      templateName: 'string',
      templateURL: 'string',
      validationOptions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.validationOptions)) {
      $dara.Model.validateArray(this.validationOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

