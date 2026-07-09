// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasourceTypeFilter } from "./DatasourceTypeFilter";
import { DisplayNameFilter } from "./DisplayNameFilter";
import { EnabledFilter } from "./EnabledFilter";
import { LabelsFilter } from "./LabelsFilter";
import { NotifyStrategyIdFilter } from "./NotifyStrategyIdFilter";
import { ObserveResourceGlobalScopeFilter } from "./ObserveResourceGlobalScopeFilter";
import { ObserveResourceListFilter } from "./ObserveResourceListFilter";
import { ObserveResourceTypeFilter } from "./ObserveResourceTypeFilter";
import { PartitionKeyFilter } from "./PartitionKeyFilter";
import { SeverityLevelsFilter } from "./SeverityLevelsFilter";
import { StatusFilter } from "./StatusFilter";
import { UuidFilter } from "./UuidFilter";


export class QueryAlertRulesFilter extends $dara.Model {
  datasourceType?: DatasourceTypeFilter;
  /**
   * @remarks
   * Filters alert rules by display name.
   */
  displayName?: DisplayNameFilter;
  /**
   * @remarks
   * Filters alert rules by enabled status.
   */
  enabled?: EnabledFilter;
  /**
   * @remarks
   * Filters alert rules by label.
   */
  labels?: LabelsFilter;
  notifyStrategyId?: NotifyStrategyIdFilter;
  observeResourceGlobalScope?: ObserveResourceGlobalScopeFilter;
  /**
   * @example
   * i-bp1abcxxxxxxxx
   * 
   * @deprecated
   */
  observeResourceInstanceId?: string;
  observeResourceList?: ObserveResourceListFilter;
  observeResourceType?: ObserveResourceTypeFilter;
  partitionKey?: PartitionKeyFilter;
  severityLevels?: SeverityLevelsFilter;
  /**
   * @remarks
   * Filters alert rules by status.
   */
  status?: StatusFilter;
  /**
   * @remarks
   * Filters alert rules by UUID.
   */
  uuid?: UuidFilter;
  static names(): { [key: string]: string } {
    return {
      datasourceType: 'datasourceType',
      displayName: 'displayName',
      enabled: 'enabled',
      labels: 'labels',
      notifyStrategyId: 'notifyStrategyId',
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
      datasourceType: DatasourceTypeFilter,
      displayName: DisplayNameFilter,
      enabled: EnabledFilter,
      labels: LabelsFilter,
      notifyStrategyId: NotifyStrategyIdFilter,
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
    if(this.notifyStrategyId && typeof (this.notifyStrategyId as any).validate === 'function') {
      (this.notifyStrategyId as any).validate();
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

