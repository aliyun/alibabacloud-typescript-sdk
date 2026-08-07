// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCategoryTemplateListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the current risk level.
   * 
   * @example
   * 5
   */
  currentRiskLevel?: number;
  /**
   * @remarks
   * The description of the industry template.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The time when the industry template was created.
   * 
   * @example
   * 1582992000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the industry template was last modified.
   * 
   * @example
   * 1545277010000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The unique ID of the industry template.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The maximum category level.
   * 
   * @example
   * 2
   */
  maxCategoryLevel?: number;
  /**
   * @remarks
   * The ID of the maximum risk level.
   * 
   * @example
   * 5
   */
  maxRiskLevel?: number;
  /**
   * @remarks
   * The name of the industry template.
   * 
   * @example
   * built-in template
   */
  name?: string;
  /**
   * @remarks
   * The status of the industry template. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled. The template is the current primary template of the user.
   * - **2**: Active. Both enabled and active templates can be applied to detection tasks.
   * - **3**: General detection model template.
   * 
   * > Templates in the enabled or active state can be used as the industry template ID parameter for [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html).
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the industry template supports editing. Valid values:
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 0
   */
  supportEdit?: number;
  /**
   * @remarks
   * The type of the industry template.
   * 
   * @example
   * 6
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      currentRiskLevel: 'CurrentRiskLevel',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      maxCategoryLevel: 'MaxCategoryLevel',
      maxRiskLevel: 'MaxRiskLevel',
      name: 'Name',
      status: 'Status',
      supportEdit: 'SupportEdit',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRiskLevel: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      maxCategoryLevel: 'number',
      maxRiskLevel: 'number',
      name: 'string',
      status: 'number',
      supportEdit: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCategoryTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of industry templates.
   */
  items?: DescribeCategoryTemplateListResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page in a paging query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID that Alibaba Cloud generates for the request.
   * 
   * @example
   * 8491DBFD-48C0-4E11-B6FC-6F38921244A9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeCategoryTemplateListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

