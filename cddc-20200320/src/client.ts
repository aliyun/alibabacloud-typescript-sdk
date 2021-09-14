// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ModifyDBInstanceSwitchWeightRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  DBInstanceName?: string;
  switchWeight?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      switchWeight: 'SwitchWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      DBInstanceName: 'string',
      switchWeight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSwitchWeightResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSwitchWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceSwitchWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceSwitchWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dbType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dbType: 'DbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeAvailableDedicatedHostZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeAvailableDedicatedHostZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableDedicatedHostZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableDedicatedHostZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  imageCategory?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      imageCategory: 'ImageCategory',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      imageCategory: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBody extends $tea.Model {
  requestId?: string;
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostGroups: 'DedicatedHostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostGroups: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseHostOverViewRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseHostOverViewResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeMyBaseHostOverViewResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeMyBaseHostOverViewResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseHostOverViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMyBaseHostOverViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMyBaseHostOverViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBriefDedicatedHostsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  zoneId?: string;
  pageNumbers?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      zoneId: 'ZoneId',
      pageNumbers: 'PageNumbers',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      zoneId: 'string',
      pageNumbers: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBriefDedicatedHostsResponseBody extends $tea.Model {
  totalRecords?: number;
  pageSize?: number;
  requestId?: string;
  pageNumbers?: number;
  dedicatedHostGroupId?: string;
  dedicatedHosts?: DescribeBriefDedicatedHostsResponseBodyDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      totalRecords: 'TotalRecords',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumbers: 'PageNumbers',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecords: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumbers: 'number',
      dedicatedHostGroupId: 'string',
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeBriefDedicatedHostsResponseBodyDedicatedHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBriefDedicatedHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBriefDedicatedHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBriefDedicatedHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedResourceAdvisorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedResourceAdvisorResponseBody extends $tea.Model {
  dedicatedHostGroupId?: string;
  requestId?: string;
  resourceAdvisors?: DescribeDedicatedResourceAdvisorResponseBodyResourceAdvisors;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      requestId: 'RequestId',
      resourceAdvisors: 'ResourceAdvisors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      requestId: 'string',
      resourceAdvisors: DescribeDedicatedResourceAdvisorResponseBodyResourceAdvisors,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedResourceAdvisorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedResourceAdvisorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedResourceAdvisorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListUserBackupFileRecordRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  engine?: string;
  opsServiceVersion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      engine: 'Engine',
      opsServiceVersion: 'OpsServiceVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      engine: 'string',
      opsServiceVersion: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListUserBackupFileRecordResponseBody extends $tea.Model {
  requestId?: string;
  records?: DescribeListUserBackupFileRecordResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': DescribeListUserBackupFileRecordResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListUserBackupFileRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeListUserBackupFileRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeListUserBackupFileRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  accountName?: string;
  accountPassword?: string;
  regionId?: string;
  bastionInstanceId?: string;
  accountType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      regionId: 'RegionId',
      bastionInstanceId: 'BastionInstanceId',
      accountType: 'AccountType',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      regionId: 'string',
      bastionInstanceId: 'string',
      accountType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  accountName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      accountName: 'AccountName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      accountName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDedicatedHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDedicatedHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserIfAuthoriseMyBaseSystemRoleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  region?: string;
  zoneId?: string;
  ramRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      region: 'Region',
      zoneId: 'ZoneId',
      ramRoleName: 'RamRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      region: 'string',
      zoneId: 'string',
      ramRoleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserIfAuthoriseMyBaseSystemRoleResponseBody extends $tea.Model {
  aliUid?: string;
  requestId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      requestId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserIfAuthoriseMyBaseSystemRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckUserIfAuthoriseMyBaseSystemRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckUserIfAuthoriseMyBaseSystemRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  scheduleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      scheduleId: 'ScheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      scheduleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleInstanceResponseBody extends $tea.Model {
  scheduleId?: string;
  requestId?: string;
  instanceScheduleStatusList?: DescribeScheduleInstanceResponseBodyInstanceScheduleStatusList[];
  static names(): { [key: string]: string } {
    return {
      scheduleId: 'ScheduleId',
      requestId: 'RequestId',
      instanceScheduleStatusList: 'InstanceScheduleStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleId: 'string',
      requestId: 'string',
      instanceScheduleStatusList: { 'type': 'array', 'itemType': DescribeScheduleInstanceResponseBodyInstanceScheduleStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScheduleInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScheduleInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExcuteScheduleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      actionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExcuteScheduleResponseBody extends $tea.Model {
  scheduleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleId: 'ScheduleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExcuteScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExcuteScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExcuteScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  failoverMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      failoverMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  accountName?: string;
  accountPassword?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dbType?: string;
  regionId?: string;
  zoneId?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dbType: 'DbType',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dbType: 'string',
      regionId: 'string',
      zoneId: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponseBody extends $tea.Model {
  requestId?: string;
  hostEcsLevelInfos?: DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostEcsLevelInfos: 'HostEcsLevelInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostEcsLevelInfos: { 'type': 'array', 'itemType': DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHostEcsLevelInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHostEcsLevelInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateHostInstanceCrossVpcVipRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  connectionString?: string;
  port?: string;
  DBInstanceId?: string;
  bindVpcId?: string;
  bindVSwitchId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      connectionString: 'ConnectionString',
      port: 'Port',
      DBInstanceId: 'DBInstanceId',
      bindVpcId: 'BindVpcId',
      bindVSwitchId: 'BindVSwitchId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      connectionString: 'string',
      port: 'string',
      DBInstanceId: 'string',
      bindVpcId: 'string',
      bindVSwitchId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateHostInstanceCrossVpcVipResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateHostInstanceCrossVpcVipResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateHostInstanceCrossVpcVipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateHostInstanceCrossVpcVipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  orderId?: number;
  hostType?: string;
  hostStatus?: string;
  allocationStatus?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  pageNumbers?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      orderId: 'OrderId',
      hostType: 'HostType',
      hostStatus: 'HostStatus',
      allocationStatus: 'AllocationStatus',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      pageNumbers: 'PageNumbers',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      orderId: 'number',
      hostType: 'string',
      hostStatus: 'string',
      allocationStatus: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
      pageNumbers: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBody extends $tea.Model {
  totalRecords?: number;
  pageSize?: number;
  requestId?: string;
  pageNumbers?: number;
  dedicatedHostGroupId?: string;
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
  static names(): { [key: string]: string } {
    return {
      totalRecords: 'TotalRecords',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumbers: 'PageNumbers',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecords: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumbers: 'number',
      dedicatedHostGroupId: 'string',
      dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  disks?: DescribeDedicatedHostDisksResponseBodyDisks[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      disks: 'Disks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDedicatedHostDisksResponseBodyDisks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostDisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostDisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeMyBaseInstanceOverViewResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeMyBaseInstanceOverViewResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMyBaseInstanceOverViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMyBaseInstanceOverViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduleMethodRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostGroupId?: string;
  engine?: string;
  instanceDistribution?: string;
  zoneDistribution?: string;
  cpuUtilityThreshold?: string;
  memoryUtilityThreshold?: string;
  localDiskUtilityThreshold?: string;
  zonesOrder?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      engine: 'Engine',
      instanceDistribution: 'InstanceDistribution',
      zoneDistribution: 'ZoneDistribution',
      cpuUtilityThreshold: 'CpuUtilityThreshold',
      memoryUtilityThreshold: 'MemoryUtilityThreshold',
      localDiskUtilityThreshold: 'LocalDiskUtilityThreshold',
      zonesOrder: 'ZonesOrder',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostGroupId: 'string',
      engine: 'string',
      instanceDistribution: 'string',
      zoneDistribution: 'string',
      cpuUtilityThreshold: 'string',
      memoryUtilityThreshold: 'string',
      localDiskUtilityThreshold: 'string',
      zonesOrder: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduleMethodResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduleMethodResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScheduleMethodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScheduleMethodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  zoneId?: string;
  storageType?: string;
  dbType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      storageType: 'StorageType',
      dbType: 'DbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      storageType: 'string',
      dbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponseBody extends $tea.Model {
  requestId?: string;
  hostClasses?: DescribeAvailableDedicatedHostClassesResponseBodyHostClasses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostClasses: 'HostClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostClasses: DescribeAvailableDedicatedHostClassesResponseBodyHostClasses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableDedicatedHostClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableDedicatedHostClassesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckUserBackupFileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  engineVersion?: string;
  bucketRegion?: string;
  backupFile?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engineVersion: 'EngineVersion',
      bucketRegion: 'BucketRegion',
      backupFile: 'BackupFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      engineVersion: 'string',
      bucketRegion: 'string',
      backupFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckUserBackupFileResponseBody extends $tea.Model {
  status?: boolean;
  DBInstanceName?: string;
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      DBInstanceName: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckUserBackupFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCheckUserBackupFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCheckUserBackupFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostPasswordRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  newPassword?: string;
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      newPassword: 'NewPassword',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      newPassword: 'string',
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostPasswordResponseBody extends $tea.Model {
  dedicatedHostName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostName: 'DedicatedHostName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleMethodsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleMethodsResponseBody extends $tea.Model {
  requestId?: string;
  scheduleMethodList?: DescribeScheduleMethodsResponseBodyScheduleMethodList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleMethodList: 'ScheduleMethodList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleMethodList: { 'type': 'array', 'itemType': DescribeScheduleMethodsResponseBodyScheduleMethodList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleMethodsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScheduleMethodsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScheduleMethodsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  failoverMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      failoverMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserBackupFileRecordRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  engine?: string;
  opsServiceVersion?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      engine: 'Engine',
      opsServiceVersion: 'OpsServiceVersion',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      engine: 'string',
      opsServiceVersion: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserBackupFileRecordResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  id?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      id: 'Id',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
      id: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserBackupFileRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserBackupFileRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserBackupFileRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  classCode?: string;
  engine?: string;
  engineVersion?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  storageType?: string;
  storageSize?: number;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      classCode: 'ClassCode',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      storageType: 'StorageType',
      storageSize: 'StorageSize',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      classCode: 'string',
      engine: 'string',
      engineVersion: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
      storageType: 'string',
      storageSize: 'number',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsResponseBody extends $tea.Model {
  requestId?: string;
  instanceRequiredCPU?: number;
  cpuOverAllocationRatio?: number;
  memoryOverAllocationRatio?: number;
  instanceRequiredMemory?: number;
  instanceClassCode?: string;
  instanceRequiredStorage?: number;
  diskOverAllocationRatio?: number;
  dedicatedHostGroupId?: string;
  dedicatedHosts?: DescribeEvaluateDedicatedHostsResponseBodyDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceRequiredCPU: 'InstanceRequiredCPU',
      cpuOverAllocationRatio: 'CpuOverAllocationRatio',
      memoryOverAllocationRatio: 'MemoryOverAllocationRatio',
      instanceRequiredMemory: 'InstanceRequiredMemory',
      instanceClassCode: 'InstanceClassCode',
      instanceRequiredStorage: 'InstanceRequiredStorage',
      diskOverAllocationRatio: 'DiskOverAllocationRatio',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceRequiredCPU: 'number',
      cpuOverAllocationRatio: 'number',
      memoryOverAllocationRatio: 'number',
      instanceRequiredMemory: 'number',
      instanceClassCode: 'string',
      instanceRequiredStorage: 'number',
      diskOverAllocationRatio: 'number',
      dedicatedHostGroupId: 'string',
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeEvaluateDedicatedHostsResponseBodyDedicatedHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEvaluateDedicatedHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEvaluateDedicatedHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostInstanceMonitorInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  regionId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      regionId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostInstanceMonitorInfoResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeHostInstanceMonitorInfoResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: { 'type': 'array', 'itemType': DescribeHostInstanceMonitorInfoResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostInstanceMonitorInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHostInstanceMonitorInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHostInstanceMonitorInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostMetricRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostMetricResponseBody extends $tea.Model {
  dedicatedHostGroupId?: string;
  requestId?: string;
  metrics?: DescribeDedicatedHostMetricResponseBodyMetrics;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      requestId: 'RequestId',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      requestId: 'string',
      metrics: DescribeDedicatedHostMetricResponseBodyMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  hostName?: string;
  zoneId?: string;
  vSwitchId?: string;
  hostClass?: string;
  payType?: string;
  period?: string;
  usedTime?: string;
  clientToken?: string;
  autoRenew?: string;
  imageCategory?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      hostName: 'HostName',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
      hostClass: 'HostClass',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      autoRenew: 'AutoRenew',
      imageCategory: 'ImageCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      hostName: 'string',
      zoneId: 'string',
      vSwitchId: 'string',
      hostClass: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'string',
      clientToken: 'string',
      autoRenew: 'string',
      imageCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  dedicateHostList?: CreateDedicatedHostResponseBodyDedicateHostList;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      dedicateHostList: 'DedicateHostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      dedicateHostList: CreateDedicatedHostResponseBodyDedicateHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceMetricRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceMetricResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  metrics?: DescribeDedicatedInstanceMetricResponseBodyMetrics;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      metrics: DescribeDedicatedInstanceMetricResponseBodyMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedInstanceMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedInstanceMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossVpcInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossVpcInstanceResponseBody extends $tea.Model {
  hasDelInProcessTask?: boolean;
  requestId?: string;
  hasCreateInProcessTask?: boolean;
  items?: DescribeCrossVpcInstanceResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      hasDelInProcessTask: 'HasDelInProcessTask',
      requestId: 'RequestId',
      hasCreateInProcessTask: 'HasCreateInProcessTask',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasDelInProcessTask: 'boolean',
      requestId: 'string',
      hasCreateInProcessTask: 'boolean',
      items: { 'type': 'array', 'itemType': DescribeCrossVpcInstanceResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossVpcInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCrossVpcInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCrossVpcInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClassRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  targetClassCode?: string;
  switchTime?: string;
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      targetClassCode: 'TargetClassCode',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      targetClassCode: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClassResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsCheckInBastionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  bastionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      bastionInstanceId: 'BastionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      bastionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsCheckInBastionResponseBody extends $tea.Model {
  requestId?: string;
  bastionInstanceId?: string;
  dedicatedHostGroupId?: string;
  hosts?: DescribeDedicatedHostsCheckInBastionResponseBodyHosts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bastionInstanceId: 'BastionInstanceId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bastionInstanceId: 'string',
      dedicatedHostGroupId: 'string',
      hosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsCheckInBastionResponseBodyHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsCheckInBastionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostsCheckInBastionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostsCheckInBastionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropDedicatedHostUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostName?: string;
  userName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostName: 'DedicatedHostName',
      userName: 'UserName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostName: 'string',
      userName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropDedicatedHostUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropDedicatedHostUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DropDedicatedHostUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DropDedicatedHostUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsInBastionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  bastionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      bastionInstanceId: 'BastionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      bastionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsInBastionResponseBody extends $tea.Model {
  requestId?: string;
  bastionInstanceId?: string;
  dedicatedHostGroupId?: string;
  hosts?: DescribeDedicatedHostsInBastionResponseBodyHosts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bastionInstanceId: 'BastionInstanceId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bastionInstanceId: 'string',
      dedicatedHostGroupId: 'string',
      hosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsInBastionResponseBodyHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsInBastionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostsInBastionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostsInBastionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostGroupAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostGroupDesc?: string;
  cpuAllocationRatio?: number;
  memAllocationRatio?: number;
  diskAllocationRatio?: number;
  allocationPolicy?: string;
  hostReplacePolicy?: string;
  openPermission?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      cpuAllocationRatio: 'CpuAllocationRatio',
      memAllocationRatio: 'MemAllocationRatio',
      diskAllocationRatio: 'DiskAllocationRatio',
      allocationPolicy: 'AllocationPolicy',
      hostReplacePolicy: 'HostReplacePolicy',
      openPermission: 'OpenPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostGroupDesc: 'string',
      cpuAllocationRatio: 'number',
      memAllocationRatio: 'number',
      diskAllocationRatio: 'number',
      allocationPolicy: 'string',
      hostReplacePolicy: 'string',
      openPermission: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostGroupAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponseBody extends $tea.Model {
  requestId?: string;
  hostInstanceConsoleInfos?: QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostInstanceConsoleInfos: 'HostInstanceConsoleInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostInstanceConsoleInfos: { 'type': 'array', 'itemType': QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryHostInstanceConsoleInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryHostInstanceConsoleInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceResponseBody extends $tea.Model {
  requestId?: string;
  hostInstanceConsoleInfos?: QueryHostBaseInfoByInstanceResponseBodyHostInstanceConsoleInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostInstanceConsoleInfos: 'HostInstanceConsoleInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostInstanceConsoleInfos: { 'type': 'array', 'itemType': QueryHostBaseInfoByInstanceResponseBodyHostInstanceConsoleInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryHostBaseInfoByInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryHostBaseInfoByInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceDistributionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceDistributionResponseBody extends $tea.Model {
  DBClass?: { [key: string]: any };
  DBVersion?: { [key: string]: any };
  requestId?: string;
  instanceCount?: number;
  DBType?: { [key: string]: any };
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClass: 'DBClass',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
      instanceCount: 'InstanceCount',
      DBType: 'DBType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClass: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      DBVersion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      instanceCount: 'number',
      DBType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedInstanceDistributionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedInstanceDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  scheduleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      scheduleId: 'ScheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      scheduleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleHostResponseBody extends $tea.Model {
  scheduleId?: string;
  requestId?: string;
  hostScheduleStatusList?: DescribeScheduleHostResponseBodyHostScheduleStatusList[];
  static names(): { [key: string]: string } {
    return {
      scheduleId: 'ScheduleId',
      requestId: 'RequestId',
      hostScheduleStatusList: 'HostScheduleStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleId: 'string',
      requestId: 'string',
      hostScheduleStatusList: { 'type': 'array', 'itemType': DescribeScheduleHostResponseBodyHostScheduleStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScheduleHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScheduleHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  hostName?: string;
  allocationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      hostName: 'HostName',
      allocationStatus: 'AllocationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      hostName: 'string',
      allocationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  engine?: string;
  cpuAllocationRatio?: number;
  memAllocationRatio?: number;
  diskAllocationRatio?: number;
  allocationPolicy?: string;
  VPCId?: string;
  hostReplacePolicy?: string;
  clientToken?: string;
  openPermission?: number;
  dedicatedHostGroupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engine: 'Engine',
      cpuAllocationRatio: 'CpuAllocationRatio',
      memAllocationRatio: 'MemAllocationRatio',
      diskAllocationRatio: 'DiskAllocationRatio',
      allocationPolicy: 'AllocationPolicy',
      VPCId: 'VPCId',
      hostReplacePolicy: 'HostReplacePolicy',
      clientToken: 'ClientToken',
      openPermission: 'OpenPermission',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      engine: 'string',
      cpuAllocationRatio: 'number',
      memAllocationRatio: 'number',
      diskAllocationRatio: 'number',
      allocationPolicy: 'string',
      VPCId: 'string',
      hostReplacePolicy: 'string',
      clientToken: 'string',
      openPermission: 'number',
      dedicatedHostGroupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToBastionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  bastionInstanceId?: string;
  hosts?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      bastionInstanceId: 'BastionInstanceId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      bastionInstanceId: 'string',
      hosts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToBastionResponseBody extends $tea.Model {
  requestId?: string;
  bastionInstanceId?: string;
  dedicatedHostGroupId?: string;
  hosts?: AddHostsToBastionResponseBodyHosts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bastionInstanceId: 'BastionInstanceId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bastionInstanceId: 'string',
      dedicatedHostGroupId: 'string',
      hosts: { 'type': 'array', 'itemType': AddHostsToBastionResponseBodyHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToBastionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddHostsToBastionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddHostsToBastionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostsToBastionUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  bastionUser?: string;
  bastionInstanceId?: string;
  hosts?: string;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bastionUser: 'BastionUser',
      bastionInstanceId: 'BastionInstanceId',
      hosts: 'Hosts',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      bastionUser: 'string',
      bastionInstanceId: 'string',
      hosts: 'string',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostsToBastionUserResponseBody extends $tea.Model {
  requestId?: string;
  bastionInstanceId?: string;
  bastionUser?: string;
  hosts?: AttachHostsToBastionUserResponseBodyHosts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bastionInstanceId: 'BastionInstanceId',
      bastionUser: 'BastionUser',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bastionInstanceId: 'string',
      bastionUser: 'string',
      hosts: { 'type': 'array', 'itemType': AttachHostsToBastionUserResponseBodyHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostsToBastionUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachHostsToBastionUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachHostsToBastionUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsForInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  DBInstanceId?: string;
  excludeType?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      DBInstanceId: 'DBInstanceId',
      excludeType: 'ExcludeType',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      DBInstanceId: 'string',
      excludeType: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsForInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceRequiredCPU?: number;
  cpuOverAllocationRatio?: number;
  memoryOverAllocationRatio?: number;
  instanceRequiredMemory?: number;
  instanceClassCode?: string;
  availableHostNum?: number;
  instanceRequiredStorage?: number;
  diskOverAllocationRatio?: number;
  dedicatedHostGroupId?: string;
  dedicatedHosts?: DescribeEvaluateDedicatedHostsForInstanceResponseBodyDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceRequiredCPU: 'InstanceRequiredCPU',
      cpuOverAllocationRatio: 'CpuOverAllocationRatio',
      memoryOverAllocationRatio: 'MemoryOverAllocationRatio',
      instanceRequiredMemory: 'InstanceRequiredMemory',
      instanceClassCode: 'InstanceClassCode',
      availableHostNum: 'AvailableHostNum',
      instanceRequiredStorage: 'InstanceRequiredStorage',
      diskOverAllocationRatio: 'DiskOverAllocationRatio',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceRequiredCPU: 'number',
      cpuOverAllocationRatio: 'number',
      memoryOverAllocationRatio: 'number',
      instanceRequiredMemory: 'number',
      instanceClassCode: 'string',
      availableHostNum: 'number',
      instanceRequiredStorage: 'number',
      diskOverAllocationRatio: 'number',
      dedicatedHostGroupId: 'string',
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeEvaluateDedicatedHostsForInstanceResponseBodyDedicatedHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsForInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEvaluateDedicatedHostsForInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEvaluateDedicatedHostsForInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  failoverMode?: string;
  forceStop?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      failoverMode: 'string',
      forceStop: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostHealthRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostHealthResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  resourceEvent?: { [key: string]: any };
  requestId?: string;
  healthStatus?: { [key: string]: any };
  hostEvents?: DescribeDedicatedHostHealthResponseBodyHostEvents;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      resourceEvent: 'ResourceEvent',
      requestId: 'RequestId',
      healthStatus: 'HealthStatus',
      hostEvents: 'HostEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      resourceEvent: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      healthStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hostEvents: DescribeDedicatedHostHealthResponseBodyHostEvents,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostHealthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostHealthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostHealthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostWebShellRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostWebShellResponseBody extends $tea.Model {
  loginUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginUrl: 'LoginUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostWebShellResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHostWebShellResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHostWebShellResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeResponseBody extends $tea.Model {
  hostType?: string;
  hostStorage?: number;
  instanceNumberROSlave?: number;
  accountType?: string;
  memoryUsed?: string;
  dedicatedHostGroupId?: string;
  requestId?: string;
  instanceNumberROMaster?: number;
  allocationStatus?: string;
  storageUsed?: string;
  ecsClassCode?: string;
  dedicatedHostId?: string;
  memAllocationRatio?: string;
  createdTime?: string;
  IPAddress?: string;
  autoRenew?: string;
  hostStatus?: string;
  hostName?: string;
  hostCPU?: number;
  openPermission?: string;
  instanceNumber?: number;
  cpuUsed?: string;
  VPCId?: string;
  hostClass?: string;
  regionId?: string;
  instanceNumberMaster?: number;
  vSwitchId?: string;
  instanceNumberSlave?: number;
  expiredTime?: string;
  zoneId?: string;
  CPUAllocationRatio?: string;
  imageCategory?: string;
  diskAllocationRatio?: string;
  hostMem?: number;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      hostType: 'HostType',
      hostStorage: 'HostStorage',
      instanceNumberROSlave: 'InstanceNumberROSlave',
      accountType: 'AccountType',
      memoryUsed: 'MemoryUsed',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      requestId: 'RequestId',
      instanceNumberROMaster: 'InstanceNumberROMaster',
      allocationStatus: 'AllocationStatus',
      storageUsed: 'StorageUsed',
      ecsClassCode: 'EcsClassCode',
      dedicatedHostId: 'DedicatedHostId',
      memAllocationRatio: 'MemAllocationRatio',
      createdTime: 'CreatedTime',
      IPAddress: 'IPAddress',
      autoRenew: 'AutoRenew',
      hostStatus: 'HostStatus',
      hostName: 'HostName',
      hostCPU: 'HostCPU',
      openPermission: 'OpenPermission',
      instanceNumber: 'InstanceNumber',
      cpuUsed: 'CpuUsed',
      VPCId: 'VPCId',
      hostClass: 'HostClass',
      regionId: 'RegionId',
      instanceNumberMaster: 'InstanceNumberMaster',
      vSwitchId: 'VSwitchId',
      instanceNumberSlave: 'InstanceNumberSlave',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      CPUAllocationRatio: 'CPUAllocationRatio',
      imageCategory: 'ImageCategory',
      diskAllocationRatio: 'DiskAllocationRatio',
      hostMem: 'HostMem',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostType: 'string',
      hostStorage: 'number',
      instanceNumberROSlave: 'number',
      accountType: 'string',
      memoryUsed: 'string',
      dedicatedHostGroupId: 'string',
      requestId: 'string',
      instanceNumberROMaster: 'number',
      allocationStatus: 'string',
      storageUsed: 'string',
      ecsClassCode: 'string',
      dedicatedHostId: 'string',
      memAllocationRatio: 'string',
      createdTime: 'string',
      IPAddress: 'string',
      autoRenew: 'string',
      hostStatus: 'string',
      hostName: 'string',
      hostCPU: 'number',
      openPermission: 'string',
      instanceNumber: 'number',
      cpuUsed: 'string',
      VPCId: 'string',
      hostClass: 'string',
      regionId: 'string',
      instanceNumberMaster: 'number',
      vSwitchId: 'string',
      instanceNumberSlave: 'number',
      expiredTime: 'string',
      zoneId: 'string',
      CPUAllocationRatio: 'string',
      imageCategory: 'string',
      diskAllocationRatio: 'string',
      hostMem: 'number',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponseBodyZonesDedicatedHostZones extends $tea.Model {
  zoneId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponseBodyZones extends $tea.Model {
  dedicatedHostZones?: DescribeAvailableDedicatedHostZonesResponseBodyZonesDedicatedHostZones[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostZones: 'DedicatedHostZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostZones: { 'type': 'array', 'itemType': DescribeAvailableDedicatedHostZonesResponseBodyZonesDedicatedHostZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList extends $tea.Model {
  zoneIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups extends $tea.Model {
  diskAllocateRation?: number;
  deployType?: string;
  createTime?: string;
  dedicatedHostCountGroupByHostType?: { [key: string]: any };
  text?: string;
  dedicatedHostGroupId?: string;
  diskUtility?: number;
  memUsedAmount?: number;
  memAllocatedAmount?: number;
  cpuAllocationRatio?: number;
  memAllocationRatio?: number;
  memAllocateRation?: number;
  memUtility?: number;
  cpuAllocatedAmount?: number;
  dedicatedHostGroupDesc?: string;
  cpuAllocateRation?: number;
  instanceNumber?: number;
  openPermission?: string;
  VPCId?: string;
  diskAllocatedAmount?: number;
  hostNumber?: number;
  diskUsedAmount?: number;
  allocationPolicy?: string;
  engine?: string;
  diskAllocationRatio?: number;
  bastionInstanceId?: string;
  hostReplacePolicy?: string;
  zoneIDList?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList;
  static names(): { [key: string]: string } {
    return {
      diskAllocateRation: 'DiskAllocateRation',
      deployType: 'DeployType',
      createTime: 'CreateTime',
      dedicatedHostCountGroupByHostType: 'DedicatedHostCountGroupByHostType',
      text: 'Text',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      diskUtility: 'DiskUtility',
      memUsedAmount: 'MemUsedAmount',
      memAllocatedAmount: 'MemAllocatedAmount',
      cpuAllocationRatio: 'CpuAllocationRatio',
      memAllocationRatio: 'MemAllocationRatio',
      memAllocateRation: 'MemAllocateRation',
      memUtility: 'MemUtility',
      cpuAllocatedAmount: 'CpuAllocatedAmount',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      cpuAllocateRation: 'CpuAllocateRation',
      instanceNumber: 'InstanceNumber',
      openPermission: 'OpenPermission',
      VPCId: 'VPCId',
      diskAllocatedAmount: 'DiskAllocatedAmount',
      hostNumber: 'HostNumber',
      diskUsedAmount: 'DiskUsedAmount',
      allocationPolicy: 'AllocationPolicy',
      engine: 'Engine',
      diskAllocationRatio: 'DiskAllocationRatio',
      bastionInstanceId: 'BastionInstanceId',
      hostReplacePolicy: 'HostReplacePolicy',
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskAllocateRation: 'number',
      deployType: 'string',
      createTime: 'string',
      dedicatedHostCountGroupByHostType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      text: 'string',
      dedicatedHostGroupId: 'string',
      diskUtility: 'number',
      memUsedAmount: 'number',
      memAllocatedAmount: 'number',
      cpuAllocationRatio: 'number',
      memAllocationRatio: 'number',
      memAllocateRation: 'number',
      memUtility: 'number',
      cpuAllocatedAmount: 'number',
      dedicatedHostGroupDesc: 'string',
      cpuAllocateRation: 'number',
      instanceNumber: 'number',
      openPermission: 'string',
      VPCId: 'string',
      diskAllocatedAmount: 'number',
      hostNumber: 'number',
      diskUsedAmount: 'number',
      allocationPolicy: 'string',
      engine: 'string',
      diskAllocationRatio: 'number',
      bastionInstanceId: 'string',
      hostReplacePolicy: 'string',
      zoneIDList: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups extends $tea.Model {
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: { 'type': 'array', 'itemType': DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseHostOverViewResponseBodyRegionsRegionModelTypeModelsTypeModel extends $tea.Model {
  hostEngineCount?: string;
  hostDateType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      hostEngineCount: 'HostEngineCount',
      hostDateType: 'HostDateType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostEngineCount: 'string',
      hostDateType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseHostOverViewResponseBodyRegionsRegionModelTypeModels extends $tea.Model {
  typeModel?: DescribeMyBaseHostOverViewResponseBodyRegionsRegionModelTypeModelsTypeModel[];
  static names(): { [key: string]: string } {
    return {
      typeModel: 'TypeModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      typeModel: { 'type': 'array', 'itemType': DescribeMyBaseHostOverViewResponseBodyRegionsRegionModelTypeModelsTypeModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseHostOverViewResponseBodyRegionsRegionModel extends $tea.Model {
  engineCount?: string;
  totalCount?: number;
  hostGroupCount?: number;
  region?: string;
  typeModels?: DescribeMyBaseHostOverViewResponseBodyRegionsRegionModelTypeModels;
  static names(): { [key: string]: string } {
    return {
      engineCount: 'EngineCount',
      totalCount: 'TotalCount',
      hostGroupCount: 'HostGroupCount',
      region: 'Region',
      typeModels: 'TypeModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineCount: 'string',
      totalCount: 'number',
      hostGroupCount: 'number',
      region: 'string',
      typeModels: DescribeMyBaseHostOverViewResponseBodyRegionsRegionModelTypeModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseHostOverViewResponseBodyRegions extends $tea.Model {
  regionModel?: DescribeMyBaseHostOverViewResponseBodyRegionsRegionModel[];
  static names(): { [key: string]: string } {
    return {
      regionModel: 'RegionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModel: { 'type': 'array', 'itemType': DescribeMyBaseHostOverViewResponseBodyRegionsRegionModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBriefDedicatedHostsResponseBodyDedicatedHosts extends $tea.Model {
  allocationStatus?: string;
  region?: string;
  hostStatus?: string;
  zoneId?: string;
  hostCPU?: number;
  dedicatedHostId?: string;
  engine?: string;
  hostMem?: number;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      region: 'Region',
      hostStatus: 'HostStatus',
      zoneId: 'ZoneId',
      hostCPU: 'HostCPU',
      dedicatedHostId: 'DedicatedHostId',
      engine: 'Engine',
      hostMem: 'HostMem',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      region: 'string',
      hostStatus: 'string',
      zoneId: 'string',
      hostCPU: 'number',
      dedicatedHostId: 'string',
      engine: 'string',
      hostMem: 'number',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedResourceAdvisorResponseBodyResourceAdvisorsResourceAdvisors extends $tea.Model {
  cpuUsageAfterAction?: number;
  action?: string;
  destinationDedicatedHostId?: string;
  sourceDedicatedInstanceId?: string;
  actionDescription?: string;
  sourceDedicatedInstanceRole?: string;
  sourceDedicatedHostId?: string;
  cpuUsageBeforeAction?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUsageAfterAction: 'CpuUsageAfterAction',
      action: 'Action',
      destinationDedicatedHostId: 'DestinationDedicatedHostId',
      sourceDedicatedInstanceId: 'SourceDedicatedInstanceId',
      actionDescription: 'ActionDescription',
      sourceDedicatedInstanceRole: 'SourceDedicatedInstanceRole',
      sourceDedicatedHostId: 'SourceDedicatedHostId',
      cpuUsageBeforeAction: 'CpuUsageBeforeAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsageAfterAction: 'number',
      action: 'string',
      destinationDedicatedHostId: 'string',
      sourceDedicatedInstanceId: 'string',
      actionDescription: 'string',
      sourceDedicatedInstanceRole: 'string',
      sourceDedicatedHostId: 'string',
      cpuUsageBeforeAction: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedResourceAdvisorResponseBodyResourceAdvisors extends $tea.Model {
  resourceAdvisors?: DescribeDedicatedResourceAdvisorResponseBodyResourceAdvisorsResourceAdvisors[];
  static names(): { [key: string]: string } {
    return {
      resourceAdvisors: 'ResourceAdvisors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceAdvisors: { 'type': 'array', 'itemType': DescribeDedicatedResourceAdvisorResponseBodyResourceAdvisorsResourceAdvisors },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListUserBackupFileRecordResponseBodyRecords extends $tea.Model {
  status?: string;
  ossFilePath?: string;
  ossBucket?: string;
  gmtModified?: string;
  bid?: string;
  engineVersion?: string;
  ossFileName?: string;
  ossFileSize?: number;
  gmtCreated?: string;
  backupSetId?: string;
  instanceName?: string;
  dbInstanceName?: string;
  engine?: string;
  binlogInfo?: string;
  custinsId?: string;
  ossFileMetaData?: string;
  ossUrl?: string;
  taskId?: string;
  id?: number;
  reason?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ossFilePath: 'OssFilePath',
      ossBucket: 'OssBucket',
      gmtModified: 'GmtModified',
      bid: 'Bid',
      engineVersion: 'EngineVersion',
      ossFileName: 'OssFileName',
      ossFileSize: 'OssFileSize',
      gmtCreated: 'GmtCreated',
      backupSetId: 'BackupSetId',
      instanceName: 'InstanceName',
      dbInstanceName: 'DbInstanceName',
      engine: 'Engine',
      binlogInfo: 'BinlogInfo',
      custinsId: 'CustinsId',
      ossFileMetaData: 'OssFileMetaData',
      ossUrl: 'OssUrl',
      taskId: 'TaskId',
      id: 'Id',
      reason: 'Reason',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ossFilePath: 'string',
      ossBucket: 'string',
      gmtModified: 'string',
      bid: 'string',
      engineVersion: 'string',
      ossFileName: 'string',
      ossFileSize: 'number',
      gmtCreated: 'string',
      backupSetId: 'string',
      instanceName: 'string',
      dbInstanceName: 'string',
      engine: 'string',
      binlogInfo: 'string',
      custinsId: 'string',
      ossFileMetaData: 'string',
      ossUrl: 'string',
      taskId: 'string',
      id: 'number',
      reason: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleInstanceResponseBodyInstanceScheduleStatusList extends $tea.Model {
  scheduleStatus?: string;
  instanceNodeTargetHostId?: string;
  instanceNodeRole?: string;
  engine?: string;
  instanceId?: string;
  instanceNodeSourceHostId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleStatus: 'ScheduleStatus',
      instanceNodeTargetHostId: 'InstanceNodeTargetHostId',
      instanceNodeRole: 'InstanceNodeRole',
      engine: 'Engine',
      instanceId: 'InstanceId',
      instanceNodeSourceHostId: 'InstanceNodeSourceHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleStatus: 'string',
      instanceNodeTargetHostId: 'string',
      instanceNodeRole: 'string',
      engine: 'string',
      instanceId: 'string',
      instanceNodeSourceHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfosItems extends $tea.Model {
  netBandWidth?: number;
  ecsClass?: string;
  rdsClassCode?: string;
  cpu?: number;
  cpuFrequency?: string;
  storageIops?: number;
  cloudStorageBandwidth?: number;
  ecsClassCode?: string;
  isCloudDisk?: number;
  memory?: number;
  netPackage?: number;
  cpuVersion?: string;
  localStorage?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      netBandWidth: 'NetBandWidth',
      ecsClass: 'EcsClass',
      rdsClassCode: 'RdsClassCode',
      cpu: 'Cpu',
      cpuFrequency: 'CpuFrequency',
      storageIops: 'StorageIops',
      cloudStorageBandwidth: 'CloudStorageBandwidth',
      ecsClassCode: 'EcsClassCode',
      isCloudDisk: 'IsCloudDisk',
      memory: 'Memory',
      netPackage: 'NetPackage',
      cpuVersion: 'CpuVersion',
      localStorage: 'LocalStorage',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netBandWidth: 'number',
      ecsClass: 'string',
      rdsClassCode: 'string',
      cpu: 'number',
      cpuFrequency: 'string',
      storageIops: 'number',
      cloudStorageBandwidth: 'number',
      ecsClassCode: 'string',
      isCloudDisk: 'number',
      memory: 'number',
      netPackage: 'number',
      cpuVersion: 'string',
      localStorage: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfos extends $tea.Model {
  cddcHostType?: string;
  items?: DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfosItems[];
  static names(): { [key: string]: string } {
    return {
      cddcHostType: 'CddcHostType',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cddcHostType: 'string',
      items: { 'type': 'array', 'itemType': DescribeHostEcsLevelInfoResponseBodyHostEcsLevelInfosItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts extends $tea.Model {
  deployType?: string;
  hostType?: string;
  hostStorage?: string;
  memoryUsed?: string;
  dedicatedHostGroupId?: string;
  allocationStatus?: string;
  storageUsed?: string;
  ecsClassCode?: string;
  dedicatedHostId?: string;
  memAllocationRatio?: string;
  createdTime?: string;
  IPAddress?: string;
  hostStatus?: string;
  hostName?: string;
  hostCPU?: string;
  cpuUsed?: string;
  instanceNumber?: string;
  openPermission?: string;
  distributionSymbol?: string;
  VPCId?: string;
  hostClass?: string;
  endTime?: string;
  vSwitchId?: string;
  zoneId?: string;
  CPUAllocationRatio?: string;
  imageCategory?: string;
  engine?: string;
  diskAllocationRatio?: string;
  hostMem?: string;
  bastionInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      hostType: 'HostType',
      hostStorage: 'HostStorage',
      memoryUsed: 'MemoryUsed',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      allocationStatus: 'AllocationStatus',
      storageUsed: 'StorageUsed',
      ecsClassCode: 'EcsClassCode',
      dedicatedHostId: 'DedicatedHostId',
      memAllocationRatio: 'MemAllocationRatio',
      createdTime: 'CreatedTime',
      IPAddress: 'IPAddress',
      hostStatus: 'HostStatus',
      hostName: 'HostName',
      hostCPU: 'HostCPU',
      cpuUsed: 'CpuUsed',
      instanceNumber: 'InstanceNumber',
      openPermission: 'OpenPermission',
      distributionSymbol: 'DistributionSymbol',
      VPCId: 'VPCId',
      hostClass: 'HostClass',
      endTime: 'EndTime',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      CPUAllocationRatio: 'CPUAllocationRatio',
      imageCategory: 'ImageCategory',
      engine: 'Engine',
      diskAllocationRatio: 'DiskAllocationRatio',
      hostMem: 'HostMem',
      bastionInstanceId: 'BastionInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'string',
      hostType: 'string',
      hostStorage: 'string',
      memoryUsed: 'string',
      dedicatedHostGroupId: 'string',
      allocationStatus: 'string',
      storageUsed: 'string',
      ecsClassCode: 'string',
      dedicatedHostId: 'string',
      memAllocationRatio: 'string',
      createdTime: 'string',
      IPAddress: 'string',
      hostStatus: 'string',
      hostName: 'string',
      hostCPU: 'string',
      cpuUsed: 'string',
      instanceNumber: 'string',
      openPermission: 'string',
      distributionSymbol: 'string',
      VPCId: 'string',
      hostClass: 'string',
      endTime: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      CPUAllocationRatio: 'string',
      imageCategory: 'string',
      engine: 'string',
      diskAllocationRatio: 'string',
      hostMem: 'string',
      bastionInstanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $tea.Model {
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostDisksResponseBodyDisks extends $tea.Model {
  type?: string;
  status?: string;
  performanceLevel?: string;
  diskId?: string;
  maxThroughput?: number;
  maxIOPS?: number;
  hasDBInstance?: boolean;
  device?: string;
  size?: number;
  zoneId?: string;
  category?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      performanceLevel: 'PerformanceLevel',
      diskId: 'DiskId',
      maxThroughput: 'MaxThroughput',
      maxIOPS: 'MaxIOPS',
      hasDBInstance: 'HasDBInstance',
      device: 'Device',
      size: 'Size',
      zoneId: 'ZoneId',
      category: 'Category',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      performanceLevel: 'string',
      diskId: 'string',
      maxThroughput: 'number',
      maxIOPS: 'number',
      hasDBInstance: 'boolean',
      device: 'string',
      size: 'number',
      zoneId: 'string',
      category: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModelInstanceModelsInstanceModel extends $tea.Model {
  expireTime?: string;
  payType?: string;
  zoneId?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      payType: 'PayType',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      payType: 'string',
      zoneId: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModelInstanceModels extends $tea.Model {
  instanceModel?: DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModelInstanceModelsInstanceModel[];
  static names(): { [key: string]: string } {
    return {
      instanceModel: 'InstanceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceModel: { 'type': 'array', 'itemType': DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModelInstanceModelsInstanceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModel extends $tea.Model {
  count?: number;
  instanceDateType?: string;
  instanceEngineCount?: string;
  instanceModels?: DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModelInstanceModels;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceDateType: 'InstanceDateType',
      instanceEngineCount: 'InstanceEngineCount',
      instanceModels: 'InstanceModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceDateType: 'string',
      instanceEngineCount: 'string',
      instanceModels: DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModelInstanceModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModels extends $tea.Model {
  typeModel?: DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModel[];
  static names(): { [key: string]: string } {
    return {
      typeModel: 'TypeModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      typeModel: { 'type': 'array', 'itemType': DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModelsTypeModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModel extends $tea.Model {
  engineCount?: string;
  totalCount?: number;
  region?: string;
  typeModels?: DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModels;
  static names(): { [key: string]: string } {
    return {
      engineCount: 'EngineCount',
      totalCount: 'TotalCount',
      region: 'Region',
      typeModels: 'TypeModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineCount: 'string',
      totalCount: 'number',
      region: 'string',
      typeModels: DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModelTypeModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMyBaseInstanceOverViewResponseBodyRegions extends $tea.Model {
  regionModel?: DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModel[];
  static names(): { [key: string]: string } {
    return {
      regionModel: 'RegionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModel: { 'type': 'array', 'itemType': DescribeMyBaseInstanceOverViewResponseBodyRegionsRegionModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponseBodyHostClassesHostClasses extends $tea.Model {
  description?: string;
  hostClassName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hostClassName: 'HostClassName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hostClassName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponseBodyHostClasses extends $tea.Model {
  hostClasses?: DescribeAvailableDedicatedHostClassesResponseBodyHostClassesHostClasses[];
  static names(): { [key: string]: string } {
    return {
      hostClasses: 'HostClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostClasses: { 'type': 'array', 'itemType': DescribeAvailableDedicatedHostClassesResponseBodyHostClassesHostClasses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleMethodsResponseBodyScheduleMethodList extends $tea.Model {
  zonesOrder?: string;
  zoneDistribution?: string;
  CPUUtilityThreshold?: number;
  dedicatedHostGroupDesc?: string;
  memoryUtilityThreshold?: number;
  engine?: string;
  instanceDistribution?: string;
  localDiskUtilityThreshold?: number;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      zonesOrder: 'ZonesOrder',
      zoneDistribution: 'ZoneDistribution',
      CPUUtilityThreshold: 'CPUUtilityThreshold',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      memoryUtilityThreshold: 'MemoryUtilityThreshold',
      engine: 'Engine',
      instanceDistribution: 'InstanceDistribution',
      localDiskUtilityThreshold: 'LocalDiskUtilityThreshold',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zonesOrder: 'string',
      zoneDistribution: 'string',
      CPUUtilityThreshold: 'number',
      dedicatedHostGroupDesc: 'string',
      memoryUtilityThreshold: 'number',
      engine: 'string',
      instanceDistribution: 'string',
      localDiskUtilityThreshold: 'number',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsResponseBodyDedicatedHosts extends $tea.Model {
  hostAllocationStatus?: boolean;
  comment?: string;
  hostFreeMem?: number;
  hostStatus?: string;
  hostFreeCPU?: number;
  hostStorage?: number;
  hostCPU?: number;
  regionId?: string;
  hostFreeStorage?: number;
  vSwitchId?: string;
  dedicatedHostName?: string;
  zoneId?: string;
  imageCategory?: string;
  dedicatedHostId?: string;
  engine?: string;
  isCouldSSD?: boolean;
  isAvailableForInstance?: boolean;
  hostMem?: number;
  createdTime?: number;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      hostAllocationStatus: 'HostAllocationStatus',
      comment: 'Comment',
      hostFreeMem: 'HostFreeMem',
      hostStatus: 'HostStatus',
      hostFreeCPU: 'HostFreeCPU',
      hostStorage: 'HostStorage',
      hostCPU: 'HostCPU',
      regionId: 'RegionId',
      hostFreeStorage: 'HostFreeStorage',
      vSwitchId: 'VSwitchId',
      dedicatedHostName: 'DedicatedHostName',
      zoneId: 'ZoneId',
      imageCategory: 'ImageCategory',
      dedicatedHostId: 'DedicatedHostId',
      engine: 'Engine',
      isCouldSSD: 'IsCouldSSD',
      isAvailableForInstance: 'IsAvailableForInstance',
      hostMem: 'HostMem',
      createdTime: 'CreatedTime',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAllocationStatus: 'boolean',
      comment: 'string',
      hostFreeMem: 'number',
      hostStatus: 'string',
      hostFreeCPU: 'number',
      hostStorage: 'number',
      hostCPU: 'number',
      regionId: 'string',
      hostFreeStorage: 'number',
      vSwitchId: 'string',
      dedicatedHostName: 'string',
      zoneId: 'string',
      imageCategory: 'string',
      dedicatedHostId: 'string',
      engine: 'string',
      isCouldSSD: 'boolean',
      isAvailableForInstance: 'boolean',
      hostMem: 'number',
      createdTime: 'number',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostInstanceMonitorInfoResponseBodyItemsAuroraSwitchInstanceLog extends $tea.Model {
  switchFrom?: number;
  switchType?: number;
  switchTime?: number;
  static names(): { [key: string]: string } {
    return {
      switchFrom: 'SwitchFrom',
      switchType: 'SwitchType',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchFrom: 'number',
      switchType: 'number',
      switchTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostInstanceMonitorInfoResponseBodyItems extends $tea.Model {
  status?: string;
  memSize?: number;
  diskSize?: number;
  ip?: string;
  DBInstanceId?: string;
  levelName?: string;
  engine?: string;
  role?: string;
  port?: string;
  cpuCores?: number;
  engineVersion?: string;
  auroraSwitchInstanceLog?: DescribeHostInstanceMonitorInfoResponseBodyItemsAuroraSwitchInstanceLog;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      memSize: 'MemSize',
      diskSize: 'DiskSize',
      ip: 'Ip',
      DBInstanceId: 'DBInstanceId',
      levelName: 'LevelName',
      engine: 'Engine',
      role: 'Role',
      port: 'Port',
      cpuCores: 'CpuCores',
      engineVersion: 'EngineVersion',
      auroraSwitchInstanceLog: 'AuroraSwitchInstanceLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      memSize: 'number',
      diskSize: 'number',
      ip: 'string',
      DBInstanceId: 'string',
      levelName: 'string',
      engine: 'string',
      role: 'string',
      port: 'string',
      cpuCores: 'number',
      engineVersion: 'string',
      auroraSwitchInstanceLog: DescribeHostInstanceMonitorInfoResponseBodyItemsAuroraSwitchInstanceLog,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostMetricResponseBodyMetricsMetricsRisks extends $tea.Model {
  risks?: string[];
  static names(): { [key: string]: string } {
    return {
      risks: 'Risks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      risks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostMetricResponseBodyMetricsMetrics extends $tea.Model {
  avgMemUsage?: number;
  endDate?: string;
  avgIops?: number;
  maxMemUsage?: number;
  startDate?: string;
  dedicatedHostId?: string;
  maxIops?: number;
  avgCpuUsage?: number;
  diskUsage?: number;
  maxCpuUsage?: number;
  risks?: DescribeDedicatedHostMetricResponseBodyMetricsMetricsRisks;
  static names(): { [key: string]: string } {
    return {
      avgMemUsage: 'AvgMemUsage',
      endDate: 'EndDate',
      avgIops: 'AvgIops',
      maxMemUsage: 'MaxMemUsage',
      startDate: 'StartDate',
      dedicatedHostId: 'DedicatedHostId',
      maxIops: 'MaxIops',
      avgCpuUsage: 'AvgCpuUsage',
      diskUsage: 'DiskUsage',
      maxCpuUsage: 'MaxCpuUsage',
      risks: 'Risks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgMemUsage: 'number',
      endDate: 'string',
      avgIops: 'number',
      maxMemUsage: 'number',
      startDate: 'string',
      dedicatedHostId: 'string',
      maxIops: 'number',
      avgCpuUsage: 'number',
      diskUsage: 'number',
      maxCpuUsage: 'number',
      risks: DescribeDedicatedHostMetricResponseBodyMetricsMetricsRisks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostMetricResponseBodyMetrics extends $tea.Model {
  metrics?: DescribeDedicatedHostMetricResponseBodyMetricsMetrics[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': DescribeDedicatedHostMetricResponseBodyMetricsMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList extends $tea.Model {
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBodyDedicateHostList extends $tea.Model {
  dedicateHostList?: CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList[];
  static names(): { [key: string]: string } {
    return {
      dedicateHostList: 'DedicateHostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicateHostList: { 'type': 'array', 'itemType': CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceMetricResponseBodyMetricsMetricsRisks extends $tea.Model {
  risks?: string[];
  static names(): { [key: string]: string } {
    return {
      risks: 'Risks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      risks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceMetricResponseBodyMetricsMetrics extends $tea.Model {
  endDate?: string;
  maxMemUsage?: number;
  dedicatedInstanceId?: string;
  startDate?: string;
  diskUsage?: number;
  avgMemUsage?: number;
  maxIOPS?: number;
  memory?: number;
  avgCpuUsage?: number;
  avgIOPS?: number;
  role?: string;
  maxCpuUsage?: number;
  risks?: DescribeDedicatedInstanceMetricResponseBodyMetricsMetricsRisks;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      maxMemUsage: 'MaxMemUsage',
      dedicatedInstanceId: 'DedicatedInstanceId',
      startDate: 'StartDate',
      diskUsage: 'DiskUsage',
      avgMemUsage: 'AvgMemUsage',
      maxIOPS: 'MaxIOPS',
      memory: 'Memory',
      avgCpuUsage: 'AvgCpuUsage',
      avgIOPS: 'AvgIOPS',
      role: 'Role',
      maxCpuUsage: 'MaxCpuUsage',
      risks: 'Risks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      maxMemUsage: 'number',
      dedicatedInstanceId: 'string',
      startDate: 'string',
      diskUsage: 'number',
      avgMemUsage: 'number',
      maxIOPS: 'number',
      memory: 'number',
      avgCpuUsage: 'number',
      avgIOPS: 'number',
      role: 'string',
      maxCpuUsage: 'number',
      risks: DescribeDedicatedInstanceMetricResponseBodyMetricsMetricsRisks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedInstanceMetricResponseBodyMetrics extends $tea.Model {
  metrics?: DescribeDedicatedInstanceMetricResponseBodyMetricsMetrics[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': DescribeDedicatedInstanceMetricResponseBodyMetricsMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossVpcInstanceResponseBodyItems extends $tea.Model {
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsCheckInBastionResponseBodyHosts extends $tea.Model {
  status?: string;
  dedicatedHostName?: string;
  allocationStatus?: boolean;
  inBastion?: boolean;
  hostName?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dedicatedHostName: 'DedicatedHostName',
      allocationStatus: 'AllocationStatus',
      inBastion: 'InBastion',
      hostName: 'HostName',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dedicatedHostName: 'string',
      allocationStatus: 'boolean',
      inBastion: 'boolean',
      hostName: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsInBastionResponseBodyHosts extends $tea.Model {
  hostDescription?: string;
  comment?: string;
  bastionHostId?: string;
  osName?: string;
  hostAccountCount?: string;
  dedicatedHostId?: string;
  hostPrivateIp?: string;
  accountCreating?: boolean;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      hostDescription: 'HostDescription',
      comment: 'Comment',
      bastionHostId: 'BastionHostId',
      osName: 'OsName',
      hostAccountCount: 'HostAccountCount',
      dedicatedHostId: 'DedicatedHostId',
      hostPrivateIp: 'HostPrivateIp',
      accountCreating: 'AccountCreating',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostDescription: 'string',
      comment: 'string',
      bastionHostId: 'string',
      osName: 'string',
      hostAccountCount: 'string',
      dedicatedHostId: 'string',
      hostPrivateIp: 'string',
      accountCreating: 'boolean',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfosPerfInfo extends $tea.Model {
  perfIdbPio?: number;
  diskCurr?: number;
  memRatio?: number;
  cpuRatio?: number;
  static names(): { [key: string]: string } {
    return {
      perfIdbPio: 'PerfIdbPio',
      diskCurr: 'DiskCurr',
      memRatio: 'MemRatio',
      cpuRatio: 'CpuRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perfIdbPio: 'number',
      diskCurr: 'number',
      memRatio: 'number',
      cpuRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfos extends $tea.Model {
  status?: string;
  maxConnIncreaseRatioValue?: number;
  memSize?: number;
  diskSize?: number;
  ip?: string;
  port?: string;
  engineVersion?: string;
  memoryIncreaseRatioValue?: number;
  cpuIncreaseRatioValue?: number;
  DBInstanceId?: string;
  engine?: string;
  levelName?: string;
  role?: string;
  DBInstanceDescription?: string;
  cpuCores?: number;
  perfInfo?: QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfosPerfInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      maxConnIncreaseRatioValue: 'MaxConnIncreaseRatioValue',
      memSize: 'MemSize',
      diskSize: 'DiskSize',
      ip: 'Ip',
      port: 'Port',
      engineVersion: 'EngineVersion',
      memoryIncreaseRatioValue: 'MemoryIncreaseRatioValue',
      cpuIncreaseRatioValue: 'CpuIncreaseRatioValue',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      levelName: 'LevelName',
      role: 'Role',
      DBInstanceDescription: 'DBInstanceDescription',
      cpuCores: 'CpuCores',
      perfInfo: 'PerfInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      maxConnIncreaseRatioValue: 'number',
      memSize: 'number',
      diskSize: 'number',
      ip: 'string',
      port: 'string',
      engineVersion: 'string',
      memoryIncreaseRatioValue: 'number',
      cpuIncreaseRatioValue: 'number',
      DBInstanceId: 'string',
      engine: 'string',
      levelName: 'string',
      role: 'string',
      DBInstanceDescription: 'string',
      cpuCores: 'number',
      perfInfo: QueryHostInstanceConsoleInfoResponseBodyHostInstanceConsoleInfosPerfInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRDSRegion extends $tea.Model {
  zoneId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  RDSRegion?: DescribeRegionsResponseBodyRegionsRDSRegion[];
  static names(): { [key: string]: string } {
    return {
      RDSRegion: 'RDSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDSRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRDSRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHostBaseInfoByInstanceResponseBodyHostInstanceConsoleInfos extends $tea.Model {
  vpcId?: string;
  status?: string;
  expiredTime?: string;
  clusterName?: string;
  ip?: string;
  hostName?: string;
  engine?: string;
  role?: string;
  port?: string;
  engineVersion?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      expiredTime: 'ExpiredTime',
      clusterName: 'ClusterName',
      ip: 'Ip',
      hostName: 'HostName',
      engine: 'Engine',
      role: 'Role',
      port: 'Port',
      engineVersion: 'EngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      expiredTime: 'string',
      clusterName: 'string',
      ip: 'string',
      hostName: 'string',
      engine: 'string',
      role: 'string',
      port: 'string',
      engineVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleHostResponseBodyHostScheduleStatusList extends $tea.Model {
  scheduleStatus?: string;
  dedicatedHostId?: string;
  instanceOutId?: string;
  instanceInId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleStatus: 'ScheduleStatus',
      dedicatedHostId: 'DedicatedHostId',
      instanceOutId: 'InstanceOutId',
      instanceInId: 'InstanceInId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleStatus: 'string',
      dedicatedHostId: 'string',
      instanceOutId: 'string',
      instanceInId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToBastionResponseBodyHosts extends $tea.Model {
  code?: string;
  hostName?: string;
  message?: string;
  hostPrivateIp?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostName: 'HostName',
      message: 'Message',
      hostPrivateIp: 'HostPrivateIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostName: 'string',
      message: 'string',
      hostPrivateIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostsToBastionUserResponseBodyHosts extends $tea.Model {
  code?: string;
  hostName?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostName: 'HostName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostName: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDedicatedHostsForInstanceResponseBodyDedicatedHosts extends $tea.Model {
  isContainReadOnlyInstance?: boolean;
  hostAllocationStatus?: boolean;
  comment?: string;
  hostFreeMem?: number;
  hostStatus?: string;
  hostFreeCPU?: number;
  hostStorage?: number;
  hostCPU?: number;
  regionId?: string;
  hostFreeStorage?: number;
  vSwitchId?: string;
  dedicatedHostName?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  engine?: string;
  isCouldSSD?: boolean;
  isAvailableForInstance?: boolean;
  hostMem?: number;
  createdTime?: number;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      isContainReadOnlyInstance: 'IsContainReadOnlyInstance',
      hostAllocationStatus: 'HostAllocationStatus',
      comment: 'Comment',
      hostFreeMem: 'HostFreeMem',
      hostStatus: 'HostStatus',
      hostFreeCPU: 'HostFreeCPU',
      hostStorage: 'HostStorage',
      hostCPU: 'HostCPU',
      regionId: 'RegionId',
      hostFreeStorage: 'HostFreeStorage',
      vSwitchId: 'VSwitchId',
      dedicatedHostName: 'DedicatedHostName',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      engine: 'Engine',
      isCouldSSD: 'IsCouldSSD',
      isAvailableForInstance: 'IsAvailableForInstance',
      hostMem: 'HostMem',
      createdTime: 'CreatedTime',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isContainReadOnlyInstance: 'boolean',
      hostAllocationStatus: 'boolean',
      comment: 'string',
      hostFreeMem: 'number',
      hostStatus: 'string',
      hostFreeCPU: 'number',
      hostStorage: 'number',
      hostCPU: 'number',
      regionId: 'string',
      hostFreeStorage: 'number',
      vSwitchId: 'string',
      dedicatedHostName: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
      engine: 'string',
      isCouldSSD: 'boolean',
      isAvailableForInstance: 'boolean',
      hostMem: 'number',
      createdTime: 'number',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostHealthResponseBodyHostEventsHostEvents extends $tea.Model {
  eventName?: string;
  eventTime?: string;
  eventType?: string;
  eventDescription?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventTime: 'EventTime',
      eventType: 'EventType',
      eventDescription: 'EventDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventTime: 'string',
      eventType: 'string',
      eventDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostHealthResponseBodyHostEvents extends $tea.Model {
  hostEvents?: DescribeDedicatedHostHealthResponseBodyHostEventsHostEvents[];
  static names(): { [key: string]: string } {
    return {
      hostEvents: 'HostEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostEvents: { 'type': 'array', 'itemType': DescribeDedicatedHostHealthResponseBodyHostEventsHostEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cddc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async modifyDBInstanceSwitchWeightWithOptions(request: ModifyDBInstanceSwitchWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSwitchWeightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceSwitchWeightResponse>(await this.doRPCRequest("ModifyDBInstanceSwitchWeight", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceSwitchWeightResponse({}));
  }

  async modifyDBInstanceSwitchWeight(request: ModifyDBInstanceSwitchWeightRequest): Promise<ModifyDBInstanceSwitchWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSwitchWeightWithOptions(request, runtime);
  }

  async describeAvailableDedicatedHostZonesWithOptions(request: DescribeAvailableDedicatedHostZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableDedicatedHostZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableDedicatedHostZonesResponse>(await this.doRPCRequest("DescribeAvailableDedicatedHostZones", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableDedicatedHostZonesResponse({}));
  }

  async describeAvailableDedicatedHostZones(request: DescribeAvailableDedicatedHostZonesRequest): Promise<DescribeAvailableDedicatedHostZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableDedicatedHostZonesWithOptions(request, runtime);
  }

  async describeDedicatedHostGroupsWithOptions(request: DescribeDedicatedHostGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostGroupsResponse>(await this.doRPCRequest("DescribeDedicatedHostGroups", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostGroupsResponse({}));
  }

  async describeDedicatedHostGroups(request: DescribeDedicatedHostGroupsRequest): Promise<DescribeDedicatedHostGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostGroupsWithOptions(request, runtime);
  }

  async describeMyBaseHostOverViewWithOptions(request: DescribeMyBaseHostOverViewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMyBaseHostOverViewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMyBaseHostOverViewResponse>(await this.doRPCRequest("DescribeMyBaseHostOverView", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMyBaseHostOverViewResponse({}));
  }

  async describeMyBaseHostOverView(request: DescribeMyBaseHostOverViewRequest): Promise<DescribeMyBaseHostOverViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMyBaseHostOverViewWithOptions(request, runtime);
  }

  async describeBriefDedicatedHostsWithOptions(request: DescribeBriefDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBriefDedicatedHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBriefDedicatedHostsResponse>(await this.doRPCRequest("DescribeBriefDedicatedHosts", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBriefDedicatedHostsResponse({}));
  }

  async describeBriefDedicatedHosts(request: DescribeBriefDedicatedHostsRequest): Promise<DescribeBriefDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBriefDedicatedHostsWithOptions(request, runtime);
  }

  async describeDedicatedResourceAdvisorWithOptions(request: DescribeDedicatedResourceAdvisorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedResourceAdvisorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedResourceAdvisorResponse>(await this.doRPCRequest("DescribeDedicatedResourceAdvisor", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedResourceAdvisorResponse({}));
  }

  async describeDedicatedResourceAdvisor(request: DescribeDedicatedResourceAdvisorRequest): Promise<DescribeDedicatedResourceAdvisorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedResourceAdvisorWithOptions(request, runtime);
  }

  async describeListUserBackupFileRecordWithOptions(request: DescribeListUserBackupFileRecordRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListUserBackupFileRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeListUserBackupFileRecordResponse>(await this.doRPCRequest("DescribeListUserBackupFileRecord", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeListUserBackupFileRecordResponse({}));
  }

  async describeListUserBackupFileRecord(request: DescribeListUserBackupFileRecordRequest): Promise<DescribeListUserBackupFileRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListUserBackupFileRecordWithOptions(request, runtime);
  }

  async createDedicatedHostAccountWithOptions(request: CreateDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedHostAccountResponse>(await this.doRPCRequest("CreateDedicatedHostAccount", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedHostAccountResponse({}));
  }

  async createDedicatedHostAccount(request: CreateDedicatedHostAccountRequest): Promise<CreateDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostAccountWithOptions(request, runtime);
  }

  async deleteDedicatedHostAccountWithOptions(request: DeleteDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDedicatedHostAccountResponse>(await this.doRPCRequest("DeleteDedicatedHostAccount", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDedicatedHostAccountResponse({}));
  }

  async deleteDedicatedHostAccount(request: DeleteDedicatedHostAccountRequest): Promise<DeleteDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedHostAccountWithOptions(request, runtime);
  }

  async deleteDedicatedHostGroupWithOptions(request: DeleteDedicatedHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDedicatedHostGroupResponse>(await this.doRPCRequest("DeleteDedicatedHostGroup", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDedicatedHostGroupResponse({}));
  }

  async deleteDedicatedHostGroup(request: DeleteDedicatedHostGroupRequest): Promise<DeleteDedicatedHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedHostGroupWithOptions(request, runtime);
  }

  async checkUserIfAuthoriseMyBaseSystemRoleWithOptions(request: CheckUserIfAuthoriseMyBaseSystemRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckUserIfAuthoriseMyBaseSystemRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckUserIfAuthoriseMyBaseSystemRoleResponse>(await this.doRPCRequest("CheckUserIfAuthoriseMyBaseSystemRole", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CheckUserIfAuthoriseMyBaseSystemRoleResponse({}));
  }

  async checkUserIfAuthoriseMyBaseSystemRole(request: CheckUserIfAuthoriseMyBaseSystemRoleRequest): Promise<CheckUserIfAuthoriseMyBaseSystemRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUserIfAuthoriseMyBaseSystemRoleWithOptions(request, runtime);
  }

  async describeScheduleInstanceWithOptions(request: DescribeScheduleInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduleInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScheduleInstanceResponse>(await this.doRPCRequest("DescribeScheduleInstance", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScheduleInstanceResponse({}));
  }

  async describeScheduleInstance(request: DescribeScheduleInstanceRequest): Promise<DescribeScheduleInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleInstanceWithOptions(request, runtime);
  }

  async excuteScheduleWithOptions(request: ExcuteScheduleRequest, runtime: $Util.RuntimeOptions): Promise<ExcuteScheduleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExcuteScheduleResponse>(await this.doRPCRequest("ExcuteSchedule", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ExcuteScheduleResponse({}));
  }

  async excuteSchedule(request: ExcuteScheduleRequest): Promise<ExcuteScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.excuteScheduleWithOptions(request, runtime);
  }

  async replaceDedicatedHostWithOptions(request: ReplaceDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplaceDedicatedHostResponse>(await this.doRPCRequest("ReplaceDedicatedHost", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ReplaceDedicatedHostResponse({}));
  }

  async replaceDedicatedHost(request: ReplaceDedicatedHostRequest): Promise<ReplaceDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceDedicatedHostWithOptions(request, runtime);
  }

  async modifyDedicatedHostAccountWithOptions(request: ModifyDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostAccountResponse>(await this.doRPCRequest("ModifyDedicatedHostAccount", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostAccountResponse({}));
  }

  async modifyDedicatedHostAccount(request: ModifyDedicatedHostAccountRequest): Promise<ModifyDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAccountWithOptions(request, runtime);
  }

  async describeHostEcsLevelInfoWithOptions(request: DescribeHostEcsLevelInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostEcsLevelInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHostEcsLevelInfoResponse>(await this.doRPCRequest("DescribeHostEcsLevelInfo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHostEcsLevelInfoResponse({}));
  }

  async describeHostEcsLevelInfo(request: DescribeHostEcsLevelInfoRequest): Promise<DescribeHostEcsLevelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostEcsLevelInfoWithOptions(request, runtime);
  }

  async allocateHostInstanceCrossVpcVipWithOptions(request: AllocateHostInstanceCrossVpcVipRequest, runtime: $Util.RuntimeOptions): Promise<AllocateHostInstanceCrossVpcVipResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateHostInstanceCrossVpcVipResponse>(await this.doRPCRequest("AllocateHostInstanceCrossVpcVip", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateHostInstanceCrossVpcVipResponse({}));
  }

  async allocateHostInstanceCrossVpcVip(request: AllocateHostInstanceCrossVpcVipRequest): Promise<AllocateHostInstanceCrossVpcVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateHostInstanceCrossVpcVipWithOptions(request, runtime);
  }

  async describeDedicatedHostsWithOptions(request: DescribeDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostsResponse>(await this.doRPCRequest("DescribeDedicatedHosts", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostsResponse({}));
  }

  async describeDedicatedHosts(request: DescribeDedicatedHostsRequest): Promise<DescribeDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostsWithOptions(request, runtime);
  }

  async describeDedicatedHostDisksWithOptions(request: DescribeDedicatedHostDisksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostDisksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostDisksResponse>(await this.doRPCRequest("DescribeDedicatedHostDisks", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostDisksResponse({}));
  }

  async describeDedicatedHostDisks(request: DescribeDedicatedHostDisksRequest): Promise<DescribeDedicatedHostDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostDisksWithOptions(request, runtime);
  }

  async describeMyBaseInstanceOverViewWithOptions(request: DescribeMyBaseInstanceOverViewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMyBaseInstanceOverViewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMyBaseInstanceOverViewResponse>(await this.doRPCRequest("DescribeMyBaseInstanceOverView", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMyBaseInstanceOverViewResponse({}));
  }

  async describeMyBaseInstanceOverView(request: DescribeMyBaseInstanceOverViewRequest): Promise<DescribeMyBaseInstanceOverViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMyBaseInstanceOverViewWithOptions(request, runtime);
  }

  async modifyScheduleMethodWithOptions(request: ModifyScheduleMethodRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScheduleMethodResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScheduleMethodResponse>(await this.doRPCRequest("ModifyScheduleMethod", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScheduleMethodResponse({}));
  }

  async modifyScheduleMethod(request: ModifyScheduleMethodRequest): Promise<ModifyScheduleMethodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScheduleMethodWithOptions(request, runtime);
  }

  async describeAvailableDedicatedHostClassesWithOptions(request: DescribeAvailableDedicatedHostClassesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableDedicatedHostClassesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableDedicatedHostClassesResponse>(await this.doRPCRequest("DescribeAvailableDedicatedHostClasses", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableDedicatedHostClassesResponse({}));
  }

  async describeAvailableDedicatedHostClasses(request: DescribeAvailableDedicatedHostClassesRequest): Promise<DescribeAvailableDedicatedHostClassesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableDedicatedHostClassesWithOptions(request, runtime);
  }

  async describeCheckUserBackupFileWithOptions(request: DescribeCheckUserBackupFileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckUserBackupFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCheckUserBackupFileResponse>(await this.doRPCRequest("DescribeCheckUserBackupFile", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCheckUserBackupFileResponse({}));
  }

  async describeCheckUserBackupFile(request: DescribeCheckUserBackupFileRequest): Promise<DescribeCheckUserBackupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckUserBackupFileWithOptions(request, runtime);
  }

  async modifyDedicatedHostPasswordWithOptions(request: ModifyDedicatedHostPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostPasswordResponse>(await this.doRPCRequest("ModifyDedicatedHostPassword", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostPasswordResponse({}));
  }

  async modifyDedicatedHostPassword(request: ModifyDedicatedHostPasswordRequest): Promise<ModifyDedicatedHostPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostPasswordWithOptions(request, runtime);
  }

  async describeScheduleMethodsWithOptions(request: DescribeScheduleMethodsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduleMethodsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScheduleMethodsResponse>(await this.doRPCRequest("DescribeScheduleMethods", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScheduleMethodsResponse({}));
  }

  async describeScheduleMethods(request: DescribeScheduleMethodsRequest): Promise<DescribeScheduleMethodsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleMethodsWithOptions(request, runtime);
  }

  async clearDedicatedHostWithOptions(request: ClearDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<ClearDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearDedicatedHostResponse>(await this.doRPCRequest("ClearDedicatedHost", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ClearDedicatedHostResponse({}));
  }

  async clearDedicatedHost(request: ClearDedicatedHostRequest): Promise<ClearDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearDedicatedHostWithOptions(request, runtime);
  }

  async deleteUserBackupFileRecordWithOptions(request: DeleteUserBackupFileRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserBackupFileRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserBackupFileRecordResponse>(await this.doRPCRequest("DeleteUserBackupFileRecord", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserBackupFileRecordResponse({}));
  }

  async deleteUserBackupFileRecord(request: DeleteUserBackupFileRecordRequest): Promise<DeleteUserBackupFileRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserBackupFileRecordWithOptions(request, runtime);
  }

  async describeEvaluateDedicatedHostsWithOptions(request: DescribeEvaluateDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluateDedicatedHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEvaluateDedicatedHostsResponse>(await this.doRPCRequest("DescribeEvaluateDedicatedHosts", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEvaluateDedicatedHostsResponse({}));
  }

  async describeEvaluateDedicatedHosts(request: DescribeEvaluateDedicatedHostsRequest): Promise<DescribeEvaluateDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluateDedicatedHostsWithOptions(request, runtime);
  }

  async describeHostInstanceMonitorInfoWithOptions(request: DescribeHostInstanceMonitorInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostInstanceMonitorInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHostInstanceMonitorInfoResponse>(await this.doRPCRequest("DescribeHostInstanceMonitorInfo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHostInstanceMonitorInfoResponse({}));
  }

  async describeHostInstanceMonitorInfo(request: DescribeHostInstanceMonitorInfoRequest): Promise<DescribeHostInstanceMonitorInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostInstanceMonitorInfoWithOptions(request, runtime);
  }

  async describeDedicatedHostMetricWithOptions(request: DescribeDedicatedHostMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostMetricResponse>(await this.doRPCRequest("DescribeDedicatedHostMetric", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostMetricResponse({}));
  }

  async describeDedicatedHostMetric(request: DescribeDedicatedHostMetricRequest): Promise<DescribeDedicatedHostMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostMetricWithOptions(request, runtime);
  }

  async createDedicatedHostWithOptions(request: CreateDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedHostResponse>(await this.doRPCRequest("CreateDedicatedHost", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedHostResponse({}));
  }

  async createDedicatedHost(request: CreateDedicatedHostRequest): Promise<CreateDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostWithOptions(request, runtime);
  }

  async describeDedicatedInstanceMetricWithOptions(request: DescribeDedicatedInstanceMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedInstanceMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedInstanceMetricResponse>(await this.doRPCRequest("DescribeDedicatedInstanceMetric", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedInstanceMetricResponse({}));
  }

  async describeDedicatedInstanceMetric(request: DescribeDedicatedInstanceMetricRequest): Promise<DescribeDedicatedInstanceMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedInstanceMetricWithOptions(request, runtime);
  }

  async describeCrossVpcInstanceWithOptions(request: DescribeCrossVpcInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrossVpcInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCrossVpcInstanceResponse>(await this.doRPCRequest("DescribeCrossVpcInstance", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCrossVpcInstanceResponse({}));
  }

  async describeCrossVpcInstance(request: DescribeCrossVpcInstanceRequest): Promise<DescribeCrossVpcInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrossVpcInstanceWithOptions(request, runtime);
  }

  async modifyDedicatedHostClassWithOptions(request: ModifyDedicatedHostClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostClassResponse>(await this.doRPCRequest("ModifyDedicatedHostClass", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostClassResponse({}));
  }

  async modifyDedicatedHostClass(request: ModifyDedicatedHostClassRequest): Promise<ModifyDedicatedHostClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostClassWithOptions(request, runtime);
  }

  async describeDedicatedHostsCheckInBastionWithOptions(request: DescribeDedicatedHostsCheckInBastionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostsCheckInBastionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostsCheckInBastionResponse>(await this.doRPCRequest("DescribeDedicatedHostsCheckInBastion", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostsCheckInBastionResponse({}));
  }

  async describeDedicatedHostsCheckInBastion(request: DescribeDedicatedHostsCheckInBastionRequest): Promise<DescribeDedicatedHostsCheckInBastionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostsCheckInBastionWithOptions(request, runtime);
  }

  async dropDedicatedHostUserWithOptions(request: DropDedicatedHostUserRequest, runtime: $Util.RuntimeOptions): Promise<DropDedicatedHostUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DropDedicatedHostUserResponse>(await this.doRPCRequest("DropDedicatedHostUser", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DropDedicatedHostUserResponse({}));
  }

  async dropDedicatedHostUser(request: DropDedicatedHostUserRequest): Promise<DropDedicatedHostUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropDedicatedHostUserWithOptions(request, runtime);
  }

  async describeDedicatedHostsInBastionWithOptions(request: DescribeDedicatedHostsInBastionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostsInBastionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostsInBastionResponse>(await this.doRPCRequest("DescribeDedicatedHostsInBastion", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostsInBastionResponse({}));
  }

  async describeDedicatedHostsInBastion(request: DescribeDedicatedHostsInBastionRequest): Promise<DescribeDedicatedHostsInBastionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostsInBastionWithOptions(request, runtime);
  }

  async modifyDedicatedHostGroupAttributeWithOptions(request: ModifyDedicatedHostGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostGroupAttributeResponse>(await this.doRPCRequest("ModifyDedicatedHostGroupAttribute", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostGroupAttributeResponse({}));
  }

  async modifyDedicatedHostGroupAttribute(request: ModifyDedicatedHostGroupAttributeRequest): Promise<ModifyDedicatedHostGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostGroupAttributeWithOptions(request, runtime);
  }

  async queryHostInstanceConsoleInfoWithOptions(request: QueryHostInstanceConsoleInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryHostInstanceConsoleInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryHostInstanceConsoleInfoResponse>(await this.doRPCRequest("QueryHostInstanceConsoleInfo", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryHostInstanceConsoleInfoResponse({}));
  }

  async queryHostInstanceConsoleInfo(request: QueryHostInstanceConsoleInfoRequest): Promise<QueryHostInstanceConsoleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHostInstanceConsoleInfoWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async queryHostBaseInfoByInstanceWithOptions(request: QueryHostBaseInfoByInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryHostBaseInfoByInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryHostBaseInfoByInstanceResponse>(await this.doRPCRequest("QueryHostBaseInfoByInstance", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryHostBaseInfoByInstanceResponse({}));
  }

  async queryHostBaseInfoByInstance(request: QueryHostBaseInfoByInstanceRequest): Promise<QueryHostBaseInfoByInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHostBaseInfoByInstanceWithOptions(request, runtime);
  }

  async describeDedicatedInstanceDistributionWithOptions(request: DescribeDedicatedInstanceDistributionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedInstanceDistributionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedInstanceDistributionResponse>(await this.doRPCRequest("DescribeDedicatedInstanceDistribution", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedInstanceDistributionResponse({}));
  }

  async describeDedicatedInstanceDistribution(request: DescribeDedicatedInstanceDistributionRequest): Promise<DescribeDedicatedInstanceDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedInstanceDistributionWithOptions(request, runtime);
  }

  async describeScheduleHostWithOptions(request: DescribeScheduleHostRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduleHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScheduleHostResponse>(await this.doRPCRequest("DescribeScheduleHost", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScheduleHostResponse({}));
  }

  async describeScheduleHost(request: DescribeScheduleHostRequest): Promise<DescribeScheduleHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleHostWithOptions(request, runtime);
  }

  async modifyDedicatedHostAttributeWithOptions(request: ModifyDedicatedHostAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostAttributeResponse>(await this.doRPCRequest("ModifyDedicatedHostAttribute", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostAttributeResponse({}));
  }

  async modifyDedicatedHostAttribute(request: ModifyDedicatedHostAttributeRequest): Promise<ModifyDedicatedHostAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAttributeWithOptions(request, runtime);
  }

  async createDedicatedHostGroupWithOptions(request: CreateDedicatedHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedHostGroupResponse>(await this.doRPCRequest("CreateDedicatedHostGroup", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedHostGroupResponse({}));
  }

  async createDedicatedHostGroup(request: CreateDedicatedHostGroupRequest): Promise<CreateDedicatedHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostGroupWithOptions(request, runtime);
  }

  async addHostsToBastionWithOptions(request: AddHostsToBastionRequest, runtime: $Util.RuntimeOptions): Promise<AddHostsToBastionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddHostsToBastionResponse>(await this.doRPCRequest("AddHostsToBastion", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddHostsToBastionResponse({}));
  }

  async addHostsToBastion(request: AddHostsToBastionRequest): Promise<AddHostsToBastionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addHostsToBastionWithOptions(request, runtime);
  }

  async attachHostsToBastionUserWithOptions(request: AttachHostsToBastionUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostsToBastionUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachHostsToBastionUserResponse>(await this.doRPCRequest("AttachHostsToBastionUser", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AttachHostsToBastionUserResponse({}));
  }

  async attachHostsToBastionUser(request: AttachHostsToBastionUserRequest): Promise<AttachHostsToBastionUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostsToBastionUserWithOptions(request, runtime);
  }

  async describeEvaluateDedicatedHostsForInstanceWithOptions(request: DescribeEvaluateDedicatedHostsForInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluateDedicatedHostsForInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEvaluateDedicatedHostsForInstanceResponse>(await this.doRPCRequest("DescribeEvaluateDedicatedHostsForInstance", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEvaluateDedicatedHostsForInstanceResponse({}));
  }

  async describeEvaluateDedicatedHostsForInstance(request: DescribeEvaluateDedicatedHostsForInstanceRequest): Promise<DescribeEvaluateDedicatedHostsForInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluateDedicatedHostsForInstanceWithOptions(request, runtime);
  }

  async restartDedicatedHostWithOptions(request: RestartDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<RestartDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartDedicatedHostResponse>(await this.doRPCRequest("RestartDedicatedHost", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDedicatedHostResponse({}));
  }

  async restartDedicatedHost(request: RestartDedicatedHostRequest): Promise<RestartDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDedicatedHostWithOptions(request, runtime);
  }

  async describeDedicatedHostHealthWithOptions(request: DescribeDedicatedHostHealthRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostHealthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostHealthResponse>(await this.doRPCRequest("DescribeDedicatedHostHealth", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostHealthResponse({}));
  }

  async describeDedicatedHostHealth(request: DescribeDedicatedHostHealthRequest): Promise<DescribeDedicatedHostHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostHealthWithOptions(request, runtime);
  }

  async describeHostWebShellWithOptions(request: DescribeHostWebShellRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostWebShellResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHostWebShellResponse>(await this.doRPCRequest("DescribeHostWebShell", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHostWebShellResponse({}));
  }

  async describeHostWebShell(request: DescribeHostWebShellRequest): Promise<DescribeHostWebShellResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostWebShellWithOptions(request, runtime);
  }

  async describeDedicatedHostAttributeWithOptions(request: DescribeDedicatedHostAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostAttributeResponse>(await this.doRPCRequest("DescribeDedicatedHostAttribute", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostAttributeResponse({}));
  }

  async describeDedicatedHostAttribute(request: DescribeDedicatedHostAttributeRequest): Promise<DescribeDedicatedHostAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostAttributeWithOptions(request, runtime);
  }

}
