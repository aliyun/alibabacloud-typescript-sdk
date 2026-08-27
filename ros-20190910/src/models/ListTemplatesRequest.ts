// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name. You can select one or more names to query. Valid values:
   * 
   * - Categories: template category
   * 
   * - DeployTypes: deployment type
   * 
   * - ApplicationScenes: application scenario
   * 
   * - BasicServices: basic service
   * 
   * - ResourceTypes: resource type
   * 
   * - TemplateNames: template name
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
   * The tag key. This parameter takes effect only when ShareType is set to Private.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter takes effect only when ShareType is set to Private.
   * 
   * You can specify up to 20 tag values.
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
   * The filter.
   */
  filters?: ListTemplatesRequestFilters[];
  /**
   * @remarks
   * Specifies whether to query tag information. Valid values:
   * 
   * - Enabled: queries tag information.
   * 
   * - Disabled (default): does not query tag information.
   * 
   * @example
   * Enabled
   */
  includeTags?: string;
  /**
   * @remarks
   * The page number of the template list.<br> The value starts from 1.<br> Default value: 1.<br><br>
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query.<br> Valid values: 1 to 50.<br> Default value: 10.<br><br>
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.<br> For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html).<br>
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template.
   * 
   * Valid values:
   * 
   * - Private (default): The template is owned by the user.
   * 
   * - Shared: The template is shared by other users.
   * 
   * - Official: The template is a shared official template.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: ListTemplatesRequestTag[];
  /**
   * @remarks
   * The name of the template. This parameter takes effect only when ShareType is set to Private. The name can be up to 255 characters in length. It must start with a digit or a letter and can contain digits, letters, hyphens (-), and underscores (_).
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

