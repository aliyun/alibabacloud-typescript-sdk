// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to list the built-in **SYSTEM_CATALOG** project. This project provides information such as project metadata and usage history. For more information, see <props="intl">[Information Schema](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tenant-level-information-schema).
   * 
   * @example
   * true
   */
  listSystemCatalog?: boolean;
  /**
   * @remarks
   * The token that specifies the starting point of the query. The results are returned in alphabetical order, starting from the entry that immediately follows the marker.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The prefix of the resource names to query. For example, if you specify `a` for this parameter, only resources whose names start with "a" are returned.
   * 
   * @example
   * a
   */
  prefix?: string;
  /**
   * @remarks
   * The quota name. The system automatically generates this name. To obtain the quota name, log in to the [MaxCompute console](https://maxcompute.console.aliyun.com) and select **Workspace** > **Quota** **Management** from the navigation pane on the left.
   * 
   * @example
   * aliyun_5495***3697
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota nickname. To obtain the quota nickname, log in to the [MaxCompute console](https://maxcompute.console.aliyun.com) and select **Workspace** > **Quota** **Management** from the navigation pane on the left.
   * 
   * @example
   * os_PayAsYouGoQuota
   */
  quotaNickName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The instance ID and billing method of the default compute quota.
   * 
   * @example
   * {
   *       "resourceId": "b7afb7d1-****-****-****-c393669c307b",
   *       "resourceType": "PayAsYouGo"
   *     }
   */
  saleTags?: string;
  /**
   * @remarks
   * The sort field. The only supported value is `createdTime`.
   * 
   * @example
   * createdTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. This parameter takes effect only when `sortBy` is specified. Valid values are `ASC` and `DESC`. The values are case-insensitive.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tenant ID. To obtain the ID, log in to the [MaxCompute console](https://maxcompute.console.aliyun.com) and select **Tenant Management** > **Tenant Properties** from the navigation pane on the left.
   * 
   * @example
   * 5495****3697
   */
  tenantId?: string;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * - **managed**: a managed project.
   * 
   * - **external**: an external project.
   * 
   * @example
   * managed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      listSystemCatalog: 'listSystemCatalog',
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      quotaName: 'quotaName',
      quotaNickName: 'quotaNickName',
      region: 'region',
      saleTags: 'saleTags',
      sortBy: 'sortBy',
      sortOrder: 'sortOrder',
      tenantId: 'tenantId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listSystemCatalog: 'boolean',
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      quotaName: 'string',
      quotaNickName: 'string',
      region: 'string',
      saleTags: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

