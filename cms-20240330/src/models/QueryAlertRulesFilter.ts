// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BizSourceFilter } from "./BizSourceFilter";
import { DatasourceTypeFilter } from "./DatasourceTypeFilter";
import { DisplayNameFilter } from "./DisplayNameFilter";
import { EnabledFilter } from "./EnabledFilter";
import { LabelsFilter } from "./LabelsFilter";
import { MigrationStatusFilter } from "./MigrationStatusFilter";
import { NotificationChannelsFilter } from "./NotificationChannelsFilter";
import { NotifyStrategyIdFilter } from "./NotifyStrategyIdFilter";
import { ObserveResourceConfigFilter } from "./ObserveResourceConfigFilter";
import { ObserveResourceGlobalScopeFilter } from "./ObserveResourceGlobalScopeFilter";
import { ObserveResourceListFilter } from "./ObserveResourceListFilter";
import { ObserveResourceTypeFilter } from "./ObserveResourceTypeFilter";
import { PartitionKeyFilter } from "./PartitionKeyFilter";
import { SeverityLevelsFilter } from "./SeverityLevelsFilter";
import { StatusFilter } from "./StatusFilter";
import { UuidFilter } from "./UuidFilter";


export class QueryAlertRulesFilter extends $dara.Model {
  bizSource?: BizSourceFilter;
  datasourceType?: DatasourceTypeFilter;
  displayName?: DisplayNameFilter;
  enabled?: EnabledFilter;
  labels?: LabelsFilter;
  /**
   * @remarks
   * Filters by migration status. isMigrated=true queries migrated rules (migration_status is not 0 or NULL). isMigrated=false queries native rules (migration_status=0).
   */
  migrationStatus?: MigrationStatusFilter;
  notificationChannels?: NotificationChannelsFilter;
  notifyStrategyId?: NotifyStrategyIdFilter;
  /**
   * @remarks
   * Filters by the observeResourceConfig structure. This takes priority over the standalone observeResourceType / observeResourceGlobalScope / observeResourceList fields below. If both are specified and their semantics conflict, the request is rejected.
   */
  observeResourceConfig?: ObserveResourceConfigFilter;
  observeResourceGlobalScope?: ObserveResourceGlobalScopeFilter;
  /**
   * @remarks
   * **[Deprecated]** Filters by a single resource entity ID. This field is retained only for backward compatibility with legacy SDKs. For new integrations, use observeResourceList.contains instead. If this field is not empty and observeResourceList is not specified, it is equivalent to observeResourceList.contains=[observeResourceInstanceId].
   * 
   * @example
   * i-bp1abcxxxxxxxx
   * 
   * @deprecated
   */
  observeResourceInstanceId?: string;
  observeResourceList?: ObserveResourceListFilter;
  /**
   * @remarks
   * **[Deprecated]** Filters by observable resource type. For new integrations, use observeResourceConfig.entityType instead.
   * 
   * @deprecated
   */
  observeResourceType?: ObserveResourceTypeFilter;
  partitionKey?: PartitionKeyFilter;
  severityLevels?: SeverityLevelsFilter;
  status?: StatusFilter;
  uuid?: UuidFilter;
  static names(): { [key: string]: string } {
    return {
      bizSource: 'bizSource',
      datasourceType: 'datasourceType',
      displayName: 'displayName',
      enabled: 'enabled',
      labels: 'labels',
      migrationStatus: 'migrationStatus',
      notificationChannels: 'notificationChannels',
      notifyStrategyId: 'notifyStrategyId',
      observeResourceConfig: 'observeResourceConfig',
      observeResourceGlobalScope: 'observeResourceGlobalScope',
      observeResourceInstanceId: 'observeResourceInstanceId',
      observeResourceList: 'observeResourceList',
      observeResourceType: 'observeResourceType',
      partitionKey: 'partitionKey',
      severityLevels: 'severityLevels',
      status: 'status',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizSource: BizSourceFilter,
      datasourceType: DatasourceTypeFilter,
      displayName: DisplayNameFilter,
      enabled: EnabledFilter,
      labels: LabelsFilter,
      migrationStatus: MigrationStatusFilter,
      notificationChannels: NotificationChannelsFilter,
      notifyStrategyId: NotifyStrategyIdFilter,
      observeResourceConfig: ObserveResourceConfigFilter,
      observeResourceGlobalScope: ObserveResourceGlobalScopeFilter,
      observeResourceInstanceId: 'string',
      observeResourceList: ObserveResourceListFilter,
      observeResourceType: ObserveResourceTypeFilter,
      partitionKey: PartitionKeyFilter,
      severityLevels: SeverityLevelsFilter,
      status: StatusFilter,
      uuid: UuidFilter,
    };
  }

  validate() {
    if(this.bizSource && typeof (this.bizSource as any).validate === 'function') {
      (this.bizSource as any).validate();
    }
    if(this.datasourceType && typeof (this.datasourceType as any).validate === 'function') {
      (this.datasourceType as any).validate();
    }
    if(this.displayName && typeof (this.displayName as any).validate === 'function') {
      (this.displayName as any).validate();
    }
    if(this.enabled && typeof (this.enabled as any).validate === 'function') {
      (this.enabled as any).validate();
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
    }
    if(this.migrationStatus && typeof (this.migrationStatus as any).validate === 'function') {
      (this.migrationStatus as any).validate();
    }
    if(this.notificationChannels && typeof (this.notificationChannels as any).validate === 'function') {
      (this.notificationChannels as any).validate();
    }
    if(this.notifyStrategyId && typeof (this.notifyStrategyId as any).validate === 'function') {
      (this.notifyStrategyId as any).validate();
    }
    if(this.observeResourceConfig && typeof (this.observeResourceConfig as any).validate === 'function') {
      (this.observeResourceConfig as any).validate();
    }
    if(this.observeResourceGlobalScope && typeof (this.observeResourceGlobalScope as any).validate === 'function') {
      (this.observeResourceGlobalScope as any).validate();
    }
    if(this.observeResourceList && typeof (this.observeResourceList as any).validate === 'function') {
      (this.observeResourceList as any).validate();
    }
    if(this.observeResourceType && typeof (this.observeResourceType as any).validate === 'function') {
      (this.observeResourceType as any).validate();
    }
    if(this.partitionKey && typeof (this.partitionKey as any).validate === 'function') {
      (this.partitionKey as any).validate();
    }
    if(this.severityLevels && typeof (this.severityLevels as any).validate === 'function') {
      (this.severityLevels as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.uuid && typeof (this.uuid as any).validate === 'function') {
      (this.uuid as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

