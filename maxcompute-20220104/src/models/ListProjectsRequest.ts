// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to list the built-in **SYSTEM_CATALOG** projects that are used to provide data such as project metadata and historical usage data. For more information, see [Tenant-level Information Schema](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tenant-level-information-schema).
   * 
   * Valid values:
   * 
   * *   true: The built-in SYSTEM_CATALOG projects are listed.
   * *   false: The built-in SYSTEM_CATALOG projects are not listed.
   * 
   * @example
   * true
   */
  listSystemCatalog?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * a
   */
  prefix?: string;
  /**
   * @remarks
   * The quota name that is automatically generated. You can log on to the [MaxCompute console](https://maxcompute.console.aliyun.com), choose **Workspace** > **Quotas** from the left-side navigation pane, and then view the quota name on the **Quotas** page.
   * 
   * @example
   * "hsajkdgbkaubh"
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota nickname. You can log on to the [MaxCompute console](https://maxcompute.console.aliyun.com), choose **Workspace** > **Quotas** from the left-side navigation pane, and then view the quota nickname on the **Quotas** page.
   * 
   * @example
   * quotaA
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
   * The instance ID and billing method of the default computing quota.
   * 
   * @example
   * "aaaa-bbbb"
   */
  saleTags?: string;
  /**
   * @remarks
   * The tenant ID. You can log on to the [MaxCompute console](https://maxcompute.console.aliyun.com), and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 549532154333697
   */
  tenantId?: string;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * *   **managed**: internal project
   * *   **external**: external project
   * 
   * @example
   * "managed"
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

