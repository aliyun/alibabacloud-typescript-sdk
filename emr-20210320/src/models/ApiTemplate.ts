// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiTemplate extends $dara.Model {
  /**
   * @remarks
   * 接口名。
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * 模版接口参数。
   */
  content?: string;
  /**
   * @remarks
   * 区域ID。
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 资源组ID。
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 模板状态。
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 模板ID。
   * 
   * @example
   * AT-Af***
   */
  templateId?: string;
  /**
   * @remarks
   * 模板ID。
   * 
   * @example
   * AT-Af***
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

