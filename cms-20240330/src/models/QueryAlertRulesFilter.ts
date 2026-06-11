// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DisplayNameFilter } from "./DisplayNameFilter";
import { EnabledFilter } from "./EnabledFilter";
import { LabelsFilter } from "./LabelsFilter";
import { StatusFilter } from "./StatusFilter";
import { UuidFilter } from "./UuidFilter";


export class QueryAlertRulesFilter extends $dara.Model {
  datasourceType?: string;
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
  observeResourceGlobalScope?: boolean;
  /**
   * @example
   * i-bp1abcxxxxxxxx
   */
  observeResourceInstanceId?: string;
  observeResourceType?: string;
  severityLevels?: string;
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
      observeResourceGlobalScope: 'observeResourceGlobalScope',
      observeResourceInstanceId: 'observeResourceInstanceId',
      observeResourceType: 'observeResourceType',
      severityLevels: 'severityLevels',
      status: 'status',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceType: 'string',
      displayName: DisplayNameFilter,
      enabled: EnabledFilter,
      labels: LabelsFilter,
      observeResourceGlobalScope: 'boolean',
      observeResourceInstanceId: 'string',
      observeResourceType: 'string',
      severityLevels: 'string',
      status: StatusFilter,
      uuid: UuidFilter,
    };
  }

  validate() {
    if(this.displayName && typeof (this.displayName as any).validate === 'function') {
      (this.displayName as any).validate();
    }
    if(this.enabled && typeof (this.enabled as any).validate === 'function') {
      (this.enabled as any).validate();
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
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

