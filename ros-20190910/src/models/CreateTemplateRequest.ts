// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRequestTags } from "./CreateTemplateRequestTags";


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
   * The ID of the resource group.\\
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.html).
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
  templateBody?: string;
  /**
   * @remarks
   * The name of the template.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body must be 1 to 1,024 bytes in length. If you do not specify the region of the OSS bucket, the value of RegionId is used.
   * 
   * > You must specify TemplateBody or TemplateURL.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
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

