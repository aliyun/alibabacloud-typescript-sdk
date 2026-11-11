// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListRightsResponseBodyDataValuePackageInfos extends $dara.Model {
  /**
   * @remarks
   * The content of the value-added feature.
   * 
   * @example
   * Basic monitoring, real-time monitoring, session monitoring, and application control
   */
  function?: string;
  /**
   * @remarks
   * The value-added feature code.
   * 
   * @example
   * Monitor
   */
  valuePackageCode?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      valuePackageCode: 'ValuePackageCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      valuePackageCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRightsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The size of the additional data cloud disk. Unit: GiB.
   * 
   * @example
   * 0
   */
  addDataDiskSize?: number;
  /**
   * @remarks
   * The size of the additional system cloud disk. Unit: GiB.
   * 
   * @example
   * 0
   */
  addRootDiskSize?: number;
  /**
   * @remarks
   * Indicates whether the cloud computer is an AI cloud computer. Valid values:
   * - true: AI cloud computer.
   * - false: Regular cloud computer.
   * 
   * @example
   * true
   */
  aiDesktop?: boolean;
  /**
   * @remarks
   * The scenario code for the commercial edition.
   * 
   * @example
   * GENERAL_OFFICE
   */
  businessSceneCode?: string;
  /**
   * @remarks
   * The compute plan code. Refer to the actual returned value of the rights.
   * 
   * @example
   * HOURS_120_PER_MONTH
   */
  calculatingCode?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The time when the rights record was created. The time is in RFC 3339 UTC format and ends with Z.
   * 
   * @example
   * 2026-11-06T01:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The hibernation options for the rights. The actual policy is determined in combination with the compute plan.
   * 
   * @example
   * 0
   */
  hibernate?: number;
  /**
   * @remarks
   * The monthly credit information corresponding to the rights. This value may be empty if this configuration is not available.
   * 
   * @example
   * 2000
   */
  monthlyCredit?: string;
  /**
   * @remarks
   * Specifies whether the rights apply to regions outside the Chinese mainland, including Hong Kong (China), Macao (China), and Taiwan (China). Valid values:
   * - 0: The Chinese mainland.
   * - 1: Regions outside the Chinese mainland, including Hong Kong (China), Macao (China), and Taiwan (China).
   * 
   * @example
   * 0
   */
  overseas?: number;
  /**
   * @remarks
   * The cause of the rights activation failure. This value may be empty if the activation is successful.
   * 
   * @example
   * The image is unavailable. Select an available image and try again
   */
  rightsActiveFailureCause?: string;
  /**
   * @remarks
   * The rights activation status. Use the returned value to determine whether the activation is complete.
   * 
   * @example
   * ACTED
   */
  rightsActiveStatus?: string;
  /**
   * @remarks
   * The time when the rights were activated. This value may be empty if the rights are not yet activated. The time is in RFC 3339 UTC format and ends with Z.
   * 
   * @example
   * 2026-11-06T01:00:00Z
   */
  rightsActiveTime?: string;
  /**
   * @remarks
   * The end user to whom the rights are assigned. For convenience accounts, use EndUserId.
   * 
   * @example
   * user-example
   */
  rightsAssignedUser?: string;
  /**
   * @remarks
   * The deadline for manual activation of the rights. This is different from RightsResourceExpireTime, which is the expiration time of the resource after activation. The time is in RFC 3339 UTC format and ends with Z.
   * 
   * @example
   * 2026-12-06T00:00:00Z
   */
  rightsExpireTime?: string;
  /**
   * @remarks
   * The GPU specification. Refer to the returned value in the rights details.
   * 
   * @example
   * eds.graphics_flagship_pro.8c16g.2g
   */
  rightsGpuSpec?: string;
  /**
   * @remarks
   * The rights ID. Use this value for activation. This is not the cloud computer resource ID.
   * 
   * @example
   * New_beds-example_0001
   */
  rightsId?: string;
  /**
   * @remarks
   * The inventory specification corresponding to the rights.
   * 
   * @example
   * eds.business_edition_office.4c8g
   */
  rightsInventorySpec?: string;
  /**
   * @remarks
   * The rights period code.
   * 
   * @example
   * BUSINESS_WEEK_1
   */
  rightsPeriod?: string;
  /**
   * @remarks
   * The area to which the rights belong. This cannot replace the resource region in a new activation request.
   * 
   * @example
   * cn-east
   */
  rightsResourceArea?: string;
  /**
   * @remarks
   * The actual expiration time of the resource. This is different from the deadline for rights activation. The time is in RFC 3339 UTC format and ends with Z.
   * 
   * @example
   * 2026-12-06T01:00:00Z
   */
  rightsResourceExpireTime?: string;
  /**
   * @remarks
   * The ID of the resource associated with the rights. This value is returned after the resource is created.
   * 
   * @example
   * ecd-example
   */
  rightsResourceId?: string;
  /**
   * @remarks
   * The region ID of the resource. This is configured separately from the POP request routing region.
   * 
   * @example
   * cn-hangzhou
   */
  rightsResourceRegion?: string;
  /**
   * @remarks
   * The status of the associated resource. Refer to the returned value for the actual status.
   * 
   * @example
   * Running
   */
  rightsResourceStatus?: string;
  /**
   * @remarks
   * The rights resource type. Use Desktop for regular cloud computers. For other commodities, specify the actual rights type.
   * 
   * @example
   * Desktop
   */
  rightsResourceType?: string;
  /**
   * @remarks
   * The name of the rights source.
   * 
   * @example
   * Channel Service Provider Co., Ltd
   */
  rightsSourceName?: string;
  /**
   * @remarks
   * The rights specification code. Refer to the rights query results for the actual value.
   * 
   * @example
   * eds.business_edition_office.4c8g
   */
  rightsSpec?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of value-added feature information associated with the rights.
   * 
   * @example
   * []
   */
  valuePackageInfos?: ListRightsResponseBodyDataValuePackageInfos[];
  static names(): { [key: string]: string } {
    return {
      addDataDiskSize: 'AddDataDiskSize',
      addRootDiskSize: 'AddRootDiskSize',
      aiDesktop: 'AiDesktop',
      businessSceneCode: 'BusinessSceneCode',
      calculatingCode: 'CalculatingCode',
      dataDiskSize: 'DataDiskSize',
      gmtCreate: 'GmtCreate',
      hibernate: 'Hibernate',
      monthlyCredit: 'MonthlyCredit',
      overseas: 'Overseas',
      rightsActiveFailureCause: 'RightsActiveFailureCause',
      rightsActiveStatus: 'RightsActiveStatus',
      rightsActiveTime: 'RightsActiveTime',
      rightsAssignedUser: 'RightsAssignedUser',
      rightsExpireTime: 'RightsExpireTime',
      rightsGpuSpec: 'RightsGpuSpec',
      rightsId: 'RightsId',
      rightsInventorySpec: 'RightsInventorySpec',
      rightsPeriod: 'RightsPeriod',
      rightsResourceArea: 'RightsResourceArea',
      rightsResourceExpireTime: 'RightsResourceExpireTime',
      rightsResourceId: 'RightsResourceId',
      rightsResourceRegion: 'RightsResourceRegion',
      rightsResourceStatus: 'RightsResourceStatus',
      rightsResourceType: 'RightsResourceType',
      rightsSourceName: 'RightsSourceName',
      rightsSpec: 'RightsSpec',
      systemDiskSize: 'SystemDiskSize',
      valuePackageInfos: 'ValuePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDataDiskSize: 'number',
      addRootDiskSize: 'number',
      aiDesktop: 'boolean',
      businessSceneCode: 'string',
      calculatingCode: 'string',
      dataDiskSize: 'number',
      gmtCreate: 'string',
      hibernate: 'number',
      monthlyCredit: 'string',
      overseas: 'number',
      rightsActiveFailureCause: 'string',
      rightsActiveStatus: 'string',
      rightsActiveTime: 'string',
      rightsAssignedUser: 'string',
      rightsExpireTime: 'string',
      rightsGpuSpec: 'string',
      rightsId: 'string',
      rightsInventorySpec: 'string',
      rightsPeriod: 'string',
      rightsResourceArea: 'string',
      rightsResourceExpireTime: 'string',
      rightsResourceId: 'string',
      rightsResourceRegion: 'string',
      rightsResourceStatus: 'string',
      rightsResourceType: 'string',
      rightsSourceName: 'string',
      rightsSpec: 'string',
      systemDiskSize: 'number',
      valuePackageInfos: { 'type': 'array', 'itemType': ListRightsResponseBodyDataValuePackageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.valuePackageInfos)) {
      $dara.Model.validateArray(this.valuePackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRightsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing result code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of rights on the current page.
   * 
   * @example
   * []
   */
  data?: ListRightsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The maximum number of results per page. Specify a positive integer from 1 to 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The description of the processing result. This is used for troubleshooting when a failure occurs.
   * 
   * @example
   * The request is processed successfully
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that the current query has ended. If the value is not empty, pass it exactly as it is in the next query. The example is for illustration purposes only.
   * 
   * @example
   * b5f4e3d2c1a09876b5f4e3d2c1a09876
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request. This is used to troubleshoot call issues.
   * 
   * @example
   * 01A00000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A successful activation request does not mean that the resource has been created.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of rights that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListRightsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

