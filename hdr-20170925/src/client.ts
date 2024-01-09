// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeRecoveryPointRequest extends $tea.Model {
  eipAddressId?: string;
  recoveryCpu?: number;
  recoveryEssdPerformanceLevel?: string;
  recoveryInstanceName?: string;
  recoveryInstanceType?: string;
  recoveryIpAddress?: string;
  recoveryMemory?: number;
  recoveryNetwork?: string;
  recoveryPointId?: string;
  recoveryPointTime?: number;
  recoveryPostScriptContent?: string;
  recoveryPostScriptType?: string;
  recoveryReserveIp?: boolean;
  recoveryUseDhcp?: boolean;
  recoveryUseEssd?: boolean;
  recoveryUseSsd?: boolean;
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAddressId: 'EipAddressId',
      recoveryCpu: 'RecoveryCpu',
      recoveryEssdPerformanceLevel: 'RecoveryEssdPerformanceLevel',
      recoveryInstanceName: 'RecoveryInstanceName',
      recoveryInstanceType: 'RecoveryInstanceType',
      recoveryIpAddress: 'RecoveryIpAddress',
      recoveryMemory: 'RecoveryMemory',
      recoveryNetwork: 'RecoveryNetwork',
      recoveryPointId: 'RecoveryPointId',
      recoveryPointTime: 'RecoveryPointTime',
      recoveryPostScriptContent: 'RecoveryPostScriptContent',
      recoveryPostScriptType: 'RecoveryPostScriptType',
      recoveryReserveIp: 'RecoveryReserveIp',
      recoveryUseDhcp: 'RecoveryUseDhcp',
      recoveryUseEssd: 'RecoveryUseEssd',
      recoveryUseSsd: 'RecoveryUseSsd',
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddressId: 'string',
      recoveryCpu: 'number',
      recoveryEssdPerformanceLevel: 'string',
      recoveryInstanceName: 'string',
      recoveryInstanceType: 'string',
      recoveryIpAddress: 'string',
      recoveryMemory: 'number',
      recoveryNetwork: 'string',
      recoveryPointId: 'string',
      recoveryPointTime: 'number',
      recoveryPostScriptContent: 'string',
      recoveryPostScriptType: 'string',
      recoveryReserveIp: 'boolean',
      recoveryUseDhcp: 'boolean',
      recoveryUseEssd: 'boolean',
      recoveryUseSsd: 'boolean',
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRecoveryPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRecoveryPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeRecoveryPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeRecoveryPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFailoverRequest extends $tea.Model {
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFailoverResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFailoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CommitFailoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CommitFailoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecoveryPlanRequest extends $tea.Model {
  content?: string;
  direction?: string;
  name?: string;
  sitePairId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      direction: 'Direction',
      name: 'Name',
      sitePairId: 'SitePairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      direction: 'string',
      name: 'string',
      sitePairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecoveryPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSitePairRequest extends $tea.Model {
  primarySiteName?: string;
  primarySiteRegionId?: string;
  primarySiteType?: string;
  primarySiteVpcId?: string;
  primarySiteZoneId?: string;
  secondarySiteName?: string;
  secondarySiteRegionId?: string;
  secondarySiteType?: string;
  secondarySiteVpcId?: string;
  secondarySiteZoneId?: string;
  securityToken?: string;
  sitePairType?: string;
  static names(): { [key: string]: string } {
    return {
      primarySiteName: 'PrimarySiteName',
      primarySiteRegionId: 'PrimarySiteRegionId',
      primarySiteType: 'PrimarySiteType',
      primarySiteVpcId: 'PrimarySiteVpcId',
      primarySiteZoneId: 'PrimarySiteZoneId',
      secondarySiteName: 'SecondarySiteName',
      secondarySiteRegionId: 'SecondarySiteRegionId',
      secondarySiteType: 'SecondarySiteType',
      secondarySiteVpcId: 'SecondarySiteVpcId',
      secondarySiteZoneId: 'SecondarySiteZoneId',
      securityToken: 'SecurityToken',
      sitePairType: 'SitePairType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primarySiteName: 'string',
      primarySiteRegionId: 'string',
      primarySiteType: 'string',
      primarySiteVpcId: 'string',
      primarySiteZoneId: 'string',
      secondarySiteName: 'string',
      secondarySiteRegionId: 'string',
      secondarySiteType: 'string',
      secondarySiteVpcId: 'string',
      secondarySiteZoneId: 'string',
      securityToken: 'string',
      sitePairType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSitePairResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  primarySiteId?: string;
  requestId?: string;
  secondarySiteId?: string;
  sitePairId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      primarySiteId: 'PrimarySiteId',
      requestId: 'RequestId',
      secondarySiteId: 'SecondarySiteId',
      sitePairId: 'SitePairId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      primarySiteId: 'string',
      requestId: 'string',
      secondarySiteId: 'string',
      sitePairId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSitePairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSitePairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSitePairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecoveryPlanRequest extends $tea.Model {
  recoveryPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecoveryPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSitePairRequest extends $tea.Model {
  securityToken?: string;
  sitePairId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      sitePairId: 'SitePairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      sitePairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSitePairResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSitePairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSitePairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSitePairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableInstanceTypesRequest extends $tea.Model {
  chargeType?: string;
  diskType?: string;
  filter?: string;
  ioOptimized?: boolean;
  network?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  securityToken?: string;
  sortBy?: string;
  userClient?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      filter: 'Filter',
      ioOptimized: 'IoOptimized',
      network: 'Network',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      securityToken: 'SecurityToken',
      sortBy: 'SortBy',
      userClient: 'UserClient',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      diskType: 'string',
      filter: 'string',
      ioOptimized: 'boolean',
      network: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      securityToken: 'string',
      sortBy: 'string',
      userClient: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableInstanceTypesResponseBody extends $tea.Model {
  code?: string;
  instanceTypes?: DescribeAvailableInstanceTypesResponseBodyInstanceTypes;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceTypes: 'InstanceTypes',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceTypes: DescribeAvailableInstanceTypesResponseBodyInstanceTypes,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableInstanceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableInstanceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableInstanceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInfrastructuresRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  siteId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      siteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInfrastructuresResponseBody extends $tea.Model {
  code?: string;
  infrastructures?: DescribeInfrastructuresResponseBodyInfrastructures;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      infrastructures: 'Infrastructures',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      infrastructures: DescribeInfrastructuresResponseBodyInfrastructures,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInfrastructuresResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInfrastructuresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInfrastructuresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlanRequest extends $tea.Model {
  recoveryPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlanResponseBody extends $tea.Model {
  code?: string;
  content?: string;
  direction?: string;
  message?: string;
  name?: string;
  recoveryPlanId?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      direction: 'Direction',
      message: 'Message',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      direction: 'string',
      message: 'string',
      name: 'string',
      recoveryPlanId: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlansRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sitePairId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sitePairId: 'SitePairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sitePairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlansResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  recoveryPlans?: DescribeRecoveryPlansResponseBodyRecoveryPlans;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPlans: 'RecoveryPlans',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPlans: DescribeRecoveryPlansResponseBodyRecoveryPlans,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecoveryPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecoveryPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPointsRequest extends $tea.Model {
  securityToken?: string;
  serverId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      serverId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPointsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  recoveryPoints?: DescribeRecoveryPointsResponseBodyRecoveryPoints;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      recoveryPoints: 'RecoveryPoints',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      recoveryPoints: DescribeRecoveryPointsResponseBodyRecoveryPoints,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecoveryPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecoveryPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRequest extends $tea.Model {
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerResponseBody extends $tea.Model {
  agentPort?: number;
  agentVersion?: string;
  alias?: string;
  code?: string;
  connectionStatus?: string;
  consistent?: boolean;
  cpu?: number;
  crashConsistentPointPolicy?: string;
  disks?: string;
  errno?: string;
  fullSyncCurrentSize?: number;
  fullSyncProgress?: number;
  fullSyncStartTime?: number;
  fullSyncTotalSize?: number;
  hostname?: string;
  incrementalSyncStartTime?: number;
  ipAddress?: string;
  latestRecoveryPointTime?: string;
  memory?: number;
  message?: string;
  operations?: string;
  originalInstanceId?: string;
  osDetail?: string;
  osType?: string;
  primarySiteId?: string;
  recoveredInstanceId?: string;
  recoveredIpAddress?: string;
  recoveryCpu?: number;
  recoveryEssdPerformanceLevel?: string;
  recoveryInstanceName?: string;
  recoveryInstanceType?: string;
  recoveryIpAddress?: string;
  recoveryMemory?: number;
  recoveryNetwork?: string;
  recoveryPostScriptContent?: string;
  recoveryPostScriptType?: string;
  recoveryReserveIp?: boolean;
  recoveryUseDhcp?: boolean;
  recoveryUseEssd?: boolean;
  recoveryUseSsd?: boolean;
  replicationInfrastructureId?: string;
  replicationInfrastructureType?: string;
  replicationNetwork?: string;
  replicationUseDhcp?: boolean;
  replicationUseEssd?: boolean;
  replicationUseOriginalInstance?: boolean;
  replicationUseSsd?: boolean;
  requestId?: string;
  rpo?: number;
  secondarySiteId?: string;
  serverId?: string;
  sourceGatewayVersion?: string;
  status?: string;
  success?: boolean;
  targetGatewayVersion?: string;
  taskId?: string;
  testFailoverStatus?: string;
  testRecoveredInstanceId?: string;
  testRecoveredInstanceName?: string;
  testRecoveredIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      agentPort: 'AgentPort',
      agentVersion: 'AgentVersion',
      alias: 'Alias',
      code: 'Code',
      connectionStatus: 'ConnectionStatus',
      consistent: 'Consistent',
      cpu: 'Cpu',
      crashConsistentPointPolicy: 'CrashConsistentPointPolicy',
      disks: 'Disks',
      errno: 'Errno',
      fullSyncCurrentSize: 'FullSyncCurrentSize',
      fullSyncProgress: 'FullSyncProgress',
      fullSyncStartTime: 'FullSyncStartTime',
      fullSyncTotalSize: 'FullSyncTotalSize',
      hostname: 'Hostname',
      incrementalSyncStartTime: 'IncrementalSyncStartTime',
      ipAddress: 'IpAddress',
      latestRecoveryPointTime: 'LatestRecoveryPointTime',
      memory: 'Memory',
      message: 'Message',
      operations: 'Operations',
      originalInstanceId: 'OriginalInstanceId',
      osDetail: 'OsDetail',
      osType: 'OsType',
      primarySiteId: 'PrimarySiteId',
      recoveredInstanceId: 'RecoveredInstanceId',
      recoveredIpAddress: 'RecoveredIpAddress',
      recoveryCpu: 'RecoveryCpu',
      recoveryEssdPerformanceLevel: 'RecoveryEssdPerformanceLevel',
      recoveryInstanceName: 'RecoveryInstanceName',
      recoveryInstanceType: 'RecoveryInstanceType',
      recoveryIpAddress: 'RecoveryIpAddress',
      recoveryMemory: 'RecoveryMemory',
      recoveryNetwork: 'RecoveryNetwork',
      recoveryPostScriptContent: 'RecoveryPostScriptContent',
      recoveryPostScriptType: 'RecoveryPostScriptType',
      recoveryReserveIp: 'RecoveryReserveIp',
      recoveryUseDhcp: 'RecoveryUseDhcp',
      recoveryUseEssd: 'RecoveryUseEssd',
      recoveryUseSsd: 'RecoveryUseSsd',
      replicationInfrastructureId: 'ReplicationInfrastructureId',
      replicationInfrastructureType: 'ReplicationInfrastructureType',
      replicationNetwork: 'ReplicationNetwork',
      replicationUseDhcp: 'ReplicationUseDhcp',
      replicationUseEssd: 'ReplicationUseEssd',
      replicationUseOriginalInstance: 'ReplicationUseOriginalInstance',
      replicationUseSsd: 'ReplicationUseSsd',
      requestId: 'RequestId',
      rpo: 'Rpo',
      secondarySiteId: 'SecondarySiteId',
      serverId: 'ServerId',
      sourceGatewayVersion: 'SourceGatewayVersion',
      status: 'Status',
      success: 'Success',
      targetGatewayVersion: 'TargetGatewayVersion',
      taskId: 'TaskId',
      testFailoverStatus: 'TestFailoverStatus',
      testRecoveredInstanceId: 'TestRecoveredInstanceId',
      testRecoveredInstanceName: 'TestRecoveredInstanceName',
      testRecoveredIpAddress: 'TestRecoveredIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPort: 'number',
      agentVersion: 'string',
      alias: 'string',
      code: 'string',
      connectionStatus: 'string',
      consistent: 'boolean',
      cpu: 'number',
      crashConsistentPointPolicy: 'string',
      disks: 'string',
      errno: 'string',
      fullSyncCurrentSize: 'number',
      fullSyncProgress: 'number',
      fullSyncStartTime: 'number',
      fullSyncTotalSize: 'number',
      hostname: 'string',
      incrementalSyncStartTime: 'number',
      ipAddress: 'string',
      latestRecoveryPointTime: 'string',
      memory: 'number',
      message: 'string',
      operations: 'string',
      originalInstanceId: 'string',
      osDetail: 'string',
      osType: 'string',
      primarySiteId: 'string',
      recoveredInstanceId: 'string',
      recoveredIpAddress: 'string',
      recoveryCpu: 'number',
      recoveryEssdPerformanceLevel: 'string',
      recoveryInstanceName: 'string',
      recoveryInstanceType: 'string',
      recoveryIpAddress: 'string',
      recoveryMemory: 'number',
      recoveryNetwork: 'string',
      recoveryPostScriptContent: 'string',
      recoveryPostScriptType: 'string',
      recoveryReserveIp: 'boolean',
      recoveryUseDhcp: 'boolean',
      recoveryUseEssd: 'boolean',
      recoveryUseSsd: 'boolean',
      replicationInfrastructureId: 'string',
      replicationInfrastructureType: 'string',
      replicationNetwork: 'string',
      replicationUseDhcp: 'boolean',
      replicationUseEssd: 'boolean',
      replicationUseOriginalInstance: 'boolean',
      replicationUseSsd: 'boolean',
      requestId: 'string',
      rpo: 'number',
      secondarySiteId: 'string',
      serverId: 'string',
      sourceGatewayVersion: 'string',
      status: 'string',
      success: 'boolean',
      targetGatewayVersion: 'string',
      taskId: 'string',
      testFailoverStatus: 'string',
      testRecoveredInstanceId: 'string',
      testRecoveredInstanceName: 'string',
      testRecoveredIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  serverIds?: string;
  sitePairId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      serverIds: 'ServerIds',
      sitePairId: 'SitePairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      serverIds: 'string',
      sitePairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  servers?: DescribeServersResponseBodyServers;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      servers: 'Servers',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      servers: DescribeServersResponseBodyServers,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteRequest extends $tea.Model {
  siteId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  name?: string;
  regionId?: string;
  requestId?: string;
  siteId?: string;
  success?: boolean;
  type?: string;
  userSecurityGroupId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      siteId: 'SiteId',
      success: 'Success',
      type: 'Type',
      userSecurityGroupId: 'UserSecurityGroupId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      siteId: 'string',
      success: 'boolean',
      type: 'string',
      userSecurityGroupId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairRequest extends $tea.Model {
  securityToken?: string;
  sitePairId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      sitePairId: 'SitePairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      sitePairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairResponseBody extends $tea.Model {
  code?: string;
  createdTime?: number;
  message?: string;
  primarySiteId?: string;
  primarySiteName?: string;
  requestId?: string;
  secondarySiteId?: string;
  secondarySiteName?: string;
  sitePairId?: string;
  sitePairType?: string;
  success?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createdTime: 'CreatedTime',
      message: 'Message',
      primarySiteId: 'PrimarySiteId',
      primarySiteName: 'PrimarySiteName',
      requestId: 'RequestId',
      secondarySiteId: 'SecondarySiteId',
      secondarySiteName: 'SecondarySiteName',
      sitePairId: 'SitePairId',
      sitePairType: 'SitePairType',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createdTime: 'number',
      message: 'string',
      primarySiteId: 'string',
      primarySiteName: 'string',
      requestId: 'string',
      secondarySiteId: 'string',
      secondarySiteName: 'string',
      sitePairId: 'string',
      sitePairType: 'string',
      success: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSitePairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSitePairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsRequest extends $tea.Model {
  securityToken?: string;
  sitePairId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      sitePairId: 'SitePairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      sitePairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  primarySiteGatewayInfo?: DescribeSitePairStatisticsResponseBodyPrimarySiteGatewayInfo;
  primarySiteServers?: DescribeSitePairStatisticsResponseBodyPrimarySiteServers;
  requestId?: string;
  secondarySiteGatewayInfo?: DescribeSitePairStatisticsResponseBodySecondarySiteGatewayInfo;
  secondarySiteServers?: DescribeSitePairStatisticsResponseBodySecondarySiteServers;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      primarySiteGatewayInfo: 'PrimarySiteGatewayInfo',
      primarySiteServers: 'PrimarySiteServers',
      requestId: 'RequestId',
      secondarySiteGatewayInfo: 'SecondarySiteGatewayInfo',
      secondarySiteServers: 'SecondarySiteServers',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      primarySiteGatewayInfo: DescribeSitePairStatisticsResponseBodyPrimarySiteGatewayInfo,
      primarySiteServers: DescribeSitePairStatisticsResponseBodyPrimarySiteServers,
      requestId: 'string',
      secondarySiteGatewayInfo: DescribeSitePairStatisticsResponseBodySecondarySiteGatewayInfo,
      secondarySiteServers: DescribeSitePairStatisticsResponseBodySecondarySiteServers,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSitePairStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSitePairStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sitePairType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sitePairType: 'SitePairType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sitePairType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  sitePairs?: DescribeSitePairsResponseBodySitePairs;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sitePairs: 'SitePairs',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sitePairs: DescribeSitePairsResponseBodySitePairs,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSitePairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSitePairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBody extends $tea.Model {
  code?: string;
  dbServerCount?: number;
  message?: string;
  replicationDetails?: DescribeSummaryResponseBodyReplicationDetails;
  requestId?: string;
  serverCount?: number;
  siteCount?: number;
  success?: boolean;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dbServerCount: 'DbServerCount',
      message: 'Message',
      replicationDetails: 'ReplicationDetails',
      requestId: 'RequestId',
      serverCount: 'ServerCount',
      siteCount: 'SiteCount',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dbServerCount: 'number',
      message: 'string',
      replicationDetails: DescribeSummaryResponseBodyReplicationDetails,
      requestId: 'string',
      serverCount: 'number',
      siteCount: 'number',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBody extends $tea.Model {
  code?: string;
  content?: string;
  createdTime?: number;
  message?: string;
  name?: string;
  progress?: number;
  requestId?: string;
  statusCode?: string;
  success?: boolean;
  taskId?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      createdTime: 'CreatedTime',
      message: 'Message',
      name: 'Name',
      progress: 'Progress',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      success: 'Success',
      taskId: 'TaskId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      createdTime: 'number',
      message: 'string',
      name: 'string',
      progress: 'number',
      requestId: 'string',
      statusCode: 'string',
      success: 'boolean',
      taskId: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  sitePairId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      sitePairId: 'SitePairId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      sitePairId: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  tasks?: DescribeTasksResponseBodyTasks;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      tasks: DescribeTasksResponseBodyTasks,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableReplicationRequest extends $tea.Model {
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableReplicationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableReplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableReplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableReplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableReplicationRequest extends $tea.Model {
  crashConsistentPointPolicy?: string;
  recoveryNetwork?: string;
  replicationNetwork?: string;
  replicationUseEssd?: boolean;
  replicationUseSsd?: boolean;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      crashConsistentPointPolicy: 'CrashConsistentPointPolicy',
      recoveryNetwork: 'RecoveryNetwork',
      replicationNetwork: 'ReplicationNetwork',
      replicationUseEssd: 'ReplicationUseEssd',
      replicationUseSsd: 'ReplicationUseSsd',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crashConsistentPointPolicy: 'string',
      recoveryNetwork: 'string',
      replicationNetwork: 'string',
      replicationUseEssd: 'boolean',
      replicationUseSsd: 'boolean',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableReplicationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableReplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableReplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableReplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailbackRequest extends $tea.Model {
  recoveryCpu?: number;
  recoveryInfrastructureId?: string;
  recoveryInstanceName?: string;
  recoveryInstanceType?: string;
  recoveryIpAddress?: string;
  recoveryMemory?: number;
  recoveryNetwork?: string;
  recoveryPointId?: string;
  recoveryPostScriptContent?: string;
  recoveryPostScriptType?: string;
  recoveryReserveIp?: boolean;
  recoveryUseDhcp?: boolean;
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      recoveryCpu: 'RecoveryCpu',
      recoveryInfrastructureId: 'RecoveryInfrastructureId',
      recoveryInstanceName: 'RecoveryInstanceName',
      recoveryInstanceType: 'RecoveryInstanceType',
      recoveryIpAddress: 'RecoveryIpAddress',
      recoveryMemory: 'RecoveryMemory',
      recoveryNetwork: 'RecoveryNetwork',
      recoveryPointId: 'RecoveryPointId',
      recoveryPostScriptContent: 'RecoveryPostScriptContent',
      recoveryPostScriptType: 'RecoveryPostScriptType',
      recoveryReserveIp: 'RecoveryReserveIp',
      recoveryUseDhcp: 'RecoveryUseDhcp',
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryCpu: 'number',
      recoveryInfrastructureId: 'string',
      recoveryInstanceName: 'string',
      recoveryInstanceType: 'string',
      recoveryIpAddress: 'string',
      recoveryMemory: 'number',
      recoveryNetwork: 'string',
      recoveryPointId: 'string',
      recoveryPostScriptContent: 'string',
      recoveryPostScriptType: 'string',
      recoveryReserveIp: 'boolean',
      recoveryUseDhcp: 'boolean',
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailbackResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FailbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FailbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForcedFailoverRequest extends $tea.Model {
  eipAddressId?: string;
  recoveryCpu?: number;
  recoveryEssdPerformanceLevel?: string;
  recoveryInstanceName?: string;
  recoveryInstanceType?: string;
  recoveryIpAddress?: string;
  recoveryMemory?: number;
  recoveryNetwork?: string;
  recoveryPointId?: string;
  recoveryPointTime?: number;
  recoveryPostScriptContent?: string;
  recoveryPostScriptType?: string;
  recoveryReserveIp?: boolean;
  recoveryUseDhcp?: boolean;
  recoveryUseEssd?: boolean;
  recoveryUseSsd?: boolean;
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAddressId: 'EipAddressId',
      recoveryCpu: 'RecoveryCpu',
      recoveryEssdPerformanceLevel: 'RecoveryEssdPerformanceLevel',
      recoveryInstanceName: 'RecoveryInstanceName',
      recoveryInstanceType: 'RecoveryInstanceType',
      recoveryIpAddress: 'RecoveryIpAddress',
      recoveryMemory: 'RecoveryMemory',
      recoveryNetwork: 'RecoveryNetwork',
      recoveryPointId: 'RecoveryPointId',
      recoveryPointTime: 'RecoveryPointTime',
      recoveryPostScriptContent: 'RecoveryPostScriptContent',
      recoveryPostScriptType: 'RecoveryPostScriptType',
      recoveryReserveIp: 'RecoveryReserveIp',
      recoveryUseDhcp: 'RecoveryUseDhcp',
      recoveryUseEssd: 'RecoveryUseEssd',
      recoveryUseSsd: 'RecoveryUseSsd',
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddressId: 'string',
      recoveryCpu: 'number',
      recoveryEssdPerformanceLevel: 'string',
      recoveryInstanceName: 'string',
      recoveryInstanceType: 'string',
      recoveryIpAddress: 'string',
      recoveryMemory: 'number',
      recoveryNetwork: 'string',
      recoveryPointId: 'string',
      recoveryPointTime: 'number',
      recoveryPostScriptContent: 'string',
      recoveryPostScriptType: 'string',
      recoveryReserveIp: 'boolean',
      recoveryUseDhcp: 'boolean',
      recoveryUseEssd: 'boolean',
      recoveryUseSsd: 'boolean',
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForcedFailoverResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForcedFailoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ForcedFailoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ForcedFailoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServersRequest extends $tea.Model {
  agentPort?: number;
  serverInstancesInfo?: string;
  sitePairId?: string;
  static names(): { [key: string]: string } {
    return {
      agentPort: 'AgentPort',
      serverInstancesInfo: 'ServerInstancesInfo',
      sitePairId: 'SitePairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPort: 'number',
      serverInstancesInfo: 'string',
      sitePairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReversedDisableReplicationRequest extends $tea.Model {
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReversedDisableReplicationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReversedDisableReplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReversedDisableReplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReversedDisableReplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReversedEnableReplicationRequest extends $tea.Model {
  appConsistentPointPolicy?: string;
  crashConsistentPointPolicy?: string;
  recoveryNetwork?: string;
  replicationComputeResource?: string;
  replicationDatastore?: string;
  replicationDns?: string;
  replicationGateway?: string;
  replicationInfrastructureId?: string;
  replicationIpAddress?: string;
  replicationLocation?: string;
  replicationNetMask?: string;
  replicationNetwork?: string;
  replicationUseDhcp?: boolean;
  replicationUseOriginalInstance?: boolean;
  securityToken?: string;
  serverId?: string;
  shadowInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      appConsistentPointPolicy: 'AppConsistentPointPolicy',
      crashConsistentPointPolicy: 'CrashConsistentPointPolicy',
      recoveryNetwork: 'RecoveryNetwork',
      replicationComputeResource: 'ReplicationComputeResource',
      replicationDatastore: 'ReplicationDatastore',
      replicationDns: 'ReplicationDns',
      replicationGateway: 'ReplicationGateway',
      replicationInfrastructureId: 'ReplicationInfrastructureId',
      replicationIpAddress: 'ReplicationIpAddress',
      replicationLocation: 'ReplicationLocation',
      replicationNetMask: 'ReplicationNetMask',
      replicationNetwork: 'ReplicationNetwork',
      replicationUseDhcp: 'ReplicationUseDhcp',
      replicationUseOriginalInstance: 'ReplicationUseOriginalInstance',
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
      shadowInstanceType: 'ShadowInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConsistentPointPolicy: 'string',
      crashConsistentPointPolicy: 'string',
      recoveryNetwork: 'string',
      replicationComputeResource: 'string',
      replicationDatastore: 'string',
      replicationDns: 'string',
      replicationGateway: 'string',
      replicationInfrastructureId: 'string',
      replicationIpAddress: 'string',
      replicationLocation: 'string',
      replicationNetMask: 'string',
      replicationNetwork: 'string',
      replicationUseDhcp: 'boolean',
      replicationUseOriginalInstance: 'boolean',
      securityToken: 'string',
      serverId: 'string',
      shadowInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReversedEnableReplicationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReversedEnableReplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReversedEnableReplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReversedEnableReplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestCleanupRequest extends $tea.Model {
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestCleanupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestCleanupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TestCleanupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TestCleanupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestFailoverRequest extends $tea.Model {
  eipAddressId?: string;
  recoveryCpu?: number;
  recoveryEssdPerformanceLevel?: string;
  recoveryInstanceName?: string;
  recoveryInstanceType?: string;
  recoveryIpAddress?: string;
  recoveryMemory?: number;
  recoveryNetwork?: string;
  recoveryPointId?: string;
  recoveryPointTime?: number;
  recoveryPostScriptContent?: string;
  recoveryPostScriptType?: string;
  recoveryReserveIp?: boolean;
  recoveryUseDhcp?: boolean;
  recoveryUseEssd?: boolean;
  recoveryUseSsd?: boolean;
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAddressId: 'EipAddressId',
      recoveryCpu: 'RecoveryCpu',
      recoveryEssdPerformanceLevel: 'RecoveryEssdPerformanceLevel',
      recoveryInstanceName: 'RecoveryInstanceName',
      recoveryInstanceType: 'RecoveryInstanceType',
      recoveryIpAddress: 'RecoveryIpAddress',
      recoveryMemory: 'RecoveryMemory',
      recoveryNetwork: 'RecoveryNetwork',
      recoveryPointId: 'RecoveryPointId',
      recoveryPointTime: 'RecoveryPointTime',
      recoveryPostScriptContent: 'RecoveryPostScriptContent',
      recoveryPostScriptType: 'RecoveryPostScriptType',
      recoveryReserveIp: 'RecoveryReserveIp',
      recoveryUseDhcp: 'RecoveryUseDhcp',
      recoveryUseEssd: 'RecoveryUseEssd',
      recoveryUseSsd: 'RecoveryUseSsd',
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddressId: 'string',
      recoveryCpu: 'number',
      recoveryEssdPerformanceLevel: 'string',
      recoveryInstanceName: 'string',
      recoveryInstanceType: 'string',
      recoveryIpAddress: 'string',
      recoveryMemory: 'number',
      recoveryNetwork: 'string',
      recoveryPointId: 'string',
      recoveryPointTime: 'number',
      recoveryPostScriptContent: 'string',
      recoveryPostScriptType: 'string',
      recoveryReserveIp: 'boolean',
      recoveryUseDhcp: 'boolean',
      recoveryUseEssd: 'boolean',
      recoveryUseSsd: 'boolean',
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestFailoverResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestFailoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TestFailoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TestFailoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerReversedRegisterRequest extends $tea.Model {
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerReversedRegisterResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerReversedRegisterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerReversedRegisterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerReversedRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterServerRequest extends $tea.Model {
  securityToken?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterServerResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnregisterServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnregisterServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecoveryPlanRequest extends $tea.Model {
  content?: string;
  name?: string;
  recoveryPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      recoveryPlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecoveryPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableInstanceTypesResponseBodyInstanceTypes extends $tea.Model {
  instanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInfrastructuresResponseBodyInfrastructuresInfrastructure extends $tea.Model {
  errno?: string;
  infrastructureId?: string;
  ipAddress?: string;
  name?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errno: 'Errno',
      infrastructureId: 'InfrastructureId',
      ipAddress: 'IpAddress',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errno: 'string',
      infrastructureId: 'string',
      ipAddress: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInfrastructuresResponseBodyInfrastructures extends $tea.Model {
  infrastructure?: DescribeInfrastructuresResponseBodyInfrastructuresInfrastructure[];
  static names(): { [key: string]: string } {
    return {
      infrastructure: 'infrastructure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infrastructure: { 'type': 'array', 'itemType': DescribeInfrastructuresResponseBodyInfrastructuresInfrastructure },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan extends $tea.Model {
  direction?: string;
  name?: string;
  recoveryPlanId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      name: 'string',
      recoveryPlanId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPlansResponseBodyRecoveryPlans extends $tea.Model {
  recoveryPlan?: DescribeRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan[];
  static names(): { [key: string]: string } {
    return {
      recoveryPlan: 'recoveryPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlan: { 'type': 'array', 'itemType': DescribeRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPointsResponseBodyRecoveryPointsRecoveryPoint extends $tea.Model {
  applicationConsistent?: boolean;
  disableReason?: string;
  disabled?: boolean;
  recoveryPointId?: string;
  recoveryPointTime?: number;
  used?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationConsistent: 'ApplicationConsistent',
      disableReason: 'DisableReason',
      disabled: 'Disabled',
      recoveryPointId: 'RecoveryPointId',
      recoveryPointTime: 'RecoveryPointTime',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConsistent: 'boolean',
      disableReason: 'string',
      disabled: 'boolean',
      recoveryPointId: 'string',
      recoveryPointTime: 'number',
      used: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoveryPointsResponseBodyRecoveryPoints extends $tea.Model {
  recoveryPoint?: DescribeRecoveryPointsResponseBodyRecoveryPointsRecoveryPoint[];
  static names(): { [key: string]: string } {
    return {
      recoveryPoint: 'recoveryPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPoint: { 'type': 'array', 'itemType': DescribeRecoveryPointsResponseBodyRecoveryPointsRecoveryPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServersResponseBodyServersServer extends $tea.Model {
  agentPort?: number;
  agentVersion?: string;
  alias?: string;
  connectionStatus?: string;
  consistent?: boolean;
  cpu?: number;
  crashConsistentPointPolicy?: string;
  disks?: string;
  errno?: string;
  fullSyncCurrentSize?: number;
  fullSyncProgress?: number;
  fullSyncStartTime?: number;
  fullSyncTotalSize?: number;
  hostname?: string;
  incrementalSyncStartTime?: number;
  instanceId?: string;
  ipAddress?: string;
  latestRecoveryPointTime?: number;
  memory?: number;
  operations?: string;
  originalInstanceId?: string;
  osDetail?: string;
  osType?: string;
  primarySiteId?: string;
  recoveredInstanceId?: string;
  recoveredInstanceName?: string;
  recoveredIpAddress?: string;
  recoveryCpu?: number;
  recoveryEssdPerformanceLevel?: string;
  recoveryInstanceName?: string;
  recoveryInstanceType?: string;
  recoveryIpAddress?: string;
  recoveryMemory?: number;
  recoveryNetwork?: string;
  recoveryPostScriptContent?: string;
  recoveryPostScriptType?: string;
  recoveryReserveIp?: boolean;
  recoveryUseDhcp?: boolean;
  recoveryUseEssd?: boolean;
  recoveryUseSsd?: boolean;
  replicationInfrastructureId?: string;
  replicationInfrastructureType?: string;
  replicationNetwork?: string;
  replicationUseDhcp?: boolean;
  replicationUseEssd?: boolean;
  replicationUseOriginalInstance?: boolean;
  replicationUseSsd?: boolean;
  rpo?: number;
  secondarySiteId?: string;
  serverId?: string;
  sourceGatewayVersion?: string;
  status?: string;
  targetGatewayVersion?: string;
  taskId?: string;
  testFailoverStatus?: string;
  testRecoveredInstanceId?: string;
  testRecoveredInstanceName?: string;
  testRecoveredIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      agentPort: 'AgentPort',
      agentVersion: 'AgentVersion',
      alias: 'Alias',
      connectionStatus: 'ConnectionStatus',
      consistent: 'Consistent',
      cpu: 'Cpu',
      crashConsistentPointPolicy: 'CrashConsistentPointPolicy',
      disks: 'Disks',
      errno: 'Errno',
      fullSyncCurrentSize: 'FullSyncCurrentSize',
      fullSyncProgress: 'FullSyncProgress',
      fullSyncStartTime: 'FullSyncStartTime',
      fullSyncTotalSize: 'FullSyncTotalSize',
      hostname: 'Hostname',
      incrementalSyncStartTime: 'IncrementalSyncStartTime',
      instanceId: 'InstanceId',
      ipAddress: 'IpAddress',
      latestRecoveryPointTime: 'LatestRecoveryPointTime',
      memory: 'Memory',
      operations: 'Operations',
      originalInstanceId: 'OriginalInstanceId',
      osDetail: 'OsDetail',
      osType: 'OsType',
      primarySiteId: 'PrimarySiteId',
      recoveredInstanceId: 'RecoveredInstanceId',
      recoveredInstanceName: 'RecoveredInstanceName',
      recoveredIpAddress: 'RecoveredIpAddress',
      recoveryCpu: 'RecoveryCpu',
      recoveryEssdPerformanceLevel: 'RecoveryEssdPerformanceLevel',
      recoveryInstanceName: 'RecoveryInstanceName',
      recoveryInstanceType: 'RecoveryInstanceType',
      recoveryIpAddress: 'RecoveryIpAddress',
      recoveryMemory: 'RecoveryMemory',
      recoveryNetwork: 'RecoveryNetwork',
      recoveryPostScriptContent: 'RecoveryPostScriptContent',
      recoveryPostScriptType: 'RecoveryPostScriptType',
      recoveryReserveIp: 'RecoveryReserveIp',
      recoveryUseDhcp: 'RecoveryUseDhcp',
      recoveryUseEssd: 'RecoveryUseEssd',
      recoveryUseSsd: 'RecoveryUseSsd',
      replicationInfrastructureId: 'ReplicationInfrastructureId',
      replicationInfrastructureType: 'ReplicationInfrastructureType',
      replicationNetwork: 'ReplicationNetwork',
      replicationUseDhcp: 'ReplicationUseDhcp',
      replicationUseEssd: 'ReplicationUseEssd',
      replicationUseOriginalInstance: 'ReplicationUseOriginalInstance',
      replicationUseSsd: 'ReplicationUseSsd',
      rpo: 'Rpo',
      secondarySiteId: 'SecondarySiteId',
      serverId: 'ServerId',
      sourceGatewayVersion: 'SourceGatewayVersion',
      status: 'Status',
      targetGatewayVersion: 'TargetGatewayVersion',
      taskId: 'TaskId',
      testFailoverStatus: 'TestFailoverStatus',
      testRecoveredInstanceId: 'TestRecoveredInstanceId',
      testRecoveredInstanceName: 'TestRecoveredInstanceName',
      testRecoveredIpAddress: 'TestRecoveredIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPort: 'number',
      agentVersion: 'string',
      alias: 'string',
      connectionStatus: 'string',
      consistent: 'boolean',
      cpu: 'number',
      crashConsistentPointPolicy: 'string',
      disks: 'string',
      errno: 'string',
      fullSyncCurrentSize: 'number',
      fullSyncProgress: 'number',
      fullSyncStartTime: 'number',
      fullSyncTotalSize: 'number',
      hostname: 'string',
      incrementalSyncStartTime: 'number',
      instanceId: 'string',
      ipAddress: 'string',
      latestRecoveryPointTime: 'number',
      memory: 'number',
      operations: 'string',
      originalInstanceId: 'string',
      osDetail: 'string',
      osType: 'string',
      primarySiteId: 'string',
      recoveredInstanceId: 'string',
      recoveredInstanceName: 'string',
      recoveredIpAddress: 'string',
      recoveryCpu: 'number',
      recoveryEssdPerformanceLevel: 'string',
      recoveryInstanceName: 'string',
      recoveryInstanceType: 'string',
      recoveryIpAddress: 'string',
      recoveryMemory: 'number',
      recoveryNetwork: 'string',
      recoveryPostScriptContent: 'string',
      recoveryPostScriptType: 'string',
      recoveryReserveIp: 'boolean',
      recoveryUseDhcp: 'boolean',
      recoveryUseEssd: 'boolean',
      recoveryUseSsd: 'boolean',
      replicationInfrastructureId: 'string',
      replicationInfrastructureType: 'string',
      replicationNetwork: 'string',
      replicationUseDhcp: 'boolean',
      replicationUseEssd: 'boolean',
      replicationUseOriginalInstance: 'boolean',
      replicationUseSsd: 'boolean',
      rpo: 'number',
      secondarySiteId: 'string',
      serverId: 'string',
      sourceGatewayVersion: 'string',
      status: 'string',
      targetGatewayVersion: 'string',
      taskId: 'string',
      testFailoverStatus: 'string',
      testRecoveredInstanceId: 'string',
      testRecoveredInstanceName: 'string',
      testRecoveredIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServersResponseBodyServers extends $tea.Model {
  server?: DescribeServersResponseBodyServersServer[];
  static names(): { [key: string]: string } {
    return {
      server: 'server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      server: { 'type': 'array', 'itemType': DescribeServersResponseBodyServersServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponseBodyPrimarySiteGatewayInfo extends $tea.Model {
  gatewayId?: string;
  heartbeatedTime?: number;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      heartbeatedTime: 'HeartbeatedTime',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      heartbeatedTime: 'number',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponseBodyPrimarySiteServersServer extends $tea.Model {
  agentVersion?: string;
  connectionStatus?: string;
  ipAddress?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      connectionStatus: 'ConnectionStatus',
      ipAddress: 'IpAddress',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      connectionStatus: 'string',
      ipAddress: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponseBodyPrimarySiteServers extends $tea.Model {
  server?: DescribeSitePairStatisticsResponseBodyPrimarySiteServersServer[];
  static names(): { [key: string]: string } {
    return {
      server: 'server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      server: { 'type': 'array', 'itemType': DescribeSitePairStatisticsResponseBodyPrimarySiteServersServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponseBodySecondarySiteGatewayInfo extends $tea.Model {
  gatewayId?: string;
  heartbeatedTime?: number;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      heartbeatedTime: 'HeartbeatedTime',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      heartbeatedTime: 'number',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponseBodySecondarySiteServersServer extends $tea.Model {
  agentVersion?: string;
  connectionStatus?: string;
  ipAddress?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      connectionStatus: 'ConnectionStatus',
      ipAddress: 'IpAddress',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      connectionStatus: 'string',
      ipAddress: 'string',
      serverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairStatisticsResponseBodySecondarySiteServers extends $tea.Model {
  server?: DescribeSitePairStatisticsResponseBodySecondarySiteServersServer[];
  static names(): { [key: string]: string } {
    return {
      server: 'server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      server: { 'type': 'array', 'itemType': DescribeSitePairStatisticsResponseBodySecondarySiteServersServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairsResponseBodySitePairsSitePairReplicationStatistics extends $tea.Model {
  critical?: number;
  healthy?: number;
  notApplicable?: number;
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      healthy: 'Healthy',
      notApplicable: 'NotApplicable',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: 'number',
      healthy: 'number',
      notApplicable: 'number',
      warning: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairsResponseBodySitePairsSitePair extends $tea.Model {
  cloudSiteName?: string;
  createdTime?: number;
  localSiteName?: string;
  primarySiteId?: string;
  primarySiteName?: string;
  replicationStatistics?: DescribeSitePairsResponseBodySitePairsSitePairReplicationStatistics;
  secondarySiteId?: string;
  secondarySiteName?: string;
  serverCount?: number;
  sitePairId?: string;
  sitePairType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cloudSiteName: 'CloudSiteName',
      createdTime: 'CreatedTime',
      localSiteName: 'LocalSiteName',
      primarySiteId: 'PrimarySiteId',
      primarySiteName: 'PrimarySiteName',
      replicationStatistics: 'ReplicationStatistics',
      secondarySiteId: 'SecondarySiteId',
      secondarySiteName: 'SecondarySiteName',
      serverCount: 'ServerCount',
      sitePairId: 'SitePairId',
      sitePairType: 'SitePairType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudSiteName: 'string',
      createdTime: 'number',
      localSiteName: 'string',
      primarySiteId: 'string',
      primarySiteName: 'string',
      replicationStatistics: DescribeSitePairsResponseBodySitePairsSitePairReplicationStatistics,
      secondarySiteId: 'string',
      secondarySiteName: 'string',
      serverCount: 'number',
      sitePairId: 'string',
      sitePairType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSitePairsResponseBodySitePairs extends $tea.Model {
  sitePair?: DescribeSitePairsResponseBodySitePairsSitePair[];
  static names(): { [key: string]: string } {
    return {
      sitePair: 'sitePair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sitePair: { 'type': 'array', 'itemType': DescribeSitePairsResponseBodySitePairsSitePair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBodyReplicationDetailsCriticalServersCriticalServer extends $tea.Model {
  connectionStatus?: string;
  instanceId?: string;
  rpo?: number;
  serverId?: string;
  sitePairId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      instanceId: 'InstanceId',
      rpo: 'Rpo',
      serverId: 'ServerId',
      sitePairId: 'SitePairId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      instanceId: 'string',
      rpo: 'number',
      serverId: 'string',
      sitePairId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBodyReplicationDetailsCriticalServers extends $tea.Model {
  criticalServer?: DescribeSummaryResponseBodyReplicationDetailsCriticalServersCriticalServer[];
  static names(): { [key: string]: string } {
    return {
      criticalServer: 'criticalServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criticalServer: { 'type': 'array', 'itemType': DescribeSummaryResponseBodyReplicationDetailsCriticalServersCriticalServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBodyReplicationDetailsNotApplicableServersNotApplicableServer extends $tea.Model {
  connectionStatus?: string;
  instanceId?: string;
  rpo?: number;
  serverId?: string;
  sitePairId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      instanceId: 'InstanceId',
      rpo: 'Rpo',
      serverId: 'ServerId',
      sitePairId: 'SitePairId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      instanceId: 'string',
      rpo: 'number',
      serverId: 'string',
      sitePairId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBodyReplicationDetailsNotApplicableServers extends $tea.Model {
  notApplicableServer?: DescribeSummaryResponseBodyReplicationDetailsNotApplicableServersNotApplicableServer[];
  static names(): { [key: string]: string } {
    return {
      notApplicableServer: 'notApplicableServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notApplicableServer: { 'type': 'array', 'itemType': DescribeSummaryResponseBodyReplicationDetailsNotApplicableServersNotApplicableServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBodyReplicationDetailsWarningServersWarningServer extends $tea.Model {
  connectionStatus?: string;
  instanceId?: string;
  rpo?: number;
  serverId?: string;
  sitePairId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      instanceId: 'InstanceId',
      rpo: 'Rpo',
      serverId: 'ServerId',
      sitePairId: 'SitePairId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      instanceId: 'string',
      rpo: 'number',
      serverId: 'string',
      sitePairId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBodyReplicationDetailsWarningServers extends $tea.Model {
  warningServer?: DescribeSummaryResponseBodyReplicationDetailsWarningServersWarningServer[];
  static names(): { [key: string]: string } {
    return {
      warningServer: 'warningServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningServer: { 'type': 'array', 'itemType': DescribeSummaryResponseBodyReplicationDetailsWarningServersWarningServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryResponseBodyReplicationDetails extends $tea.Model {
  criticalServers?: DescribeSummaryResponseBodyReplicationDetailsCriticalServers;
  notApplicableServers?: DescribeSummaryResponseBodyReplicationDetailsNotApplicableServers;
  warningServers?: DescribeSummaryResponseBodyReplicationDetailsWarningServers;
  static names(): { [key: string]: string } {
    return {
      criticalServers: 'CriticalServers',
      notApplicableServers: 'NotApplicableServers',
      warningServers: 'WarningServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criticalServers: DescribeSummaryResponseBodyReplicationDetailsCriticalServers,
      notApplicableServers: DescribeSummaryResponseBodyReplicationDetailsNotApplicableServers,
      warningServers: DescribeSummaryResponseBodyReplicationDetailsWarningServers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyTasksTask extends $tea.Model {
  createdTime?: number;
  name?: string;
  progress?: number;
  statusCode?: string;
  targetName?: string;
  taskId?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      name: 'Name',
      progress: 'Progress',
      statusCode: 'StatusCode',
      targetName: 'TargetName',
      taskId: 'TaskId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      name: 'string',
      progress: 'number',
      statusCode: 'string',
      targetName: 'string',
      taskId: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hdr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async changeRecoveryPointWithOptions(request: ChangeRecoveryPointRequest, runtime: $Util.RuntimeOptions): Promise<ChangeRecoveryPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eipAddressId)) {
      query["EipAddressId"] = request.eipAddressId;
    }

    if (!Util.isUnset(request.recoveryCpu)) {
      query["RecoveryCpu"] = request.recoveryCpu;
    }

    if (!Util.isUnset(request.recoveryEssdPerformanceLevel)) {
      query["RecoveryEssdPerformanceLevel"] = request.recoveryEssdPerformanceLevel;
    }

    if (!Util.isUnset(request.recoveryInstanceName)) {
      query["RecoveryInstanceName"] = request.recoveryInstanceName;
    }

    if (!Util.isUnset(request.recoveryInstanceType)) {
      query["RecoveryInstanceType"] = request.recoveryInstanceType;
    }

    if (!Util.isUnset(request.recoveryIpAddress)) {
      query["RecoveryIpAddress"] = request.recoveryIpAddress;
    }

    if (!Util.isUnset(request.recoveryMemory)) {
      query["RecoveryMemory"] = request.recoveryMemory;
    }

    if (!Util.isUnset(request.recoveryNetwork)) {
      query["RecoveryNetwork"] = request.recoveryNetwork;
    }

    if (!Util.isUnset(request.recoveryPointId)) {
      query["RecoveryPointId"] = request.recoveryPointId;
    }

    if (!Util.isUnset(request.recoveryPointTime)) {
      query["RecoveryPointTime"] = request.recoveryPointTime;
    }

    if (!Util.isUnset(request.recoveryPostScriptContent)) {
      query["RecoveryPostScriptContent"] = request.recoveryPostScriptContent;
    }

    if (!Util.isUnset(request.recoveryPostScriptType)) {
      query["RecoveryPostScriptType"] = request.recoveryPostScriptType;
    }

    if (!Util.isUnset(request.recoveryReserveIp)) {
      query["RecoveryReserveIp"] = request.recoveryReserveIp;
    }

    if (!Util.isUnset(request.recoveryUseDhcp)) {
      query["RecoveryUseDhcp"] = request.recoveryUseDhcp;
    }

    if (!Util.isUnset(request.recoveryUseEssd)) {
      query["RecoveryUseEssd"] = request.recoveryUseEssd;
    }

    if (!Util.isUnset(request.recoveryUseSsd)) {
      query["RecoveryUseSsd"] = request.recoveryUseSsd;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeRecoveryPoint",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeRecoveryPointResponse>(await this.callApi(params, req, runtime), new ChangeRecoveryPointResponse({}));
  }

  async changeRecoveryPoint(request: ChangeRecoveryPointRequest): Promise<ChangeRecoveryPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeRecoveryPointWithOptions(request, runtime);
  }

  async commitFailoverWithOptions(request: CommitFailoverRequest, runtime: $Util.RuntimeOptions): Promise<CommitFailoverResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CommitFailover",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CommitFailoverResponse>(await this.callApi(params, req, runtime), new CommitFailoverResponse({}));
  }

  async commitFailover(request: CommitFailoverRequest): Promise<CommitFailoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitFailoverWithOptions(request, runtime);
  }

  async createRecoveryPlanWithOptions(request: CreateRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRecoveryPlan",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRecoveryPlanResponse>(await this.callApi(params, req, runtime), new CreateRecoveryPlanResponse({}));
  }

  async createRecoveryPlan(request: CreateRecoveryPlanRequest): Promise<CreateRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecoveryPlanWithOptions(request, runtime);
  }

  async createSitePairWithOptions(request: CreateSitePairRequest, runtime: $Util.RuntimeOptions): Promise<CreateSitePairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.primarySiteName)) {
      query["PrimarySiteName"] = request.primarySiteName;
    }

    if (!Util.isUnset(request.primarySiteRegionId)) {
      query["PrimarySiteRegionId"] = request.primarySiteRegionId;
    }

    if (!Util.isUnset(request.primarySiteType)) {
      query["PrimarySiteType"] = request.primarySiteType;
    }

    if (!Util.isUnset(request.primarySiteVpcId)) {
      query["PrimarySiteVpcId"] = request.primarySiteVpcId;
    }

    if (!Util.isUnset(request.primarySiteZoneId)) {
      query["PrimarySiteZoneId"] = request.primarySiteZoneId;
    }

    if (!Util.isUnset(request.secondarySiteName)) {
      query["SecondarySiteName"] = request.secondarySiteName;
    }

    if (!Util.isUnset(request.secondarySiteRegionId)) {
      query["SecondarySiteRegionId"] = request.secondarySiteRegionId;
    }

    if (!Util.isUnset(request.secondarySiteType)) {
      query["SecondarySiteType"] = request.secondarySiteType;
    }

    if (!Util.isUnset(request.secondarySiteVpcId)) {
      query["SecondarySiteVpcId"] = request.secondarySiteVpcId;
    }

    if (!Util.isUnset(request.secondarySiteZoneId)) {
      query["SecondarySiteZoneId"] = request.secondarySiteZoneId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sitePairType)) {
      query["SitePairType"] = request.sitePairType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSitePair",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSitePairResponse>(await this.callApi(params, req, runtime), new CreateSitePairResponse({}));
  }

  async createSitePair(request: CreateSitePairRequest): Promise<CreateSitePairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSitePairWithOptions(request, runtime);
  }

  async deleteRecoveryPlanWithOptions(request: DeleteRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRecoveryPlan",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecoveryPlanResponse>(await this.callApi(params, req, runtime), new DeleteRecoveryPlanResponse({}));
  }

  async deleteRecoveryPlan(request: DeleteRecoveryPlanRequest): Promise<DeleteRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecoveryPlanWithOptions(request, runtime);
  }

  async deleteSitePairWithOptions(request: DeleteSitePairRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSitePairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSitePair",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSitePairResponse>(await this.callApi(params, req, runtime), new DeleteSitePairResponse({}));
  }

  async deleteSitePair(request: DeleteSitePairRequest): Promise<DeleteSitePairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSitePairWithOptions(request, runtime);
  }

  async describeAvailableInstanceTypesWithOptions(request: DescribeAvailableInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableInstanceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!Util.isUnset(request.network)) {
      query["Network"] = request.network;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.userClient)) {
      query["UserClient"] = request.userClient;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableInstanceTypes",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableInstanceTypesResponse>(await this.callApi(params, req, runtime), new DescribeAvailableInstanceTypesResponse({}));
  }

  async describeAvailableInstanceTypes(request: DescribeAvailableInstanceTypesRequest): Promise<DescribeAvailableInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableInstanceTypesWithOptions(request, runtime);
  }

  async describeInfrastructuresWithOptions(request: DescribeInfrastructuresRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInfrastructuresResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInfrastructures",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInfrastructuresResponse>(await this.callApi(params, req, runtime), new DescribeInfrastructuresResponse({}));
  }

  async describeInfrastructures(request: DescribeInfrastructuresRequest): Promise<DescribeInfrastructuresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInfrastructuresWithOptions(request, runtime);
  }

  async describeRecoveryPlanWithOptions(request: DescribeRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecoveryPlan",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecoveryPlanResponse>(await this.callApi(params, req, runtime), new DescribeRecoveryPlanResponse({}));
  }

  async describeRecoveryPlan(request: DescribeRecoveryPlanRequest): Promise<DescribeRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecoveryPlanWithOptions(request, runtime);
  }

  async describeRecoveryPlansWithOptions(request: DescribeRecoveryPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecoveryPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecoveryPlans",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecoveryPlansResponse>(await this.callApi(params, req, runtime), new DescribeRecoveryPlansResponse({}));
  }

  async describeRecoveryPlans(request: DescribeRecoveryPlansRequest): Promise<DescribeRecoveryPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecoveryPlansWithOptions(request, runtime);
  }

  async describeRecoveryPointsWithOptions(request: DescribeRecoveryPointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecoveryPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecoveryPoints",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecoveryPointsResponse>(await this.callApi(params, req, runtime), new DescribeRecoveryPointsResponse({}));
  }

  async describeRecoveryPoints(request: DescribeRecoveryPointsRequest): Promise<DescribeRecoveryPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecoveryPointsWithOptions(request, runtime);
  }

  async describeServerWithOptions(request: DescribeServerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServer",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServerResponse>(await this.callApi(params, req, runtime), new DescribeServerResponse({}));
  }

  async describeServer(request: DescribeServerRequest): Promise<DescribeServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServerWithOptions(request, runtime);
  }

  async describeServersWithOptions(request: DescribeServersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverIds)) {
      query["ServerIds"] = request.serverIds;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServers",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServersResponse>(await this.callApi(params, req, runtime), new DescribeServersResponse({}));
  }

  async describeServers(request: DescribeServersRequest): Promise<DescribeServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServersWithOptions(request, runtime);
  }

  async describeSiteWithOptions(request: DescribeSiteRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSite",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteResponse>(await this.callApi(params, req, runtime), new DescribeSiteResponse({}));
  }

  async describeSite(request: DescribeSiteRequest): Promise<DescribeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteWithOptions(request, runtime);
  }

  async describeSitePairWithOptions(request: DescribeSitePairRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSitePairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSitePair",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSitePairResponse>(await this.callApi(params, req, runtime), new DescribeSitePairResponse({}));
  }

  async describeSitePair(request: DescribeSitePairRequest): Promise<DescribeSitePairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSitePairWithOptions(request, runtime);
  }

  async describeSitePairStatisticsWithOptions(request: DescribeSitePairStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSitePairStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSitePairStatistics",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSitePairStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeSitePairStatisticsResponse({}));
  }

  async describeSitePairStatistics(request: DescribeSitePairStatisticsRequest): Promise<DescribeSitePairStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSitePairStatisticsWithOptions(request, runtime);
  }

  async describeSitePairsWithOptions(request: DescribeSitePairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSitePairsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sitePairType)) {
      query["SitePairType"] = request.sitePairType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSitePairs",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSitePairsResponse>(await this.callApi(params, req, runtime), new DescribeSitePairsResponse({}));
  }

  async describeSitePairs(request: DescribeSitePairsRequest): Promise<DescribeSitePairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSitePairsWithOptions(request, runtime);
  }

  async describeSummaryWithOptions(request: DescribeSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSummary",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSummaryResponse>(await this.callApi(params, req, runtime), new DescribeSummaryResponse({}));
  }

  async describeSummary(request: DescribeSummaryRequest): Promise<DescribeSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSummaryWithOptions(request, runtime);
  }

  async describeTaskWithOptions(request: DescribeTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTask",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTaskResponse>(await this.callApi(params, req, runtime), new DescribeTaskResponse({}));
  }

  async describeTask(request: DescribeTaskRequest): Promise<DescribeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTasks",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTasksResponse>(await this.callApi(params, req, runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async disableReplicationWithOptions(request: DisableReplicationRequest, runtime: $Util.RuntimeOptions): Promise<DisableReplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableReplication",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableReplicationResponse>(await this.callApi(params, req, runtime), new DisableReplicationResponse({}));
  }

  async disableReplication(request: DisableReplicationRequest): Promise<DisableReplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableReplicationWithOptions(request, runtime);
  }

  async enableReplicationWithOptions(request: EnableReplicationRequest, runtime: $Util.RuntimeOptions): Promise<EnableReplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crashConsistentPointPolicy)) {
      query["CrashConsistentPointPolicy"] = request.crashConsistentPointPolicy;
    }

    if (!Util.isUnset(request.recoveryNetwork)) {
      query["RecoveryNetwork"] = request.recoveryNetwork;
    }

    if (!Util.isUnset(request.replicationNetwork)) {
      query["ReplicationNetwork"] = request.replicationNetwork;
    }

    if (!Util.isUnset(request.replicationUseEssd)) {
      query["ReplicationUseEssd"] = request.replicationUseEssd;
    }

    if (!Util.isUnset(request.replicationUseSsd)) {
      query["ReplicationUseSsd"] = request.replicationUseSsd;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableReplication",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableReplicationResponse>(await this.callApi(params, req, runtime), new EnableReplicationResponse({}));
  }

  async enableReplication(request: EnableReplicationRequest): Promise<EnableReplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableReplicationWithOptions(request, runtime);
  }

  async failbackWithOptions(request: FailbackRequest, runtime: $Util.RuntimeOptions): Promise<FailbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recoveryCpu)) {
      query["RecoveryCpu"] = request.recoveryCpu;
    }

    if (!Util.isUnset(request.recoveryInfrastructureId)) {
      query["RecoveryInfrastructureId"] = request.recoveryInfrastructureId;
    }

    if (!Util.isUnset(request.recoveryInstanceName)) {
      query["RecoveryInstanceName"] = request.recoveryInstanceName;
    }

    if (!Util.isUnset(request.recoveryInstanceType)) {
      query["RecoveryInstanceType"] = request.recoveryInstanceType;
    }

    if (!Util.isUnset(request.recoveryIpAddress)) {
      query["RecoveryIpAddress"] = request.recoveryIpAddress;
    }

    if (!Util.isUnset(request.recoveryMemory)) {
      query["RecoveryMemory"] = request.recoveryMemory;
    }

    if (!Util.isUnset(request.recoveryNetwork)) {
      query["RecoveryNetwork"] = request.recoveryNetwork;
    }

    if (!Util.isUnset(request.recoveryPointId)) {
      query["RecoveryPointId"] = request.recoveryPointId;
    }

    if (!Util.isUnset(request.recoveryPostScriptContent)) {
      query["RecoveryPostScriptContent"] = request.recoveryPostScriptContent;
    }

    if (!Util.isUnset(request.recoveryPostScriptType)) {
      query["RecoveryPostScriptType"] = request.recoveryPostScriptType;
    }

    if (!Util.isUnset(request.recoveryReserveIp)) {
      query["RecoveryReserveIp"] = request.recoveryReserveIp;
    }

    if (!Util.isUnset(request.recoveryUseDhcp)) {
      query["RecoveryUseDhcp"] = request.recoveryUseDhcp;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Failback",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FailbackResponse>(await this.callApi(params, req, runtime), new FailbackResponse({}));
  }

  async failback(request: FailbackRequest): Promise<FailbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failbackWithOptions(request, runtime);
  }

  async forcedFailoverWithOptions(request: ForcedFailoverRequest, runtime: $Util.RuntimeOptions): Promise<ForcedFailoverResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eipAddressId)) {
      query["EipAddressId"] = request.eipAddressId;
    }

    if (!Util.isUnset(request.recoveryCpu)) {
      query["RecoveryCpu"] = request.recoveryCpu;
    }

    if (!Util.isUnset(request.recoveryEssdPerformanceLevel)) {
      query["RecoveryEssdPerformanceLevel"] = request.recoveryEssdPerformanceLevel;
    }

    if (!Util.isUnset(request.recoveryInstanceName)) {
      query["RecoveryInstanceName"] = request.recoveryInstanceName;
    }

    if (!Util.isUnset(request.recoveryInstanceType)) {
      query["RecoveryInstanceType"] = request.recoveryInstanceType;
    }

    if (!Util.isUnset(request.recoveryIpAddress)) {
      query["RecoveryIpAddress"] = request.recoveryIpAddress;
    }

    if (!Util.isUnset(request.recoveryMemory)) {
      query["RecoveryMemory"] = request.recoveryMemory;
    }

    if (!Util.isUnset(request.recoveryNetwork)) {
      query["RecoveryNetwork"] = request.recoveryNetwork;
    }

    if (!Util.isUnset(request.recoveryPointId)) {
      query["RecoveryPointId"] = request.recoveryPointId;
    }

    if (!Util.isUnset(request.recoveryPointTime)) {
      query["RecoveryPointTime"] = request.recoveryPointTime;
    }

    if (!Util.isUnset(request.recoveryPostScriptContent)) {
      query["RecoveryPostScriptContent"] = request.recoveryPostScriptContent;
    }

    if (!Util.isUnset(request.recoveryPostScriptType)) {
      query["RecoveryPostScriptType"] = request.recoveryPostScriptType;
    }

    if (!Util.isUnset(request.recoveryReserveIp)) {
      query["RecoveryReserveIp"] = request.recoveryReserveIp;
    }

    if (!Util.isUnset(request.recoveryUseDhcp)) {
      query["RecoveryUseDhcp"] = request.recoveryUseDhcp;
    }

    if (!Util.isUnset(request.recoveryUseEssd)) {
      query["RecoveryUseEssd"] = request.recoveryUseEssd;
    }

    if (!Util.isUnset(request.recoveryUseSsd)) {
      query["RecoveryUseSsd"] = request.recoveryUseSsd;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ForcedFailover",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ForcedFailoverResponse>(await this.callApi(params, req, runtime), new ForcedFailoverResponse({}));
  }

  async forcedFailover(request: ForcedFailoverRequest): Promise<ForcedFailoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forcedFailoverWithOptions(request, runtime);
  }

  async registerServersWithOptions(request: RegisterServersRequest, runtime: $Util.RuntimeOptions): Promise<RegisterServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentPort)) {
      query["AgentPort"] = request.agentPort;
    }

    if (!Util.isUnset(request.serverInstancesInfo)) {
      query["ServerInstancesInfo"] = request.serverInstancesInfo;
    }

    if (!Util.isUnset(request.sitePairId)) {
      query["SitePairId"] = request.sitePairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterServers",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterServersResponse>(await this.callApi(params, req, runtime), new RegisterServersResponse({}));
  }

  async registerServers(request: RegisterServersRequest): Promise<RegisterServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerServersWithOptions(request, runtime);
  }

  async reversedDisableReplicationWithOptions(request: ReversedDisableReplicationRequest, runtime: $Util.RuntimeOptions): Promise<ReversedDisableReplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReversedDisableReplication",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReversedDisableReplicationResponse>(await this.callApi(params, req, runtime), new ReversedDisableReplicationResponse({}));
  }

  async reversedDisableReplication(request: ReversedDisableReplicationRequest): Promise<ReversedDisableReplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reversedDisableReplicationWithOptions(request, runtime);
  }

  async reversedEnableReplicationWithOptions(request: ReversedEnableReplicationRequest, runtime: $Util.RuntimeOptions): Promise<ReversedEnableReplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appConsistentPointPolicy)) {
      query["AppConsistentPointPolicy"] = request.appConsistentPointPolicy;
    }

    if (!Util.isUnset(request.crashConsistentPointPolicy)) {
      query["CrashConsistentPointPolicy"] = request.crashConsistentPointPolicy;
    }

    if (!Util.isUnset(request.recoveryNetwork)) {
      query["RecoveryNetwork"] = request.recoveryNetwork;
    }

    if (!Util.isUnset(request.replicationComputeResource)) {
      query["ReplicationComputeResource"] = request.replicationComputeResource;
    }

    if (!Util.isUnset(request.replicationDatastore)) {
      query["ReplicationDatastore"] = request.replicationDatastore;
    }

    if (!Util.isUnset(request.replicationDns)) {
      query["ReplicationDns"] = request.replicationDns;
    }

    if (!Util.isUnset(request.replicationGateway)) {
      query["ReplicationGateway"] = request.replicationGateway;
    }

    if (!Util.isUnset(request.replicationInfrastructureId)) {
      query["ReplicationInfrastructureId"] = request.replicationInfrastructureId;
    }

    if (!Util.isUnset(request.replicationIpAddress)) {
      query["ReplicationIpAddress"] = request.replicationIpAddress;
    }

    if (!Util.isUnset(request.replicationLocation)) {
      query["ReplicationLocation"] = request.replicationLocation;
    }

    if (!Util.isUnset(request.replicationNetMask)) {
      query["ReplicationNetMask"] = request.replicationNetMask;
    }

    if (!Util.isUnset(request.replicationNetwork)) {
      query["ReplicationNetwork"] = request.replicationNetwork;
    }

    if (!Util.isUnset(request.replicationUseDhcp)) {
      query["ReplicationUseDhcp"] = request.replicationUseDhcp;
    }

    if (!Util.isUnset(request.replicationUseOriginalInstance)) {
      query["ReplicationUseOriginalInstance"] = request.replicationUseOriginalInstance;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    if (!Util.isUnset(request.shadowInstanceType)) {
      query["ShadowInstanceType"] = request.shadowInstanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReversedEnableReplication",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReversedEnableReplicationResponse>(await this.callApi(params, req, runtime), new ReversedEnableReplicationResponse({}));
  }

  async reversedEnableReplication(request: ReversedEnableReplicationRequest): Promise<ReversedEnableReplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reversedEnableReplicationWithOptions(request, runtime);
  }

  async testCleanupWithOptions(request: TestCleanupRequest, runtime: $Util.RuntimeOptions): Promise<TestCleanupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TestCleanup",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestCleanupResponse>(await this.callApi(params, req, runtime), new TestCleanupResponse({}));
  }

  async testCleanup(request: TestCleanupRequest): Promise<TestCleanupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testCleanupWithOptions(request, runtime);
  }

  async testFailoverWithOptions(request: TestFailoverRequest, runtime: $Util.RuntimeOptions): Promise<TestFailoverResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eipAddressId)) {
      query["EipAddressId"] = request.eipAddressId;
    }

    if (!Util.isUnset(request.recoveryCpu)) {
      query["RecoveryCpu"] = request.recoveryCpu;
    }

    if (!Util.isUnset(request.recoveryEssdPerformanceLevel)) {
      query["RecoveryEssdPerformanceLevel"] = request.recoveryEssdPerformanceLevel;
    }

    if (!Util.isUnset(request.recoveryInstanceName)) {
      query["RecoveryInstanceName"] = request.recoveryInstanceName;
    }

    if (!Util.isUnset(request.recoveryInstanceType)) {
      query["RecoveryInstanceType"] = request.recoveryInstanceType;
    }

    if (!Util.isUnset(request.recoveryIpAddress)) {
      query["RecoveryIpAddress"] = request.recoveryIpAddress;
    }

    if (!Util.isUnset(request.recoveryMemory)) {
      query["RecoveryMemory"] = request.recoveryMemory;
    }

    if (!Util.isUnset(request.recoveryNetwork)) {
      query["RecoveryNetwork"] = request.recoveryNetwork;
    }

    if (!Util.isUnset(request.recoveryPointId)) {
      query["RecoveryPointId"] = request.recoveryPointId;
    }

    if (!Util.isUnset(request.recoveryPointTime)) {
      query["RecoveryPointTime"] = request.recoveryPointTime;
    }

    if (!Util.isUnset(request.recoveryPostScriptContent)) {
      query["RecoveryPostScriptContent"] = request.recoveryPostScriptContent;
    }

    if (!Util.isUnset(request.recoveryPostScriptType)) {
      query["RecoveryPostScriptType"] = request.recoveryPostScriptType;
    }

    if (!Util.isUnset(request.recoveryReserveIp)) {
      query["RecoveryReserveIp"] = request.recoveryReserveIp;
    }

    if (!Util.isUnset(request.recoveryUseDhcp)) {
      query["RecoveryUseDhcp"] = request.recoveryUseDhcp;
    }

    if (!Util.isUnset(request.recoveryUseEssd)) {
      query["RecoveryUseEssd"] = request.recoveryUseEssd;
    }

    if (!Util.isUnset(request.recoveryUseSsd)) {
      query["RecoveryUseSsd"] = request.recoveryUseSsd;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TestFailover",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestFailoverResponse>(await this.callApi(params, req, runtime), new TestFailoverResponse({}));
  }

  async testFailover(request: TestFailoverRequest): Promise<TestFailoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testFailoverWithOptions(request, runtime);
  }

  async triggerReversedRegisterWithOptions(request: TriggerReversedRegisterRequest, runtime: $Util.RuntimeOptions): Promise<TriggerReversedRegisterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerReversedRegister",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerReversedRegisterResponse>(await this.callApi(params, req, runtime), new TriggerReversedRegisterResponse({}));
  }

  async triggerReversedRegister(request: TriggerReversedRegisterRequest): Promise<TriggerReversedRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerReversedRegisterWithOptions(request, runtime);
  }

  async unregisterServerWithOptions(request: UnregisterServerRequest, runtime: $Util.RuntimeOptions): Promise<UnregisterServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnregisterServer",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnregisterServerResponse>(await this.callApi(params, req, runtime), new UnregisterServerResponse({}));
  }

  async unregisterServer(request: UnregisterServerRequest): Promise<UnregisterServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unregisterServerWithOptions(request, runtime);
  }

  async updateRecoveryPlanWithOptions(request: UpdateRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRecoveryPlan",
      version: "2017-09-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecoveryPlanResponse>(await this.callApi(params, req, runtime), new UpdateRecoveryPlanResponse({}));
  }

  async updateRecoveryPlan(request: UpdateRecoveryPlanRequest): Promise<UpdateRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecoveryPlanWithOptions(request, runtime);
  }

}
