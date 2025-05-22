// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterResourceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).\\
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the resource type. The description can be up to 512 characters in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Set the value to Module.
   * 
   * This parameter is required.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length. The template body is used as the module content. If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * 
   * > - This parameter takes effect only when EntityType is set to Module.
   * > - You can specify only one of the TemplateBody and TemplateURL parameters.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. The template body is used as the module content.
   * 
   * > - If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * > -  This parameter takes effect only when EntityType is set to Module.
   * > -  You can specify only one of the TemplateBody and TemplateURL parameters.
   * 
   * The URL can be up to 1,024 bytes in length.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      entityType: 'EntityType',
      resourceType: 'ResourceType',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      entityType: 'string',
      resourceType: 'string',
      templateBody: 'string',
      templateURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

