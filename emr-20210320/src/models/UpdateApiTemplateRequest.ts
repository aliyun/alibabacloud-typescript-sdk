// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation. You can create only a cluster API operation template. Set the value to CreateCluster.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * The content of the cluster API operation template. Set the value to JSON strings of the request parameters of the [CreateCluster](https://help.aliyun.com/document_detail/454393.html) API operation for creating a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateCluster
   */
  content?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Template ID (it is recommended to use the parameter TemplateId).
   * 
   * This parameter is required.
   * 
   * @example
   * AT-****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * datalakeTest1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

