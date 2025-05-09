// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
   * 
   * @example
   * TimerTrigger
   */
  category?: string;
  /**
   * @remarks
   * The creator of the template.
   * 
   * *   To query the template provided by Alibaba Cloud, set this parameter to **ACS**.
   * *   To query the template created by a user, set this parameter to the **ID** of the template or the **name of the user** who creates the template.
   * 
   * @example
   * ACS
   */
  createdBy?: string;
  /**
   * @remarks
   * Specifies to query the template that is created at or later than the specified time.
   * 
   * The value must be in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDateAfter?: string;
  /**
   * @remarks
   * Specifies to query the template that is created at or before the specified time.
   * 
   * The value must be in the YYYY-MM-DDThh:mm::ssZ format.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDateBefore?: string;
  /**
   * @remarks
   * Specifies whether to query the template that is configured with a trigger.
   * 
   * @example
   * true
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * Specifies whether the template is an example template.
   * 
   * @example
   * false
   */
  isExample?: boolean;
  /**
   * @remarks
   * Specifies whether the template is added to favorites.
   * 
   * @example
   * true
   */
  isFavorite?: boolean;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which you want to query templates.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The field that is used to sort the templates to be queried. Valid values:
   * 
   * *   **TotalExecutionCount** (default): The system sorts the returned templates based on the total number of times that the templates are used.
   * *   **Popularity**: The system sorts the returned templates based on the popularity of the templates.
   * *   **TemplateName**: The system sorts the returned templates based on the names of the templates.
   * *   **CreatedDate**: The system sorts the returned templates based on the points in time when the templates are created.
   * *   **UpdatedDate**: The system sorts the returned templates based on the points in time when the templates are updated.
   * 
   * @example
   * Popularity
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The format of the template. Valid values:
   * 
   * *   **JSON**
   * *   **YAML**
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The name of the template. All templates whose names contain the specified template name are to be returned.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * *   Automation: the template for automated tasks.
   * *   State: the template for configuration inventories.
   * *   Package: the template for software packages.
   * 
   * @example
   * private
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      hasTrigger: 'HasTrigger',
      isExample: 'IsExample',
      isFavorite: 'IsFavorite',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      hasTrigger: 'boolean',
      isExample: 'boolean',
      isFavorite: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
      templateFormat: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

