// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The API operation name.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The starting position for the read operation.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cluster template ID.
   * 
   * @example
   * at-41b4c6a0fc63****
   */
  templateId?: string;
  /**
   * @remarks
   * A list of API template IDs.
   * 
   * @example
   * ["AT-****"]
   */
  templateIds?: string[];
  /**
   * @remarks
   * The name of the cluster template.
   * 
   * @example
   * DATALAKE template
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

