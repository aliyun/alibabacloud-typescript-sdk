// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * TimerTrigger
   */
  category?: string;
  /**
   * @remarks
   * The template constraints.
   * 
   * @example
   * {
   *   "InstanceTypeFamilies": ["ecs.g8y", "ecs.c8y"],
   *   "ImageTypes": ["system"],
   *   "OSPlatforms": ["CentOS", "Ubuntu"],
   *   "OSVersions": ["CentOS7.9 64bit"]
   * }
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the template.
   * 
   * @example
   * root(1309200)
   */
  createdBy?: string;
  /**
   * @remarks
   * The creation time of the template.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Describe instances of given status
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the template was configured with a trigger.
   * 
   * @example
   * true
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * The SHA256 value of the template content.
   * 
   * @example
   * 4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4
   */
  hash?: string;
  /**
   * @remarks
   * Indicates whether the template is added to favorites.
   * 
   * @example
   * true
   */
  isFavorite?: boolean;
  /**
   * @remarks
   * The popularity of the public template. Valid values: **1-10**. A greater value indicates higher popularity. If **ShareType** is set to **Private**, the value of this parameter is `-1`.
   * 
   * >  This parameter is valid only if **ShareType** is set to **Public**.
   * 
   * @example
   * 8
   */
  popularity?: number;
  /**
   * @remarks
   * The user who published the template.
   * 
   * @example
   * aliyun
   */
  publisher?: string;
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
   * The share type of the template. The share type of a template created by a user is **Private**. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The template format. The system automatically determines whether the format of the template is JSON or YAML.
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * t-94753deed38
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * private
   */
  templateType?: string;
  /**
   * @remarks
   * The template version. The version contains the letter v and a number. The number starts from 1.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The number of times for which the private template is executed. If **ShareType** is set to **Public**, the value of this parameter is `-1`.
   * 
   * >  This parameter is valid only if **ShareType** is set to **Private**.
   * 
   * @example
   * 5
   */
  totalExecutionCount?: number;
  /**
   * @remarks
   * The user who last updated the template.
   * 
   * @example
   * root(13092000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v2.1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      isFavorite: 'IsFavorite',
      popularity: 'Popularity',
      publisher: 'Publisher',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      templateVersion: 'TemplateVersion',
      totalExecutionCount: 'TotalExecutionCount',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      isFavorite: 'boolean',
      popularity: 'number',
      publisher: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
      totalExecutionCount: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * The ID of the request.
   * 
   * @example
   * BEF54BA-17B6-449F-A219-49ACB157E3
   */
  requestId?: string;
  /**
   * @remarks
   * The template metadata.
   */
  templates?: ListTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

