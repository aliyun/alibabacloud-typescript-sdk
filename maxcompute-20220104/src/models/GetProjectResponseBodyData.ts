// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectResponseBodyDataIpWhiteList } from "./GetProjectResponseBodyDataIpWhiteList";
import { GetProjectResponseBodyDataProperties } from "./GetProjectResponseBodyDataProperties";
import { GetProjectResponseBodyDataSaleTag } from "./GetProjectResponseBodyDataSaleTag";
import { GetProjectResponseBodyDataSecurityProperties } from "./GetProjectResponseBodyDataSecurityProperties";


export class GetProjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * maxcompute project
   */
  comment?: string;
  /**
   * @remarks
   * The total storage usage. The storage space that is occupied by your project, which is the logical storage space after your project data is collected and compressed.
   * 
   * @example
   * 16489027
   */
  costStorage?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1704380838000
   */
  createdTime?: number;
  /**
   * @remarks
   * The default computing quota that is used to allocate computing resources. If you do not specify a computing quota for your project, the jobs that are initiated by your project consume the computing resources in the default quota. For more information about how to use computing resources, see [Use quota groups for computing resources](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/use-of-computing-resources).
   * 
   * @example
   * quota_a
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The information about the IP address whitelist.
   */
  ipWhiteList?: GetProjectResponseBodyDataIpWhiteList;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_project
   */
  name?: string;
  /**
   * @remarks
   * The account information of the project owner.
   * 
   * @example
   * 1565950907343451
   */
  owner?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * PayAsYouGo
   */
  productType?: string;
  /**
   * @remarks
   * The basic properties of the project.
   */
  properties?: GetProjectResponseBodyDataProperties;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID and billing method of the default computing quota.
   */
  saleTag?: GetProjectResponseBodyDataSaleTag;
  /**
   * @remarks
   * The permission properties.
   */
  securityProperties?: GetProjectResponseBodyDataSecurityProperties;
  /**
   * @remarks
   * The project status. Valid values:
   * 
   * *   **AVAILABLE**
   * *   **READONLY**
   * *   **FROZEN**
   * *   **DELETING**
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of `Super_Administrator` role members of the project.
   */
  superAdmins?: string[];
  /**
   * @remarks
   * Indicates whether data storage by schema is supported. MaxCompute supports the schema feature. This feature allows you to classify objects such as tables, resources, and user-defined functions (UDFs) in a project by schema. You can create multiple schemas in a project. For more information, see [Schema-related operations](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/schema-related-operations).
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * *   **managed**: internal project
   * *   **external**: external project
   * 
   * @example
   * managed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      productType: 'productType',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      superAdmins: 'superAdmins',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: GetProjectResponseBodyDataIpWhiteList,
      name: 'string',
      owner: 'string',
      productType: 'string',
      properties: GetProjectResponseBodyDataProperties,
      regionId: 'string',
      saleTag: GetProjectResponseBodyDataSaleTag,
      securityProperties: GetProjectResponseBodyDataSecurityProperties,
      status: 'string',
      superAdmins: { 'type': 'array', 'itemType': 'string' },
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.securityProperties && typeof (this.securityProperties as any).validate === 'function') {
      (this.securityProperties as any).validate();
    }
    if(Array.isArray(this.superAdmins)) {
      $dara.Model.validateArray(this.superAdmins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

