// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * 接口名。
   * 
   * This parameter is required.
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * 一次获取的最大记录数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 标记当前开始读取的位置，置空表示从头开始。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * 区域ID。
   * 
   * This parameter is required.
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
   * 集群模板id。
   * 
   * @example
   * at-41b4c6a0fc63****
   */
  templateId?: string;
  /**
   * @remarks
   * 集群模板id列表。
   * 
   * @example
   * ["AT-****"]
   */
  templateIds?: string[];
  /**
   * @remarks
   * 集群模板名字。
   * 
   * @example
   * DATALAKE模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      templateIds: 'TemplateIds',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

