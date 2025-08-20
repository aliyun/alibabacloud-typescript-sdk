// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter. You can choose one or more names for the query. Value range:  
   * 
   * - Categories: Template categories  
   * - DeployTypes: Deployment types  
   * - ApplicationScenes: Application scenarios  
   * - BasicServices: Basic services  
   * - ResourceTypes: Resource types  
   * - TemplateNames: Template names
   * 
   * @example
   * Categories
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. This parameter is effective only when ShareType is Private.  
   * 
   * A maximum of 20 tag keys are supported.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. This parameter is effective only when ShareType is Private.  
   * 
   * A maximum of 20 tag values are supported.
   * 
   * @example
   * deploy
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

export class ListTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Filter.
   */
  filters?: ListTemplatesRequestFilters[];
  /**
   * @remarks
   * Whether to query tag information. Values:  
   * 
   * - Enabled: Query.  
   * - Disabled (default): Do not query.
   * 
   * @example
   * Enabled
   */
  includeTags?: string;
  /**
   * @remarks
   * The page number of the template list.  
   * Start value: 1.  
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paginated query.  
   * Value range: 1~50.  
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.  
   * For more information about resource groups, see [What is a Resource Group](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing type of the template.  
   * 
   * Values:  
   * - Private (default): The template is owned by the user.  
   * - Shared: The template is shared by other users.  
   * - Official: The template is officially shared.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * Tags. A maximum of 20 tags are supported.
   */
  tag?: ListTemplatesRequestTag[];
  /**
   * @remarks
   * The name of the template. This parameter is effective only when ShareType is Private.  
   * The length must not exceed 255 characters and must start with a digit or a letter. It can contain digits, letters, hyphens (-), and underscores (_).
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tag: 'Tag',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListTemplatesRequestFilters },
      includeTags: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tag: { 'type': 'array', 'itemType': ListTemplatesRequestTag },
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

