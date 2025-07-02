// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiTemplateRequest extends $dara.Model {
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
   * content
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
   * Cluster template name.
   * 
   * This parameter is required.
   * 
   * @example
   * DATALAKE template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

