// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiTemplate extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation.
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * The parameters in the API operation template.
   * 
   * @example
   * content
   */
  content?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the template.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * AT-Af***
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
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
      status: 'Status',
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
      status: 'string',
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

